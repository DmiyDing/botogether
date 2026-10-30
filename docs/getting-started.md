# Getting started / 开始使用

## A first useful result / 第一个有用的结果

Get the available installers from the [release page](https://github.com/DmiyDing/botogether/releases) and read the [unsigned-preview installation help](troubleshooting.md). The V2.3 local.26 candidate is validated locally but not yet public; historical downloads may not include the flow below. The old Windows preview.2 has a known blank-window issue; wait for the new preview rather than using it for first setup. Repository source archives are not installers.

从[发行页](https://github.com/DmiyDing/botogether/releases)选择安装包，并先看[未签名预览安装帮助](troubleshooting.md)。V2.3 local.26 候选已通过本地验收但尚未公开，旧版不一定有下述流程。旧 Windows preview.2 存在已知白屏问题，请等待新版预览，不建议用于首次体验。Source code 压缩包不是安装包。

**No Agent installed:** click **Start for free** → wait for OpenCode to download and be checked inside the app → choose an available free trial model → **Start chatting**. No Node.js, npm or terminal is needed. Availability is rechecked and never silently replaced by a paid model.

**没装过 AI 工具：** 点 **免费开始** → 等待应用下载并检查 OpenCode → 选择可用免费体验模型 → **开始聊天**。不需要 Node.js、npm 或终端。免费名额会重新检查，不会自动改用付费模型。

**Already have an Agent:** create an assistant from `+` and select a detected tool. In **Settings → Agents**, OpenCode, Codex and Claude Code have in-app installers on supported systems; other tools have explicit installation guides. Installation does not include account sign-in, paid usage or proof of every tool capability.

**已有 AI 工具：** 从 `+` 创建助手，选择检测到的工具。**设置 → 智能体**可在支持的系统中一键安装 OpenCode、Codex、Claude Code；其他工具明确提供安装说明。安装完成不等于已登录、赠送付费额度或验证了全部工具能力。

Choose the folder for the conversation, try a small task and inspect its output. You can then add a requirement and continue editing. Use the normal permission controls when the Agent needs access.

选好会话文件夹，先试一个小任务并点开结果检查，再补充要求继续修改。需要访问权限时按正常授权入口处理。

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

In the V2.3 candidate, OpenCode setup runs inside the app. Free options are checked against current availability; no paid fallback is selected automatically. Other Agents may require an existing account or subscription.

V2.3 候选可在应用内安装 OpenCode，免费选项会核对当前可用性，不会自动回退付费模型；其他 Agent 可能需要已有账号或订阅。

Handled permissions and finished execution details are collapsed; pending decisions remain visible. Expand the timeline for individual events. **Retry** immediately creates a new request with the original goal and checks using current bot settings, only after the earlier process is confirmed stopped. It may repeat external effects; inspect the earlier result first.

已处理授权和结束后的执行详情默认折叠，待处理授权保持可见；展开时间线可查看单条事件。**重试**会立即按原目标与检查、当前助手设置新建请求，前提是旧进程已确认停止。外部操作可能重复，点击前先查看旧结果。

## Per-agent model services / 各 Agent 的模型服务

Settings → Models & services groups saved services by Agent. Claude Code and Codex have dedicated adapters. OpenCode supports experimental OpenAI Chat Completions services with an explicit model list; the service and model are injected only into the task process. Other agents continue to use their native account/configuration until a compatible adapter is implemented. A model service is not a system-wide network proxy. Terminal Claude changes require a separate reviewed confirmation; Codex App settings are not changed.

设置 → 模型与代理按 Agent 分组保存和切换服务。Claude Code、Codex 已有专用适配；OpenCode 实验性支持 OpenAI Chat Completions 服务，需要填写模型名称，配置仅注入当前任务进程。其他 Agent 继续使用自己的账号与原生配置，不能把不兼容服务强行应用。模型服务不等于系统网络代理；终端 Claude 的同步需单独确认，Codex App 配置不变。
