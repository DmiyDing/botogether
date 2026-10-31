<p align="center"><img src="assets/mark.png" width="88" alt="Botogether" /></p>
<h1 align="center">Botogether</h1>
<p align="center"><strong>Your bots. One team.</strong><br/>Chat, assign work and inspect results from your local AI agents.</p>
<p align="center"><a href="README.zh-CN.md">简体中文</a></p>

Botogether brings the coding agents on your computer into direct and group chats. Give each bot a role, choose a project folder, and ask for a result. Your agents execute the work; Botogether keeps conversations, permissions, files and review history together.

## Why Botogether

- **Free to use.** Botogether adds no app subscription. Your chosen Agent or model provider may charge separately; free model availability and limits are set by that provider.
- **Local first.** Conversations, task records and project context stay on your device. The Agents and services you choose may send prompts or files to their own cloud services.
- **Visible control.** Review permission requests, scope credentials to a service and inspect recorded results. System encryption is available for saved keys; you choose which tools and services to trust.

## Interface preview

The first three images are isolated V2.3 interface examples. The fourth reuses our earlier image-generation showcase; capabilities depend on the selected Agent, model and tools.

![Start with a free assistant](assets/screenshots/en/welcome.png)

**No Agent installed? Start for free.** Install OpenCode inside the app, then choose an available free trial model. Paper companions greet, blink and follow the pointer; a still image cannot show the animation.

![Plan together in a group chat](assets/screenshots/en/group.png)

**Your bots. One team.** Discuss ideas, assign roles and keep the conversation together. This dialogue is clearly marked as a UI example.

![Install supported Agents inside the app](assets/screenshots/en/agents.png)

**Set up without the detour.** OpenCode, Codex and Claude Code offer in-app installation on supported systems. Other entries have explicit installation guides. Installing an Agent does not include its account or paid model usage.

![Generate, preview and download an image](assets/screenshots/en/showcase.png)

**From an idea to a visual result.** Preview artwork in the conversation and download the original. This English image is a localized illustration of the authorized Chinese usage screenshot, not a separate English model-run receipt.

## Download and install

This is a testing preview. macOS has no Developer ID/notarization; Windows has no publisher signature.

| Computer | Download | Installation |
| --- | --- | --- |
| Mac with Apple M-series chip | [v0.1.0-preview.8 DMG](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.8/Botogether-0.1.0-preview.8-mac-arm64.dmg) | Open the DMG, drag Botogether into Applications, then open it from Applications. |
| Windows x64 | [v0.1.0-preview.8 installer](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.8/Botogether-0.1.0-preview.8-win-x64.exe) | Run the installer and follow its prompts. It has no publisher signature; read the installation help below. |
| Intel Mac (historical preview.7) | [Experimental DMG](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.7/Botogether-0.1.0-preview.7-mac-x64.dmg) | Drag into Applications; preview.7 passed isolated Rosetta startup; native Intel GUI and upgrades remain pending. |

