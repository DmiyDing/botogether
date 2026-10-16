<p align="center"><img src="assets/mark.png" width="88" alt="Botogether" /></p>
<h1 align="center">Botogether</h1>
<p align="center"><strong>Your bots. One team.</strong><br/>在一个地方聊天、分工，查看电脑上智能体的执行结果。</p>
<p align="center"><a href="README.md">English</a> · <a href="https://github.com/DmiyDing/botogether/releases">下载安装</a> · <a href="docs/getting-started.md">开始使用</a> · <a href="docs/troubleshooting.md">常见问题</a></p>

把电脑上的编程智能体变成你的助手。给每位 Bot 设置职责，在私聊或群聊中交代目标，选择项目文件夹，再查看回复、文件和检查结果。

**macOS / Windows 未签名预览版：**[下载 v0.1.0-preview.5 DMG](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.5/Botogether-0.1.0-preview.5-mac-arm64.dmg)。Intel Mac preview.5 首次 Rosetta 冷启动超时，正常停止后串行重测通过；实机界面与升级仍待验证。Windows 暂用 preview.2，新版构建受 CI 账户额度限制。本版为未签名、未公证的公开测试预览版，不是稳定版。

此仓库用于安装包和用户说明，应用源码私有。安装桌面包无需私有仓库权限、Node.js 或 npm。目前没有已发布的 npm 包。

> **下载状态：** Apple Silicon 与 Intel Mac 的 DMG / ZIP，以及 Windows EXE 均已完成公开下载与校验，可以使用。Mac 为 preview.5，Windows EXE 为 preview.2；首次安装请使用下方 DMG / EXE；也可选择已完成下载校验的 Mac 备用 ZIP。

## 界面预览

以下为中文模式的宣传示例：群聊参考提供的对话展示 Bot 的交流方式，明确标注为示例，不代表真实模型运行验收。智能体页展示可选的本地 Agent。

![创建第一位助手](assets/screenshots/zh-CN/welcome.png)
![Bot 团队群聊](assets/screenshots/zh-CN/group.png)
![选择与安装本地 Agent](assets/screenshots/zh-CN/agents.png)

截图使用隔离的界面示例，不包含私人聊天。具体功能以对应下载版本的发行说明为准。

## 可以做什么

- 与一个助手聊天，或创建群聊，用 `@` 选择一位或多位成员。
- 为每个会话选择项目文件夹，同一个群聊围绕同一目录和目标协作。
- 指定谁执行、谁独立检查。文件结果保留固定快照，支持查看和下载；助手说“完成”不等于自动验收。
- 在输入框或编辑助手时选择模型，在任务详情查看活动和权限请求。
- 保存有使用范围的偏好与事实，更换 Bot 的模型不会删除 Botogether 已保存的记忆。
- 阅读 Markdown、代码与表格；图片默认适应预览弹窗，也可查看原始尺寸、下载原文件。
- 使用中文或英文界面，选择浅色、深色主题。

## 下载与安装

| 电脑 | 下载 | 怎么安装 |
| --- | --- | --- |
| Apple M 系列芯片 Mac | [v0.1.0-preview.5 DMG](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.5/Botogether-0.1.0-preview.5-mac-arm64.dmg) | 打开 DMG，把 Botogether 拖入 Applications，再从 Applications 打开。 |
| Intel 芯片 Mac | [实验性 DMG](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.5/Botogether-0.1.0-preview.5-mac-x64.dmg) | 拖入 Applications；新版已通过 Rosetta 隔离启动；新版 Intel 实机界面与升级仍待验证。 |
| Windows x64 | [实验性 EXE](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.2/Botogether-0.1.0-preview.2-win-x64.exe) | 运行安装程序；未签名，尚待实机界面与升级验证。 |

