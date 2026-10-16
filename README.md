<p align="center"><img src="assets/mark.png" width="88" alt="Botogether" /></p>
<h1 align="center">Botogether</h1>
<p align="center"><strong>Your bots. One team.</strong><br/>Chat, assign work and inspect results from your local AI agents.</p>
<p align="center"><a href="README.zh-CN.md">简体中文</a> · <a href="https://github.com/DmiyDing/botogether/releases">Downloads</a> · <a href="docs/getting-started.md">Get started</a> · <a href="docs/troubleshooting.md">Help</a></p>

Botogether brings the coding agents on your computer into direct and group chats. Give each bot a role, choose a project folder, and ask for a result. Your agents execute the work; Botogether keeps conversations, permissions, files and review history together.

**Unsigned macOS / Windows preview:** [Download v0.1.0-preview.5 DMG](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.5/Botogether-0.1.0-preview.5-mac-arm64.dmg). Intel Mac preview.5 is experimental: its first Rosetta cold start timed out, then a serial retry passed; native GUI and upgrades remain pending. Windows remains on preview.2 while the new build is blocked by CI account limits. This is an unsigned, unnotarized public preview, not a stable release.

This repository contains download documentation and release assets; application source is private. No private repository access, Node.js or npm is needed to install the desktop app. No npm package has been published.

> **Download status:** Apple Silicon and Intel Mac DMG / ZIP, and Windows EXE have been fully downloaded and checksum-verified from the public release. Mac downloads are preview.5; Windows EXE remains preview.2. For first-time installation, use the DMG / EXE links below; verified Mac ZIP alternatives are also available.

## Why Botogether

- **Free to use.** Botogether adds no app subscription. Your chosen Agent or model provider may charge separately; free model availability and limits are set by that provider.
- **Local first.** Conversations, task records and project context stay on your device. The Agents and services you choose may send prompts or files to their own cloud services.
- **Visible control.** Review permission requests, scope credentials to a service and inspect recorded results. System encryption is available for saved keys; you choose which tools and services to trust.

## Interface preview

English-mode promotional examples. The group conversation is adapted from a supplied transcript and clearly labeled as an example; it does not claim a live model run. Browse the Agent catalog to choose your local tools.

![Create your first assistant](assets/screenshots/en/welcome.png)

**Create your assistant.** Connect an installed Agent and give the bot a role. The original paper mascot is a stable identity; animated avatars are future work.

![Group chat with your bot team](assets/screenshots/en/group.png)

**One conversation, multiple bots.** Use roles and mentions to coordinate work. This labeled discussion example does not prove a delivered project.

![Explore local Agents](assets/screenshots/en/agents.png)

**Bring your local tools.** Discover installed Agents and inspect their individual setup and control capabilities.

![Create and preview visual deliverables](assets/screenshots/en/showcase.png)

**Create, preview and download images.** English localized illustration of the user-supplied Chinese screenshot: a model produces a poster and the conversation offers an image preview and original download. This AI-translated illustration is not a real English model-run receipt. Image generation depends on the chosen Agent/model/tools; the task may still need verification.

The first three screenshots use isolated examples; the final image is an AI-localized illustration of a user-authorized screenshot. See the release notes for the features available in each download.

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
| Mac with Apple M-series chip | [v0.1.0-preview.5 DMG](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.5/Botogether-0.1.0-preview.5-mac-arm64.dmg) | Open the DMG, drag Botogether into Applications, then open it from Applications. |
| Mac with Intel processor | [Experimental DMG](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.5/Botogether-0.1.0-preview.5-mac-x64.dmg) | Drag into Applications; preview.5 passed a serial Rosetta startup retry; native Intel GUI and upgrades remain pending. |
| Windows x64 | [Experimental EXE](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.2/Botogether-0.1.0-preview.2-win-x64.exe) | Run the installer; unsigned, with GUI and upgrade validation pending. |

