# Getting started / 开始使用

## A first useful result / 第一个有用的结果

First check that a published release contains a DMG or EXE for your computer. If Releases is empty, downloads are not available yet; the repository ZIP is not an application installer. Install the build listed for your operating system in [Releases](https://github.com/DmiyDing/botogether/releases). Open **Settings → Agents**, check local installations and follow the selected agent’s login guidance. Detection of a version does not prove authentication or every control capability.

先确认发布页已列出适合本机的 DMG 或 EXE。发布页为空时尚未开放下载；仓库 ZIP 不是应用安装包。

在[发布页](https://github.com/DmiyDing/botogether/releases)选择对应系统安装包。打开**设置 → 智能体**检测安装，按所选智能体的引导完成登录。检测到版本，不等于已登录或所有控制能力都已验证。

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
