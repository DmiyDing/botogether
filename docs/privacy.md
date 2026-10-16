# Local data / 本地数据

Botogether stores conversations, configuration, scoped memories and file snapshots locally. macOS desktop data lives under `~/Library/Application Support/Botogether`; Windows uses the current user’s application-data location for Botogether. Do not share these directories or memory exports without reviewing their contents.

Botogether 在本地保存聊天、配置、有范围的记忆和文件快照。Mac 桌面数据位于 `~/Library/Application Support/Botogether`，Windows 使用当前用户的 Botogether 应用数据位置。分享这些目录或记忆导出前应先检查内容。

Local storage does not mean model processing is offline. Your selected agent/provider may send authorized prompts, project data and scoped memory to its model service. Follow that provider’s privacy terms. Switching models retains saved local Botogether memories but may change which service processes future tasks. An external memory engine uses the records permitted for the current task; do not enable an unfamiliar service without understanding its data flow.

本地保存不等于模型离线运行。所选智能体或服务商可能将获准的提示词、项目数据和范围内记忆发送到其模型服务，请了解对应隐私条款。更换模型保留本地 Botogether 记忆，但会改变后续任务的数据处理服务。外部记忆引擎只使用当前任务允许的记录；启用陌生服务前先了解数据流向。

Official update checks query the public release repository without model credentials, chat content or memory content. Model credentials must not be placed in prompts, filenames, bot instructions or public issues. Third-party tools may have their own authentication and telemetry behavior.

官方更新检查访问公开分发仓库，不附带模型凭据、聊天或记忆正文。不要把模型凭据放在人设、提示词、文件名或公开反馈中。第三方工具有自己的认证和遥测行为。


## Credentials / 模型服务凭据

Native Agent sign-in is managed by that Agent. Custom-service system encryption stores API-key ciphertext locally; on macOS, Keychain protects the encryption key and may request permission. Botogether does not automatically copy saved keys into another storage mode or into native Agent configuration.

原生登录由对应 Agent 管理。自定义服务的系统加密方式将 API Key 密文保存在本机；Mac 钥匙串保护加密密钥，可能要求授权。Botogether 不自动将已有密钥迁移到其他存储方式或写入 Agent 原生配置。

Mac preview.4 also offers session-only keys: kept in app memory, cleared on quit, with no Botogether Keychain access for that mode. Re-enter after restarting. Persistent terminal sync is unavailable for these keys. Other tools may still use their own credential storage.

Mac preview.4 另提供“仅本次打开有效”：密钥保存在应用内存、退出后清除，该方式不访问 Botogether 的钥匙串。重启后重新填写，不支持持久终端同步。其他工具仍可能使用它们自己的凭据存储。


## API Key input and local verification / 密钥输入与本地验证

Both normal credential-storage choices accept an API key directly: keep it for this app session or store ciphertext on this device. Botogether passes the selected key to the task's Agent without writing shell profiles or global Agent configuration. An existing environment-variable reference is a separate advanced option; its field contains a variable name, not the secret value.

普通密钥保存方式都直接填写 API Key：仅本次使用，或在这台设备加密保存。应用在任务启动时把选定密钥传给 Agent，不生成 shell 配置、不改 Agent 全局配置。引用已有环境变量是独立的高级选项，填写变量名而非密钥值。

The Mac desktop's static HTML layout checks use an isolated renderer from the app's own Electron runtime, with page scripts, network access and permission requests disabled. They do not start an installed Chrome by default. User-selected Agents and their browser tools remain separate native programs with their own permissions; identifiable installed-app requests require individual confirmation and do not inherit task-wide grants. This is not a promise that every native tool is intercepted or that macOS will never show a permission notice.

Mac 桌面的静态 HTML 布局检查使用应用自身 Electron 的隔离渲染进程，禁用页面脚本、网络和权限请求，不再默认启动安装目录中的 Chrome。用户选择的 Agent 及其浏览器工具仍是独立原生程序，有各自权限；可识别的已安装应用目录请求需单次确认，不继承任务级授权。这不表示能拦截所有原生工具，也不承诺 macOS 永远不显示权限提示。