[Release notes](https://github.com/DmiyDing/botogether/releases/tag/v0.1.0-preview.5) · [ZIP alternative](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.5/Botogether-0.1.0-preview.5-mac-arm64.zip) · [SHA256SUMS](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.5/Botogether-0.1.0-preview.5-mac-arm64-SHA256SUMS.txt)

Desktop installers do not require Node.js or npm. Prefer the DMG for your first installation. The automatically generated **Source code** archives contain this distribution repository's documentation, not the application or its private source.

This repository publishes user guides, product screenshots, feedback templates and the distribution license only. Original requirements, designs, development records and internal reviews remain private. Choose a DMG / EXE under Release **Assets**; you do not need the Source code download.

This preview has an ad-hoc integrity signature, without Apple Developer ID or notarization. macOS may block the first launch. Read the [installation help](docs/troubleshooting.md), verify the download source and checksum, and keep system protections enabled.

Check the download with `shasum -a 256 Botogether-0.1.0-preview.5-mac-arm64.dmg` and compare it with the SHA256SUMS file above. A checksum verifies file consistency, not publisher identity.

Intel Mac and Windows alternatives and checksums:

- mac-x64: [ZIP alternative](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.5/Botogether-0.1.0-preview.5-mac-x64.zip) · [SHA256SUMS](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.5/Botogether-0.1.0-preview.5-mac-x64-SHA256SUMS.txt)
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

## Changes in the Mac preview.5 release

Group implementation tasks retain the original goal and declared checks through bounded execution, independent verification, review and repair. A completed reply does not mean verified delivery; inspect the resulting files before accepting. Long results now use a readable column. Handled permissions and finished execution details collapse; pending decisions remain visible.

Retry submits a new scoped request directly after stop/revision checks. Compact model labels retain full IDs in tooltips. Experimental OpenCode discovery supports native v2 model choices and acknowledged selection; a standalone model-selection request in a bot chat updates subsequent requests. Role instructions supplement the current task, and original text workflows are available through recommendations.

Three isolated Cursor/Codex samples passed, including an explicitly injected static-layout fault followed by real repair. Declared Node checks and constrained static HTML geometry are independently verified against a frozen candidate; this does not cover arbitrary websites or all project requirements. Native command evidence can still be unavailable, and long mixed-engine workflows remain under validation. OpenCode free-model availability, limits and data handling depend on the provider; no automatic installation, login or paid-model fallback.

## npm and source

No `npm install` or `npx` command is advertised until a separate audited npm package is published. The private application project is not published wholesale to npm or copied into this download repository.

Long mixed-engine tasks remain under validation. Parallel worktrees, remote access, generic plugins, npm installation and automatic memory extraction are outside this preview.

## Feedback

[Report a problem](https://github.com/DmiyDing/botogether/issues) with the version, operating system, steps and a redacted screenshot. Issues are public. Do not include credentials, chat exports, memory backups or private project files. Third-party licenses and notices ship inside the installer; each component retains its own terms.

## License

Botogether-owned software uses a [proprietary distribution license](LICENSE.md). You may use the official unmodified release for personal or internal business use; private source code is not licensed for redistribution. Third-party components retain their own licenses and notices.

## Release status

All three targets are public test previews. Earlier Apple Silicon candidates have local installation evidence; this release passed isolated packaged daemon checks and installer content verification. Final GUI/upgrade and native Intel validation remain pending; Windows evidence is for its older version. No Apple Developer ID / notarization or Windows publisher certificate is currently available.

## Acknowledgments

Thanks to these projects for sharing their designs and practices:

- [DeepSeek-Bot](https://github.com/Fei2411/DeepSeek-Bot): Bot interaction, group rounds, and readable memory.
- [douchat](https://github.com/thinkany-ai/douchat): local Agent sessions, approvals, and desktop distribution.
- [orca](https://github.com/stablyai/orca): project workspaces, task ownership, and collaboration interfaces.
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness): boundaries between a plugin host and session capabilities.
- [Hermes Agent](https://github.com/NousResearch/hermes-agent): long-running conversations and context compression.

These are design references for Botogether's independently implemented features. This acknowledgment does not imply affiliation, endorsement, or that every referenced capability is implemented. Actual dependencies and licenses are listed separately in the installer's third-party notices.
