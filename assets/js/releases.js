export const releasesPage = 'https://github.com/DmiyDing/botogether/releases';
export const releaseApi = 'https://api.github.com/repos/DmiyDing/botogether/releases?per_page=10';

export function selectRelease(releases) {
  const release = Array.isArray(releases) && releases.find(entry => entry?.draft === false);
  if (!release || !/^v?[\w.-]+$/.test(release.tag_name ?? '') || !Array.isArray(release.assets)) return null;

  function find(suffix) {
    const asset = release.assets.find(entry => entry?.name?.endsWith(suffix));
    if (!asset || !/^[\w.-]+$/.test(asset.name)) return null;
    const expected = `${releasesPage}/download/${release.tag_name}/${asset.name}`;
    return asset.browser_download_url === expected ? expected : null;
  }

  return {
    version: release.tag_name,
    mac: find('mac-arm64.dmg'),
    win: find('win-x64.exe'),
  };
}

export async function getRelease(fallback, request = fetch) {
  try {
    const response = await request(releaseApi, { signal: AbortSignal.timeout(4000) });
    if (response.ok) return selectRelease(await response.json()) ?? fallback;
  } catch {
    // Keep the download destinations supplied by the page.
  }
  return fallback;
}
