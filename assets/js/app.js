/* Botogether 官网 —— 主题、导航与语言切换 */
(function () {
  "use strict";

  var STORE_LANG = "bt.lang";
  var STORE_THEME = "bt.theme";
  var DEFAULT_LANG = "zh-CN";

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  /* ---------- 主题 ---------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(STORE_THEME, theme); } catch (e) {}
  }
  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem(STORE_THEME); } catch (e) {}
    if (!saved) {
      saved = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    var q = param("theme");
    if (q === "light" || q === "dark") saved = q;
    applyTheme(saved);
  }

  /* ---------- 语言 ---------- */
  function currentLang() {
    var q = param("lang");
    if (q && window.BT_I18N[q]) return q;
    var lang = null;
    try { lang = localStorage.getItem(STORE_LANG); } catch (e) {}
    if (!lang || !window.BT_I18N[lang]) lang = DEFAULT_LANG;
    return lang;
  }

  function param(name) {
    try {
      return new URLSearchParams(window.location.search).get(name);
    } catch (e) {
      return null;
    }
  }

  function applyLang(lang) {
    var dict = window.BT_I18N[lang] || window.BT_I18N[DEFAULT_LANG];
    $$("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    $$("[data-i18n-attr]").forEach(function (el) {
      // 格式：attr:value|attr2:value2
      el.getAttribute("data-i18n-attr").split("|").forEach(function (pair) {
        var idx = pair.indexOf(":");
        if (idx < 0) return;
        var attr = pair.slice(0, idx).trim();
        var key = pair.slice(idx + 1).trim();
        if (dict[key] !== undefined) el.setAttribute(attr, dict[key]);
      });
    });
    document.documentElement.setAttribute("lang", lang === "zh-CN" ? "zh-CN" : "en");
    // 标题与描述由页面上的 data-i18n / data-i18n-attr 决定，这里不再统一覆写
    try { localStorage.setItem(STORE_LANG, lang); } catch (e) {}
  }

  /* ---------- canonical / 分享卡 ---------- */
  // 域名尚未最终确定，canonical 用当前访问来源生成，避免指向占位域名
  function applyCanonical() {
    var origin = window.location.origin;
    var path = window.location.pathname;
    if (!/^https?:$/.test(window.location.protocol)) return;
    var href = origin + path;
    if (/\/index\.html$/.test(path)) href = origin + path.replace(/\/index\.html$/, "/");
    var link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
    var ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", href);
    var ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) {
      var raw = ogImg.getAttribute("content");
      if (raw && raw.charAt(0) !== "http") {
        try {
          ogImg.setAttribute("content", new URL(raw, window.location.href).href);
        } catch (e) {}
      }
    }
  }

  /* ---------- 交互 ---------- */
  function initHeader() {
    var header = $(".site-header");
    if (header) {
      var onScroll = function () {
        header.classList.toggle("scrolled", window.scrollY > 8);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    var toggle = $(".menu-toggle");
    var nav = $(".nav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
      });
      nav.addEventListener("click", function (e) {
        if (e.target.tagName === "A") nav.classList.remove("open");
      });
    }
  }

  function initControls() {
    var langBtn = $("[data-lang-toggle]");
    if (langBtn) {
      langBtn.addEventListener("click", function () {
        applyLang(currentLang() === "zh-CN" ? "en" : "zh-CN");
      });
    }
    var themeBtn = $("[data-theme-toggle]");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        var now = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(now);
      });
    }
  }

  function init() {
    initTheme();
    applyLang(currentLang());
    applyCanonical();
    initHeader();
    initControls();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