[Release notes](https://github.com/DmiyDing/botogether/releases/tag/v0.1.0-preview.8) · [ZIP alternative](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.8/Botogether-0.1.0-preview.8-mac-arm64.zip) · [SHA256SUMS](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.8/Botogether-0.1.0-preview.8-mac-arm64-SHA256SUMS.txt)

<details>
<summary>Blocked on first launch? Installation help</summary>

**First installation blocked? Read this first.** This preview has no Apple Developer ID signature/notarization or Windows publisher signature. Download only from the [official Releases](https://github.com/DmiyDing/botogether/releases) and compare the checksums.

**Mac:** Drag Botogether into Applications and try opening it once → **System Settings → Privacy & Security → Open Anyway** beside the Botogether notice → confirm as prompted and open it again. [Apple's illustrated guide](https://support.apple.com/en-us/102445)

**Windows:** For “Windows protected your PC,” verify the source, then choose **More info → Run anyway** when offered. If the option is missing, or Smart App Control or organizational policy blocks it, stop and report the exact notice; keep protections enabled. [Microsoft guidance](https://learn.microsoft.com/en-us/windows/apps/package-and-deploy/smartscreen-reputation)

Do not disable Gatekeeper, SmartScreen or antivirus. A damaged-app or malware warning calls for checking the download and integrity, not dismissing the warning.

</details>

Desktop installers do not require Node.js or npm. Prefer the DMG for your first installation. The automatically generated **Source code** archives contain this distribution repository's documentation, not the application or its private source.

This repository publishes user guides, product screenshots, feedback templates and the distribution license only. Original requirements, designs, development records and internal reviews remain private. Choose a DMG / EXE under Release **Assets**; you do not need the Source code download.

The macOS preview has an ad-hoc integrity signature, without Apple Developer ID or notarization. macOS may block the first launch. Read the [installation help](docs/troubleshooting.md), verify the download source and checksum, and keep system protections enabled.

Check the download with `shasum -a 256 Botogether-0.1.0-preview.8-mac-arm64.dmg` and compare it with the SHA256SUMS file above. A checksum verifies file consistency, not publisher identity.

Intel Mac and Windows alternatives and checksums:

- mac-x64: [ZIP alternative](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.7/Botogether-0.1.0-preview.7-mac-x64.zip) · [SHA256SUMS](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.7/Botogether-0.1.0-preview.7-mac-x64-SHA256SUMS.txt)
- win-x64: [ZIP alternative](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.8/Botogether-0.1.0-preview.8-win-x64.zip) · [SHA256SUMS](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.8/Botogether-0.1.0-preview.8-win-x64-SHA256SUMS.txt)

On Windows, use PowerShell `Get-FileHash -Algorithm SHA256 filename` to check the download.

## Your first task

The following in-app installation flow is available in preview.8.

1. **No AI tools installed:** click **Start for free**. OpenCode downloads and is checked inside the app; no Node.js, npm or terminal is needed.
2. Choose a currently available **free trial model**, then click **Start chatting**. The app rechecks availability and never silently switches to a paid model.
3. **Already have an Agent:** create an assistant and select the detected tool. Complete account sign-in if requested.
4. Try a small task: “Create a weekend checklist.” Open the file, then ask for a revision. Inspect permissions and the actual result.
5. Add teammates when useful. Choose who should prepare the result and who should check it. More members can add usage and coordination costs.

Read [Getting started](docs/getting-started.md), [Help and updates](docs/troubleshooting.md), and [Privacy](docs/privacy.md).

## What you can do

- Chat with a bot, or create a group and use `@` to select one or more members.
- Choose a project folder for each conversation. Group members work toward the same goal in the same folder.
- Assign execution and independent review roles. File tasks keep fixed snapshots for inspection and download; a bot saying “done” does not automatically accept a result.
- Choose models in the composer or bot editor; inspect activity and permissions in task details.
- Save scoped facts and preferences locally. Switching a bot’s model does not erase saved Botogether memories.
- Read formatted answers, preview images fitted to a dialog or at original size, and download original files.
- Use English or Simplified Chinese, with light and dark themes.

## Updates and boundaries

**Settings → About & updates** checks this repository. Preview builds (alpha/beta/rc) check both prereleases and stable releases; stable builds only check stable updates. Build details show the active channel. Downloads and installation are manual; updating does not silently interrupt running tasks. Quit the old app before installing a new version. Keep one normal installed copy and back up data before upgrading.

Mobile remote control, general plugin installation, complete MCP tool management, automatic memory extraction and autonomous cross-group dispatch are not currently available. Agent capabilities vary by engine and version. Release notes remain the source of truth for supported platforms, signing and known issues.

## preview.8 update

- Group conversations retain native Agent tool access; actual search and execution depend on the selected engine, model and permissions.
- Supported connections can prepare while you type, without sending the draft or starting a model task.
- Pending approvals appear one at a time. Assistant avatars and colors are visible during creation.
- New assistants use Buddy / 小助 and a short greeting. Conversation context and selected-folder handling were improved.
- Windows includes supported language resources and five native icon sizes. Both selected platforms passed package, native GUI and existing-data upgrade checks locally.

External tool delays and free-model availability still vary. This release does not establish an overall speedup or production stability.

## Release history

[preview.8 — current Mac ARM64 / Windows x64](https://github.com/DmiyDing/botogether/releases/tag/v0.1.0-preview.8) · [preview.7 — previous Mac and historical Intel](https://github.com/DmiyDing/botogether/releases/tag/v0.1.0-preview.7) · [preview.6 — earlier milestone](https://github.com/DmiyDing/botogether/releases/tag/v0.1.0-preview.6) · [preview.1 — first public release](https://github.com/DmiyDing/botogether/releases/tag/v0.1.0-preview.1)

## npm and source

No `npm install` or `npx` command is advertised until a separate audited npm package is published. The private application project is not published wholesale to npm or copied into this download repository.

Long mixed-engine tasks remain under validation. Parallel worktrees, remote access, generic plugins, npm installation and automatic memory extraction are outside this preview.

## Feedback

[Report a problem](https://github.com/DmiyDing/botogether/issues) with the version, operating system, steps and a redacted screenshot. Issues are public. Do not include credentials, chat exports, memory backups or private project files. Third-party licenses and notices ship inside the installer; each component retains its own terms.

## License

Botogether-owned software uses a [proprietary distribution license](LICENSE.md). You may use the official unmodified release for personal or internal business use; private source code is not licensed for redistribution. Third-party components retain their own licenses and notices.

## Release status

preview.8 is published for Apple Silicon Mac and Windows x64. The six assets passed anonymous full download/hash checks; native installation, GUI and existing-data upgrades passed locally. Intel Mac and Windows ARM64 are not included. macOS has no Developer ID/notarization and Windows has no publisher signature. This is a testing preview; full model/account coverage and production stability are not claimed.

## Acknowledgments

Thanks to these projects for sharing their designs and practices:

- [DeepSeek-Bot](https://github.com/Fei2411/DeepSeek-Bot): Bot interaction, group rounds, and readable memory.
- [douchat](https://github.com/thinkany-ai/douchat): local Agent sessions, approvals, and desktop distribution.
- [orca](https://github.com/stablyai/orca): project workspaces, task ownership, and collaboration interfaces.
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness): boundaries between a plugin host and session capabilities.
- [Hermes Agent](https://github.com/NousResearch/hermes-agent): long-running conversations and context compression.

These are design references for Botogether's independently implemented features. This acknowledgment does not imply affiliation, endorsement, or that every referenced capability is implemented. Actual dependencies and licenses are listed separately in the installer's third-party notices.
