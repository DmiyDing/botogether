<p align="center"><img src="assets/mark.png" width="88" alt="Botogether" /></p>
<h1 align="center">Botogether</h1>
<p align="center"><strong>Your bots. One team.</strong><br/>Chat, assign work and inspect results from your local AI agents.</p>
<p align="center"><a href="README.zh-CN.md">简体中文</a> · <a href="https://github.com/DmiyDing/botogether/releases">Downloads</a> · <a href="docs/getting-started.md">Get started</a> · <a href="docs/troubleshooting.md">Help</a></p>

Botogether brings the coding agents on your computer into direct and group chats. Give each bot a role, choose a project folder, and ask for a result. Your agents execute the work; Botogether keeps conversations, permissions, files and review history together.

**Unsigned macOS / Windows preview:** [Download v0.1.0-preview.3 DMG](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.3/Botogether-0.1.0-preview.3-mac-arm64.dmg). Intel Mac preview.3 is experimental and passed isolated Rosetta startup; native GUI and upgrades remain pending. Windows remains on preview.2 while the new build is blocked by CI account limits. This is an unsigned, unnotarized public preview, not a stable release.

This repository contains download documentation and release assets; application source is private. No private repository access, Node.js or npm is needed to install the desktop app. No npm package has been published.

> **Download status:** Apple Silicon DMG / ZIP, Intel Mac DMG and Windows EXE have been fully downloaded and checksum-verified from the public release. Mac downloads are preview.3; Windows EXE remains preview.2. Use the DMG / EXE links below; unverified ZIP alternatives are not linked.

## Interface preview

English-mode promotional examples. The group conversation is adapted from a supplied transcript and clearly labeled as an example; it does not claim a live model run. Browse the Agent catalog to choose your local tools.

![Create your first assistant](assets/screenshots/en/welcome.png)
![Group chat with your bot team](assets/screenshots/en/group.png)
![Explore local Agents](assets/screenshots/en/agents.png)

## What you can do

- Chat with a bot, or create a group and use `@` to select one or more members.
- Choose a project folder for each conversation. Group members work toward the same goal in the same folder.
- Assign execution and independent review roles. File tasks keep fixed snapshots for inspection and download; a bot saying “done” does not automatically accept a result.
- Choose models in the composer or bot editor; inspect activity and permissions in task details.
- Save scoped facts and preferences locally. Switching a bot’s model does not erase saved Botogether memories.
- Read formatted answers, preview images fitted to a dialog or at original size, and download original files.
- Use English or Simplified Chinese, with light and dark themes.

## Download and install

| Computer | Download | Installation |
| --- | --- | --- |
| Mac with Apple M-series chip | [v0.1.0-preview.3 DMG](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.3/Botogether-0.1.0-preview.3-mac-arm64.dmg) | Open the DMG, drag Botogether into Applications, then open it from Applications. |
| Mac with Intel processor | [Experimental DMG](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.3/Botogether-0.1.0-preview.3-mac-x64.dmg) | Drag into Applications; preview.3 passed isolated Rosetta startup; native Intel GUI and upgrades remain pending. |
| Windows x64 | [Experimental EXE](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.2/Botogether-0.1.0-preview.2-win-x64.exe) | Run the installer; unsigned, with GUI and upgrade validation pending. |

[Release notes](https://github.com/DmiyDing/botogether/releases/tag/v0.1.0-preview.3) · [ZIP alternative](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.3/Botogether-0.1.0-preview.3-mac-arm64.zip) · [SHA256SUMS](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.3/Botogether-0.1.0-preview.3-mac-arm64-SHA256SUMS.txt)

Desktop installers do not require Node.js or npm. Prefer the DMG for your first installation. The automatically generated **Source code** archives contain this distribution repository's documentation, not the application or its private source.

This repository publishes user guides, product screenshots, feedback templates and the distribution license only. Original requirements, designs, development records and internal reviews remain private. Choose a DMG / EXE under Release **Assets**; you do not need the Source code download.

This preview has an ad-hoc integrity signature, without Apple Developer ID or notarization. macOS may block the first launch. Read the [installation help](docs/troubleshooting.md), verify the download source and checksum, and keep system protections enabled.

Check the download with `shasum -a 256 Botogether-0.1.0-preview.3-mac-arm64.dmg` and compare it with the SHA256SUMS file above. A checksum verifies file consistency, not publisher identity.

Intel Mac and Windows alternatives and checksums:

- mac-x64: [SHA256SUMS](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.3/Botogether-0.1.0-preview.3-mac-x64-SHA256SUMS.txt)
- win-x64 (preview.2): [SHA256SUMS](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.2/Botogether-0.1.0-preview.2-win-x64-SHA256SUMS.txt)

On Windows, use PowerShell `Get-FileHash -Algorithm SHA256 filename` to check the download.

## Your first task

1. Open **Settings → Agents**. Botogether detects supported local installations. The desktop package does not bundle Codex, Claude or Cursor. Follow the official setup/sign-in links in the app, then scan again.
2. Create a bot from the sidebar `+` menu. Choose a name and an available local agent.
3. Open its chat and choose a project folder. Try: “Read this project and list three improvements. Do not change files yet.”
4. Send your message and inspect any permission requests. Model use is billed by your agent/provider; Botogether does not include model credits.
5. Inspect replies and files. To collaborate, create a group, choose members and a shared folder, then state who should implement and who should review.

Read [Getting started](docs/getting-started.md), [Help and updates](docs/troubleshooting.md), and [Privacy](docs/privacy.md).

## Updates and boundaries

**Settings → About & updates** checks this repository. Preview builds (alpha/beta/rc) check both prereleases and stable releases; stable builds only check stable updates. Build details show the active channel. Downloads and installation are manual; updating does not silently interrupt running tasks. Quit the old app before installing a new version. Keep one normal installed copy and back up data before upgrading.

Mobile remote control, general plugin installation, complete MCP tool management, automatic memory extraction and autonomous cross-group dispatch are not currently available. Agent capabilities vary by engine and version. Release notes remain the source of truth for supported platforms, signing and known issues.

## npm and source

No `npm install` or `npx` command is advertised until a separate audited npm package is published. The private application project is not published wholesale to npm or copied into this download repository.

Long mixed-engine tasks remain under validation. Parallel worktrees, remote access, generic plugins, npm installation and automatic memory extraction are outside this preview.

## Feedback

[Report a problem](https://github.com/DmiyDing/botogether/issues) with the version, operating system, steps and a redacted screenshot. Issues are public. Do not include credentials, chat exports, memory backups or private project files. Third-party licenses and notices ship inside the installer; each component retains its own terms.

## License

Botogether-owned software uses a [proprietary distribution license](LICENSE.md). You may use the official unmodified release for personal or internal business use; private source code is not licensed for redistribution. Third-party components retain their own licenses and notices.

## Release status

All three targets are public test previews. Apple Silicon Mac has local installation evidence; Intel Mac / Windows CI builds and packaged startup checks do not replace real-device GUI and upgrade validation. No Apple Developer ID / notarization or Windows publisher certificate is currently available.
