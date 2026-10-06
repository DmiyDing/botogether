# Local data / 本地数据

Botogether stores conversations, configuration, scoped memories and file snapshots locally. macOS desktop data lives under `~/Library/Application Support/Botogether`; Windows uses the current user’s application-data location for Botogether. Do not share these directories or memory exports without reviewing their contents.

Botogether 在本地保存聊天、配置、有范围的记忆和文件快照。Mac 桌面数据位于 `~/Library/Application Support/Botogether`，Windows 使用当前用户的 Botogether 应用数据位置。分享这些目录或记忆导出前应先检查内容。

Local storage does not mean model processing is offline. Your selected agent/provider may send authorized prompts, project data and scoped memory to its model service. Follow that provider’s privacy terms. Switching models retains saved local Botogether memories but may change which service processes future tasks. An external memory engine uses the records permitted for the current task; do not enable an unfamiliar service without understanding its data flow.

本地保存不等于模型离线运行。所选智能体或服务商可能将获准的提示词、项目数据和范围内记忆发送到其模型服务，请了解对应隐私条款。更换模型保留本地 Botogether 记忆，但会改变后续任务的数据处理服务。外部记忆引擎只使用当前任务允许的记录；启用陌生服务前先了解数据流向。

Official update checks query the public release repository without model credentials, chat content or memory content. Model credentials must not be placed in prompts, filenames, bot instructions or public issues. Third-party tools may have their own authentication and telemetry behavior.

官方更新检查访问公开分发仓库，不附带模型凭据、聊天或记忆正文。不要把模型凭据放在人设、提示词、文件名或公开反馈中。第三方工具有自己的认证和遥测行为。
