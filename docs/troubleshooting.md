# Help and updates / 问题排查与更新

## No installer in Releases / 发布页没有安装包

A platform is not available until its installation file appears in a published release. Do not clone this repository expecting application source; it contains download documentation. npm installation is not available yet.

只有已发布版本中列出的安装文件才可下载。此仓库存放下载说明，不是应用源码；克隆它不能代替安装。npm 安装尚未提供。

## No usable agent / 没有可用智能体

Open **Settings → Agents**, re-detect and use the agent’s installation/login guidance. A packaged Codex CLI still needs authentication. If login or capability checks fail, inspect their reason rather than repeatedly creating bots. Other engines may require their own CLI installation. Never enter an API key into a bot name, prompt or memory.

打开**设置 → 智能体**重新检测，使用对应安装与登录引导。内置 Codex CLI 仍需登录。登录或能力检查失败时先查看原因，不要反复创建助手。其他引擎可能需单独安装 CLI。不要把密钥写在助手名称、提示词或记忆中。

## Old interface or wrong download link / 旧界面或错误下载链接

Application source changes do not update an already installed app. Quit the old app, install the reviewed newer build, then launch the normal installed copy. The official download repository is `DmiyDing/botogether`; private repository access is never a prerequisite for downloads. **Settings → About & updates** shows the version/build identity when available. Keep one normal installed entry; a build directory copy is not a second installation.

源码修改不会自动更新已安装的应用。退出旧应用，安装经过核对的新版，再从正常安装入口启动。官方下载仓库为 `DmiyDing/botogether`，下载不需要私有仓库权限。**设置 → 关于与更新**在可用时显示版本和构建身份。保留一个正常入口，构建目录副本不是第二套安装。

## Cannot check for updates / 无法检查更新

The app checks stable GitHub Releases. No stable release, network failure or GitHub limits can prevent checking; “cannot check” does not mean “latest.” Use the [official release page](https://github.com/DmiyDing/botogether/releases). Quit only after current work has stopped; updates do not silently kill tasks. Back up data before installing. Stable checks do not promote alpha/beta releases automatically.

应用检测 GitHub 稳定版。尚无稳定版、网络失败或 GitHub 限制都可能导致无法检查；“无法检查”不等于“最新”。可查看[官方发布页](https://github.com/DmiyDing/botogether/releases)。先确认工作已停止再退出，更新不会自动杀任务。安装前备份数据；稳定版检测不自动推荐 alpha/beta。

## Image preview fails / 图片预览失败

Use the original download action to inspect the file. Unsupported or unsafe SVG content remains a download; a failed preview does not remove the file. The preview may be sanitized, while the original download retains original bytes. A fitted preview and 100% original size can look similar for a small image.

使用原文件下载入口查看。不支持或不安全的 SVG 保留为下载附件；预览失败不会删除文件。预览可能经过安全处理，原文件下载保留原始字节。较小图片的适应尺寸与 100% 原始尺寸可能相近。

## Deleted chats / 删除聊天

Deleted chats disappear from the sidebar and search; there is no deleted-chat browsing entry. Internal tombstones remain for task consistency. This is not a promise to erase all bytes from disk. Running tasks, group references or enabled schedules may prevent deletion.

删除后聊天从侧栏和搜索消失，不提供已删除聊天浏览入口。内部墓碑用于任务一致性，并不代表擦除磁盘上全部历史。运行任务、群成员引用或启用的定时任务可能阻止删除。

## Reporting a problem / 反馈问题

Provide version/build identity, OS/architecture and reproduction steps. Redact screenshots. Do not upload your database, log directory, backups, credentials or private project files. See [Privacy](privacy.md).

反馈应用版本/构建身份、系统/架构和复现步骤，遮盖截图中的私人信息。不要上传数据库、日志目录、备份、凭据或私有项目文件。参见[隐私说明](privacy.md)。
