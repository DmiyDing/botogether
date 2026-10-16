# Getting started / 开始使用

## A first useful result / 第一个有用的结果

Apple Silicon Mac users can [download v0.1.0-preview.5 DMG](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.5/Botogether-0.1.0-preview.5-mac-arm64.dmg). Open it, drag Botogether into Applications, and read the unsigned-preview installation help if macOS blocks the first launch. Choose Intel Mac preview.5 or Windows x64 preview.2 experimental downloads from the [release page](https://github.com/DmiyDing/botogether/releases); Windows GUI and upgrades remain pending. Repository source archives are not application installers.

Apple Silicon Mac 用户可[下载 v0.1.0-preview.5 DMG](https://github.com/DmiyDing/botogether/releases/download/v0.1.0-preview.5/Botogether-0.1.0-preview.5-mac-arm64.dmg)，打开并拖入 Applications。如果 macOS 拦截首次启动，请查看未签名预览版的安装帮助。Intel Mac preview.5 / Windows x64 preview.2 可从[发布页](https://github.com/DmiyDing/botogether/releases)选择实验性试用包，Windows 界面与升级仍待验证；仓库源码压缩包不能安装应用。

Open **Settings → Agents**, check local installations and follow your agent’s login guidance. Detection of a version does not prove authentication or every control capability.

打开**设置 → 智能体**检测安装，按所选智能体的引导完成登录。检测到版本，不等于已登录或所有控制能力都已验证。

Create a bot from `+`. Choose a local agent; optional instructions describe its long-term role. Open the chat and choose the folder for this conversation. The selected folder determines where tasks execute; selecting a bot alone does not select a project. Start with a read-only request and inspect the answer before requesting changes.

从 `+` 创建助手，选择本地智能体，可选填写长期职责。打开聊天后选择项目目录；任务在这个会话绑定的目录执行，不是只选助手就选好了项目。先试只读请求，确认结果后再要求修改。

## Groups / 群聊

Create a group from `+`, select at least two bots and bind the group’s shared project folder. State responsibilities explicitly: “@Reviewer review the changes; @Builder implement the fixes.” Use the bots’ actual names. Check the task details to verify the assigned responsibilities. More members add coordination and model usage; they do not guarantee faster work. Running work items currently execute serially.

从 `+` 创建群聊，至少选两位助手，并绑定群聊共享目录。明确分工，例如“@评审助手 负责检查，@编码助手 负责修改”，使用实际助手名称。在任务详情核对分配。更多成员会增加协调和模型用量，不保证更快；当前工作项串行执行。

## Files and activity / 文件与过程

Task details retain visible activity and file evidence. Image previews initially fit the dialog; original size and original download are separate actions. File checks cover the declared checks only. A reply or independent review is not proof of all project requirements. Inspect files before accepting them. If a task is blocked or its effects are unknown, do not assume retrying is safe.

任务详情保留可见活动和文件证据。图片默认适应弹窗，可切换原始尺寸或下载原文件。文件检查只验证已声明的检查项；回复和独立评审不代表全部需求已证明。接受文件前先核对。任务阻塞或执行效果未知时，不要假设重试安全。

## Memory / 记忆

**Settings → Memory** lets you add facts and preferences and choose where they may be used. Built-in memory requires no installation. MCP Memory can be enabled; Basic Memory has a managed installer; Mem0 needs a configured local embedding service, model and dimensions. Other listed backends are guides until their adapters are available. Saved Botogether records remain local when changing models or memory engines. Automatic extraction is not provided yet.

**设置 → 记忆**可添加事实与偏好，并选择使用范围。内置记忆无需安装；MCP Memory 可启用；Basic Memory 可受管安装；Mem0 需先配置本机嵌入服务、模型和维度。其他方案在适配器完成前仅提供指南。更换模型或记忆引擎不会删除 Botogether 的本地权威记录；目前不提供记忆自动提取。

## Models, permissions and costs / 模型、权限与费用

Choose model settings in the composer or bot editor. Native model availability and login are controlled by your agent account. Check permission scope before approving. Changing settings affects subsequent tasks; it does not silently modify a running task’s captured configuration. Agent providers may charge for each run, review and retry. Missing usage reports mean unknown usage, not zero cost.

在输入框或编辑助手时选择模型。原生模型可用性和登录由智能体账号决定。批准前核对权限范围。设置变更用于后续任务，不静默改写正在运行任务的配置快照。执行、评审、重试都可能产生服务商费用；缺少用量报告表示未知，不是零费用。

In preview.5, a standalone request such as “Switch to MODEL model” in a bot chat selects a unique match from the actual catalog without starting an agent task. Ambiguous or unavailable names open the selector. The compact label keeps the full native ID in its tooltip. This changes subsequent requests, not an active run.

preview.5中，在助手单聊发送“请切换 MODEL 模型”，应用会从实际目录唯一匹配并保存；没有匹配或名称不唯一时打开选择器。简短标签的提示仍保留完整原生ID，配置用于后续请求，不热切换当前任务。

If no agent is installed, the setup guide offers OpenCode as an experimental starting point. Some models may be free under the provider’s current conditions. Install using the guide, scan again and choose an actual returned model; installation, login and paid-model selection are not automatic. No models: refresh the list, check the installed version and service access, or choose another agent.

没有安装Agent时，可从引导中的实验性OpenCode入口开始；部分模型是否免费取决于服务方当前条件。按指南安装、重新检测，再选择实际返回的模型；不会自动安装、登录或改用收费模型。没有模型时可刷新目录、检查工具版本与服务访问，或选择其他Agent。

Handled permissions and finished execution details are collapsed; pending decisions remain visible. Expand the timeline for individual events. **Retry** immediately creates a new request with the original goal and checks using current bot settings, only after the earlier process is confirmed stopped. It may repeat external effects; inspect the earlier result first.

已处理授权和结束后的执行详情默认折叠，待处理授权保持可见；展开时间线可查看单条事件。**重试**会立即按原目标与检查、当前助手设置新建请求，前提是旧进程已确认停止。外部操作可能重复，点击前先查看旧结果。

## Per-agent model services / 各 Agent 的模型服务

Settings → Models & services groups saved services by Agent. Claude Code and Codex have dedicated adapters. OpenCode supports experimental OpenAI Chat Completions services with an explicit model list; the service and model are injected only into the task process. Other agents continue to use their native account/configuration until a compatible adapter is implemented. A model service is not a system-wide network proxy. Terminal Claude changes require a separate reviewed confirmation; Codex App settings are not changed.

设置 → 模型与代理按 Agent 分组保存和切换服务。Claude Code、Codex 已有专用适配；OpenCode 实验性支持 OpenAI Chat Completions 服务，需要填写模型名称，配置仅注入当前任务进程。其他 Agent 继续使用自己的账号与原生配置，不能把不兼容服务强行应用。模型服务不等于系统网络代理；终端 Claude 的同步需单独确认，Codex App 配置不变。
