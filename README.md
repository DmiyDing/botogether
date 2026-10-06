<p align="center"><img src="assets/mark.png" width="88" alt="Botogether" /></p>
<h1 align="center">Botogether</h1>
<p align="center"><strong>Your bots. One team.</strong><br/>Chat, assign work and inspect results from your local AI agents.</p>
<p align="center"><a href="README.zh-CN.md">简体中文</a> · <a href="https://github.com/DmiyDing/botogether/releases">Downloads</a> · <a href="docs/getting-started.md">Get started</a> · <a href="docs/troubleshooting.md">Help</a></p>

Botogether brings the coding agents on your computer into direct and group chats. Give each bot a role, choose a project folder, and ask for a result. Your agents execute the work; Botogether keeps conversations, permissions, files and review history together.

**Release preparation:** installers are available only when listed in Releases. This repository holds download documentation and reviewed release assets, not private application source. Downloading a published installer does not require private repository access. No npm package has been published yet.

## What you can do

- Chat with a bot, or create a group and use `@` to select one or more members.
- Choose a project folder for each conversation. Group members work toward the same goal in the same folder.
- Assign execution and independent review roles. File tasks keep fixed snapshots for inspection and download; a bot saying “done” does not automatically accept a result.
- Choose models in the composer or bot editor; inspect activity and permissions in task details.
- Save scoped facts and preferences locally. Switching a bot’s model does not erase saved Botogether memories.
- Read formatted answers, preview images fitted to a dialog or at original size, and download original files.
- Use English or Simplified Chinese, with light and dark themes.

## Download and install

[**View releases and installation files →**](https://github.com/DmiyDing/botogether/releases)

The first desktop release targets macOS and Windows. Choose the architecture of your computer. `<version>` in the filenames below means the version listed in the release.

| Computer | Installer | Installation |
| --- | --- | --- |
| Mac with Apple M-series chip | `Botogether-<version>-mac-arm64.dmg` | Open the DMG, drag Botogether into Applications, then open it from Applications. |
| Mac with Intel processor | `Botogether-<version>-mac-x64.dmg` | Choose the Intel build and install it in Applications. |
| Windows x64 | `Botogether-<version>-win-x64.exe` | Run the installer and follow its per-user setup. |

Desktop installers do not require Node.js or npm. ZIP builds, when included, are secondary formats; prefer DMG/EXE for a first installation. A planned platform is not a download guarantee. Signing, system requirements and known issues must be stated in each release’s notes. Do not disable system protection to bypass an unknown installation error.

Compare downloads with the release’s `SHA256SUMS.txt`: macOS `shasum -a 256 <file>`; PowerShell `Get-FileHash <file> -Algorithm SHA256`. Match the exact filename and version. A checksum verifies file consistency, not publisher identity; it does not replace code signing or a trusted download source.

## Your first task

1. Open **Settings → Agents**. Botogether detects supported local installations. The desktop package supplies a Codex CLI; it still needs the agent’s own login. Other agents may require installation and authentication using their official guides.
2. Create a bot from the sidebar `+` menu. Choose a name and an available local agent.
3. Open its chat and choose a project folder. Try: “Read this project and list three improvements. Do not change files yet.”
4. Send your message and inspect any permission requests. Model use is billed by your agent/provider; Botogether does not include model credits.
5. Inspect replies and files. To collaborate, create a group, choose members and a shared folder, then state who should implement and who should review.

Read [Getting started](docs/getting-started.md), [Help and updates](docs/troubleshooting.md), and [Privacy](docs/privacy.md).

## Updates and boundaries

**Settings → About & updates** checks stable releases from this repository. Downloads and installation are manual; updating does not silently interrupt running tasks. Quit the old app before installing a new version. Keep one normal installed copy and back up data before upgrading.

Mobile remote control, general plugin installation, complete MCP tool management, automatic memory extraction and autonomous cross-group dispatch are not currently available. Agent capabilities vary by engine and version. Release notes remain the source of truth for supported platforms, signing and known issues.

## npm and source

No `npm install` or `npx` command is advertised until a separate audited npm package is published. The private application project is not published wholesale to npm or copied into this download repository.

## Feedback

[Report a problem](https://github.com/DmiyDing/botogether/issues) with the version, operating system, steps and a redacted screenshot. Do not include credentials, chat exports, memory backups or private project files. Third-party licenses and notices ship inside the installer; each component retains its own terms.

## License

Botogether-owned software uses a [proprietary distribution license](LICENSE.md). You may use the official unmodified release for personal or internal business use; private source code is not licensed for redistribution. Third-party components retain their own licenses and notices.
