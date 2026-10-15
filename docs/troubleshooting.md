# Help and updates / 问题排查与更新

## No installer in Releases / 发布页没有安装包

A platform is not available until its installation file appears in a published release. Do not clone this repository expecting application source; it contains download documentation. npm installation is not available yet.

只有已发布版本中列出的安装文件才可下载。此仓库存放下载说明，不是应用源码；克隆它不能代替安装。npm 安装尚未提供。

## No usable agent / 没有可用智能体

Open **Settings → Agents**, re-detect and use the agent’s installation/login guidance. Botogether does not bundle Agent CLIs; install and authenticate them using their official guidance. If login or capability checks fail, inspect their reason rather than repeatedly creating bots. Other engines may require their own CLI installation. Never enter an API key into a bot name, prompt or memory.

打开**设置 → 智能体**重新检测，使用对应安装与登录引导。安装包不内置 Agent。请按官方指南自行安装并登录。登录或能力检查失败时先查看原因，不要反复创建助手。其他引擎可能需单独安装 CLI。不要把密钥写在助手名称、提示词或记忆中。

## Old interface or wrong download link / 旧界面或错误下载链接

Application source changes do not update an already installed app. Quit the old app, install the reviewed newer build, then launch the normal installed copy. The official download repository is `DmiyDing/botogether`; private repository access is never a prerequisite for downloads. **Settings → About & updates** shows the version/build identity when available. Keep one normal installed entry; a build directory copy is not a second installation.

源码修改不会自动更新已安装的应用。退出旧应用，安装经过核对的新版，再从正常安装入口启动。官方下载仓库为 `DmiyDing/botogether`，下载不需要私有仓库权限。**设置 → 关于与更新**在可用时显示版本和构建身份。保留一个正常入口，构建目录副本不是第二套安装。

## Cannot check for updates / 无法检查更新

Preview builds check published prereleases and stable releases; stable builds check only stable releases. No published release, network failure or GitHub limits can prevent checking; “cannot check” does not mean “latest.” Use the [official release page](https://github.com/DmiyDing/botogether/releases). Quit only after current work has stopped; updates do not silently kill tasks. Back up data before installing.

测试版检查已发布测试版及稳定版，稳定版只检查稳定更新。尚无发布版本、网络失败或 GitHub 限制都可能导致无法检查；“无法检查”不等于“最新”。可查看[官方发布页](https://github.com/DmiyDing/botogether/releases)。先确认工作已停止再退出，更新不会自动杀任务。安装前备份数据。

<a id="unsigned-preview-installation"></a>

## Unsigned preview installation / 未签名测试版安装

Preview release notes must state signing status and supported OS/architecture. A checksum confirms matching bytes, not that a file is safe or its publisher is authenticated. Download only from the official release page. On macOS, after verifying the source, use the per-app **Open Anyway** option in Privacy & Security if offered; see [Apple’s instructions](https://support.apple.com/en-us/102445). Do not disable Gatekeeper or remove quarantine automatically. On Windows, SmartScreen or [Smart App Control](https://learn.microsoft.com/en-us/windows/apps/develop/smart-app-control/overview) may block unsigned apps. If policy prevents installation, keep protections enabled and wait for a compatible signed release; do not turn off antivirus or security controls. Report the exact warning with personal details redacted.

测试版说明必须标明签名状态及支持的系统／架构。摘要仅证明文件字节一致，不代表文件安全或发布者已认证；只从官方发布页下载。macOS 核对来源后，如系统提供该选项，可按 [Apple 官方说明](https://support.apple.com/zh-cn/102445)在“隐私与安全性”中对这一个应用选择“仍要打开”，不关闭 Gatekeeper、不自动清除隔离属性。Windows 的 SmartScreen 或 [Smart App Control](https://learn.microsoft.com/en-us/windows/apps/develop/smart-app-control/overview)可能阻止未签名应用；若安全策略不允许，请保留保护并等待兼容的签名版本，不关闭杀毒软件或安全控制。反馈时提供警告原文并遮盖私人信息。

## Image preview fails / 图片预览失败

Use the original download action to inspect the file. Unsupported or unsafe SVG content remains a download; a failed preview does not remove the file. The preview may be sanitized, while the original download retains original bytes. A fitted preview and 100% original size can look similar for a small image.

使用原文件下载入口查看。不支持或不安全的 SVG 保留为下载附件；预览失败不会删除文件。预览可能经过安全处理，原文件下载保留原始字节。较小图片的适应尺寸与 100% 原始尺寸可能相近。

## Deleted chats / 删除聊天

Deleted chats disappear from the sidebar and search; there is no deleted-chat browsing entry. Internal tombstones remain for task consistency. This is not a promise to erase all bytes from disk. Running tasks, group references or enabled schedules may prevent deletion.

删除后聊天从侧栏和搜索消失，不提供已删除聊天浏览入口。内部墓碑用于任务一致性，并不代表擦除磁盘上全部历史。运行任务、群成员引用或启用的定时任务可能阻止删除。

## Reporting a problem / 反馈问题

Provide version/build identity, OS/architecture and reproduction steps. Redact screenshots. Do not upload your database, log directory, backups, credentials or private project files. See [Privacy](privacy.md).

反馈应用版本/构建身份、系统/架构和复现步骤，遮盖截图中的私人信息。不要上传数据库、日志目录、备份、凭据或私有项目文件。参见[隐私说明](privacy.md)。


## Saved result and follow-up / 已保存结果与后续调整

In the unreleased preview.4 candidate, an image awaiting optional review can be viewed or downloaded directly. Ask for changes in chat; you do not need to accept the result first. “Review next steps” points to explicit output checks or important review findings. This does not claim those checks passed. Actual execution failures, missing files and unknown process effects remain separate blockers.

尚未公开发布的 preview.4 候选中，仅有可选评审待确认的图片可以直接查看、下载；不满意时在聊天中继续提出修改要求，无需先接受结果。“确认与下一步”用于查看指定检查或重要评审问题，不表示检查已经通过。实际执行失败、缺少文件及进程未确认停止仍是独立阻塞项。

For custom-service authentication, Keychain is not mandatory: environment variables and the candidate's session-only mode are alternatives. Choosing session-only requires re-entering the key; Botogether does not decrypt and migrate old keys silently. Avoid putting keys in chat or public reports.

自定义服务认证并非必须使用钥匙串：可以配置环境变量，或在候选中选择“仅本次打开有效”并重新填写密钥。不会静默解密迁移旧密钥；不要把密钥发到聊天或公开反馈。


## Agent preparation timeout / 助手准备超时

In preview.4 candidates, protocol initialization, work-session creation and model selection have distinct timeout messages. Cursor Auto resolves to the native session's acknowledged model ID; selecting it again is unnecessary when it is already current. A model-selection timeout occurs before the generation request is sent. No model is silently substituted and the request is not automatically replayed. Inspect the task's execution build; older versions used a shared startup-timeout message.

preview.4 候选区分协议初始化、创建工作会话和选择模型超时。Cursor Auto 映射为原生会话确认的模型 ID；当前已经是该模型时不重复设置。模型选择超时发生在生成请求发送之前，不静默替换模型或自动重放。查看任务的执行构建版本；旧版使用统一的准备超时文案。
