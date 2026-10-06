<p align="center"><img src="assets/mark.png" width="88" alt="Botogether" /></p>
<h1 align="center">Botogether</h1>
<p align="center"><strong>Your bots. One team.</strong><br/>在一个地方聊天、分工，查看电脑上智能体的执行结果。</p>
<p align="center"><a href="README.md">English</a> · <a href="https://github.com/DmiyDing/botogether/releases">下载安装</a> · <a href="docs/getting-started.md">开始使用</a> · <a href="docs/troubleshooting.md">常见问题</a></p>

把电脑上的编程智能体变成你的助手。给每位 Bot 设置职责，在私聊或群聊中交代目标，选择项目文件夹，再查看回复、文件和检查结果。

**正在准备发布：**只有 Releases 中实际列出的安装包才可下载。此仓库用于安装包和用户说明，不存放私有源码；下载已发布的安装包不需要私有源码仓库权限。目前没有已发布的 npm 包。

## 可以做什么

- 与一个助手聊天，或创建群聊，用 `@` 选择一位或多位成员。
- 为每个会话选择项目文件夹，同一个群聊围绕同一目录和目标协作。
- 指定谁执行、谁独立检查。文件结果保留固定快照，支持查看和下载；助手说“完成”不等于自动验收。
- 在输入框或编辑助手时选择模型，在任务详情查看活动和权限请求。
- 保存有使用范围的偏好与事实，更换 Bot 的模型不会删除 Botogether 已保存的记忆。
- 阅读 Markdown、代码与表格；图片默认适应预览弹窗，也可查看原始尺寸、下载原文件。
- 使用中文或英文界面，选择浅色、深色主题。

## 下载与安装

[**前往发布页选择安装包 →**](https://github.com/DmiyDing/botogether/releases)

第一期提供 macOS 和 Windows 桌面包。请按电脑架构选择；文件名中的 `<version>` 对应发布版本，不是需要照抄的命令。

| 电脑 | 安装包 | 怎么安装 |
| --- | --- | --- |
| Apple M 系列芯片 Mac | `Botogether-<version>-mac-arm64.dmg` | 打开 DMG，把 Botogether 拖入 Applications，再从 Applications 打开。 |
| Intel 芯片 Mac | `Botogether-<version>-mac-x64.dmg` | 选择 Intel 版本，安装到 Applications。 |
| Windows x64 | `Botogether-<version>-win-x64.exe` | 运行安装向导，按提示完成当前用户安装。 |

桌面包不要求安装 Node.js 或 npm。发布页如提供 ZIP，可作为备用解压格式；首次安装优先选择 DMG/EXE。实际列出且通过该平台审核的文件才代表可下载，不把计划支持当成已提供。系统要求、签名和已知问题会写在对应版本说明中；遇到安装失败先核对来源和说明，不关闭系统保护来强行运行未知文件。

可对照发布页的 `SHA256SUMS.txt` 检查下载：Mac 使用 `shasum -a 256 文件名`，PowerShell 使用 `Get-FileHash 文件名 -Algorithm SHA256`，与同一版本、同一文件名的摘要比较。摘要只能检查文件是否一致，不能替代签名与可信来源。

## 第一次使用

1. 打开 **设置 → 智能体**，检测本机安装。桌面包提供 Codex CLI，但仍需完成智能体自己的登录；其他智能体可能需要按官方指南安装并登录。
2. 从左侧 `+` 菜单创建助手，填写名称，选择可用的本地智能体。
3. 打开聊天，选择项目文件夹。先试：“阅读这个项目，列出三个改进建议，暂时不要改文件。”
4. 发送消息，在需要时查看并批准权限。模型服务由所选智能体或服务商计费，安装包不包含模型额度。
5. 查看回复和文件。需要协作时创建群聊，选成员和共享目录，再明确谁编码、谁评审。

详细步骤见[使用指南](docs/getting-started.md)、[问题排查与更新](docs/troubleshooting.md)、[隐私说明](docs/privacy.md)。

## 更新与当前边界

在 **设置 → 关于与更新** 检查此仓库的稳定版。下载和安装由你决定，不会为更新自动中断任务。安装新版前退出旧应用，保留一个正常安装入口，并备份数据。

手机远程、通用插件安装、完整 MCP 工具管理、记忆自动提取和主助手跨群自动派发目前尚不可用。智能体能力随引擎和版本变化；平台、签名和已知问题以对应版本说明为准。

## npm 与源码

npm 包尚未发布，因此不提供无法使用的 `npm install` 或 `npx` 命令。以后若提供 npm 安装，会采用单独审核的包，不把私有源码项目整体发布到 npm 或此下载仓库。

## 反馈

请在[问题反馈](https://github.com/DmiyDing/botogether/issues)说明版本、操作系统和复现步骤，截图应遮盖私人信息。不要上传密钥、聊天导出、记忆备份或私有项目文件。安装包附带第三方许可与 notices，各组件保留其对应条款。

## 许可证

Botogether 自有软件使用[专有发行许可证](LICENSE.md)。允许使用官方未修改版本，供个人或企业内部使用；不授予私有源码分发权。第三方组件保留各自许可与 notices。