[版本说明](https://github.com/DmiyDing/botogether/releases/tag/v0.1.0-preview.5) · [备用 ZIP](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.5/Botogether-0.1.0-preview.5-mac-arm64.zip) · [SHA256SUMS 校验文件](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.5/Botogether-0.1.0-preview.5-mac-arm64-SHA256SUMS.txt)

安装桌面包无需 Node.js 或 npm，首次安装建议使用 DMG。GitHub 自动生成的 **Source code** 压缩包仅包含此下载仓库的文档，不是应用安装包，也不包含私有应用源码。

本仓库仅公开使用说明、产品截图、反馈模板及发行许可。原始需求、设计方案、研发记录和内部审查文档均保留在私有仓库。请从 Release 的 **Assets** 选择 DMG / EXE；无需下载 Source code。

本版已做 ad-hoc 完整性签名，尚无 Apple Developer ID 签名和公证。macOS 可能拦截首次打开，请先阅读[安装帮助](docs/troubleshooting.md)，核对来源和校验和，保留系统安全保护。

运行 `shasum -a 256 Botogether-0.1.0-preview.5-mac-arm64.dmg`，与上面的 SHA256SUMS 文件比较。校验和用于核对文件完整性，不能替代厂商签名。

Intel Mac 与 Windows 备用包和校验文件：

- mac-x64: [备用 ZIP](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.5/Botogether-0.1.0-preview.5-mac-x64.zip) · [SHA256SUMS](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.5/Botogether-0.1.0-preview.5-mac-x64-SHA256SUMS.txt)
- win-x64 (preview.2): [SHA256SUMS](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.2/Botogether-0.1.0-preview.2-win-x64-SHA256SUMS.txt)

Windows 可用 PowerShell 的 `Get-FileHash -Algorithm SHA256 文件名` 核对摘要。

## 第一次使用

1. 打开 **设置 → 智能体**，检测本机安装。桌面包不内置 Codex、Claude 或 Cursor。按界面中的官方指南安装并登录，再回来检测。
2. 从左侧 `+` 菜单创建助手，填写名称，选择可用的本地智能体。
3. 打开聊天，选择项目文件夹。先试：“阅读这个项目，列出三个改进建议，暂时不要改文件。”
4. 发送消息，在需要时查看并批准权限。模型服务由所选智能体或服务商计费，安装包不包含模型额度。
5. 查看回复和文件。需要协作时创建群聊，选成员和共享目录，再明确谁编码、谁评审。

详细步骤见[使用指南](docs/getting-started.md)、[问题排查与更新](docs/troubleshooting.md)、[隐私说明](docs/privacy.md)。

## 更新与当前边界

在 **设置 → 关于与更新** 检查此仓库的更新。preview／alpha／beta 等测试版检查测试版及稳定版，稳定版只检查稳定更新；当前通道可在构建详情查看。下载和安装由你决定，不会为更新自动中断任务。安装新版前退出旧应用，保留一个正常安装入口，并备份数据。

手机远程、通用插件安装、完整 MCP 工具管理、记忆自动提取和主助手跨群自动派发目前尚不可用。智能体能力随引擎和版本变化；平台、签名和已知问题以对应版本说明为准。

## Mac preview.5 改进

群聊执行任务保留原目标和检查，在预算内完成执行、独立验证、评审与返工。回复结束不等于交付已验证，接受前仍需核对结果文件。长结果采用统一阅读列；已处理授权和结束后的执行详情默认折叠，待处理决定保持可见。

点击重试会在停止/revision检查后立即按原范围新建请求。模型名简化显示，提示保留完整ID。实验性OpenCode接入支持原生v2模型目录和确认后的选择；在助手单聊发送独立切换模型指令，可更新后续请求。人设补充当前任务而不覆盖原生基础指令；推荐页增加原创文字工作流。

三组隔离Cursor执行与Codex检查/评审通过，其中一组明确注入静态布局故障后真实返工。声明的Node检查与有限静态HTML几何绑定冻结候选独立验证，不覆盖任意网站或全部项目需求。部分引擎仍可能缺少原生命令证据，长时间混合引擎任务仍在验证。OpenCode免费模型的可用性、额度和数据处理取决于服务方，不会自动安装、登录或回退到收费模型。

## npm 与源码

npm 包尚未发布，因此不提供无法使用的 `npm install` 或 `npx` 命令。以后若提供 npm 安装，会采用单独审核的包，不把私有源码项目整体发布到 npm 或此下载仓库。

长时间三引擎任务仍在验证。本版不提供并行 worktree、手机远程、通用插件、npm 安装或自动记忆提取。

## 反馈

在应用“关于与更新”点击“导出诊断并反馈”，先检查脱敏摘要，再自行提交 Issue。也可以在[问题反馈](https://github.com/DmiyDing/botogether/issues)说明版本、操作系统和复现步骤，截图应遮盖私人信息。Issue 公开可见。不要上传密钥、聊天导出、记忆备份或私有项目文件。安装包附带第三方许可与 notices，各组件保留其对应条款。

## 许可证

Botogether 自有软件使用[专有发行许可证](LICENSE.md)。允许使用官方未修改版本，供个人或企业内部使用；不授予私有源码分发权。第三方组件保留各自许可与 notices。

## 发布状态

三平台为公开测试预览版。早期 Apple Silicon 候选已有本机安装证据；本版完成隔离包内 daemon 检查及安装器内容核对，最终 GUI／升级和 Intel 实机仍待验证。Windows 证据只适用于旧版。当前没有 Apple Developer ID／公证或 Windows 厂商签名条件。

## 致谢

感谢以下项目公开分享的设计与实践：

- [DeepSeek-Bot](https://github.com/Fei2411/DeepSeek-Bot)：Bot 角色交互、群聊轮次与可读记忆。
- [douchat](https://github.com/thinkany-ai/douchat)：本地 Agent 会话、审批体验与桌面发行。
- [orca](https://github.com/stablyai/orca)：项目工作区、任务归属与协作界面。
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)：插件宿主与会话能力的架构边界。
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)：长会话连续性与上下文压缩设计。

这些项目是设计参考，相关功能由 Botogether 独立实现；列举项目不表示合作或背书，也不表示所有参考能力均已实现。实际依赖及其许可另见安装包中的第三方说明。
