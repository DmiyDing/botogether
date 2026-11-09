# 模型服务兼容矩阵

本页记录哪些模型服务可以配合哪些 Botogether 智能体使用，以及每种组合该填什么配置。
所有结论都来自对真实 Botogether 安装的端到端实测，而非仅依据文档。

> **如何阅读本页。** 文中使用两个含义不同的词，请注意区分：
>
> - **已在 Botogether 中验证**——在 Botogether 内创建了该模型服务、保存了凭据、通过智能体
>   真实发送了任务，并检查了产出的文件。
> - **仅 API 探测**——直接向服务商端点发送了该模型 id 的请求。这只证明该模型**可以被调用**，
>   并**不能**证明智能体能正常使用它。
>
> 完全未做过的组合一律标记为 `未测试`，不应依赖。

英文版见 [providers-matrix.en.md](./providers-matrix.en.md)。

## 各智能体支持的协议

Botogether 只能向三个智能体注入自定义模型服务。协议不可互换，且各引擎的注入方式不同：

| 智能体 | 可用协议 | 注入机制 | 支持自定义模型 | 状态 |
|---|---|---|---|---|
| Claude Code | `anthropic` | `ANTHROPIC_BASE_URL` + `ANTHROPIC_AUTH_TOKEN` / `ANTHROPIC_API_KEY` | 支持 | 已在 Botogether 中验证 |
| OpenCode 1.x | `openai` | `OPENCODE_CONFIG_CONTENT`，使用 `@ai-sdk/openai-compatible` provider | 支持 | 已在 Botogether 中验证（1.19.5） |
| OpenCode 2.x | — | — | **不支持** | 见 [#2](https://github.com/DmiyDing/botogether/issues/2) |
| Codex | `openai` | `model_providers.<name>`，且 `wire_api: "responses"` | 支持，仅限 Responses 协议 | 按实现设计，本文未实测 |
| 其余所有智能体 | — | — | 不支持 | 按实现设计，沿用各自的原生账号与配置 |

由上表可推出两条规则：

- 只支持 Chat Completions 的服务无法配合 Codex 使用，因为 Codex 适配器固定发送
  `wire_api: "responses"`。
- 只支持 Anthropic Messages 格式的服务无法配合 OpenCode 使用。

## MiniMax

MiniMax 分国内站与国际站两套，密钥只在其中一套有效：

| 区域 | OpenAI 兼容 base URL | Anthropic 兼容 base URL |
|---|---|---|
| 国内站 | `https://api.minimaxi.com/v1` | `https://api.minimaxi.com/anthropic` |
| 国际站 | `https://api.minimax.io/v1` | `https://api.minimax.io/anthropic` |

本页仅实测了国内站端点。国际站一行仅供对照，**未测试**。

### 已验证可跑通的配置

| 配置项 | Claude Code | OpenCode 1.19.5 |
|---|---|---|
| 协议 | `anthropic` | `openai` |
| 端点 | `https://api.minimaxi.com/anthropic` | `https://api.minimaxi.com/v1` |
| 凭据来源 | `secure` | `secure` |
| 认证方式 | `bearer` | `bearer` |
| 模型 | `MiniMax-M3`、`MiniMax-M2.5` | `MiniMax-M3`、`MiniMax-M2.5` |
| 结果 | 任务完成、产出文件、有用量上报 | 任务完成、产出文件、**无用量上报** |

### 模型可用性

下表为**仅 API 探测**结果：按列标题对应的协议，对每个模型 id 直接发了一次真实请求。
`未测试` 表示该组合未发过请求，**不代表调用失败**。已下线的模型会返回 HTTP 404，错误信息为
`The model "<id>" is no longer available. (2069)`。

| 模型 | Chat Completions | Anthropic Messages | Responses |
|---|---|---|---|
| `MiniMax-M3.1-Flash` | 可调用 | 可调用 | 可调用 |
| `MiniMax-M3` | 可调用 | 可调用 | 可调用 |
| `MiniMax-M2.7` | 可调用 | 可调用 | 未测试 |
| `MiniMax-M2.7-highspeed` | 可调用 | 可调用 | 未测试 |
| `MiniMax-M2.5` | 可调用 | 可调用 | 可调用 |
| `MiniMax-M2.5-highspeed` | 可调用 | 可调用 | 未测试 |
| `MiniMax-M2.1` | 已下线 (404) | 已下线 (404) | 未测试 |
| `MiniMax-M2.1-highspeed` | 已下线 (404) | 已下线 (404) | 未测试 |
| `MiniMax-M2` | 已下线 (404) | 已下线 (404) | 未测试 |

`GET /v1/models` 仍会返回这些已下线的 id，而 Botogether 会把它们当作可用模型呈现给用户
—— 见 [#3](https://github.com/DmiyDing/botogether/issues/3)。

### 两个模型的实测差异

同一任务、同一智能体（Claude Code）、Anthropic 兼容端点，两次均完成并产出文件：

| | `MiniMax-M3` | `MiniMax-M2.5` |
|---|---|---|
| 耗时 | 30 s | 15 s |
| 输出 token | 1984 | 828 |
| 上报成本（估算） | $0.114 | $0.069 |

在此单次观测中，`MiniMax-M2.5` 成本约低 40%，产出 token 约为三分之一；`MiniMax-M3` 倾向
补充更多注释与边界处理。两者都会主动用 shell 工具运行并验证自己的产出。以上是每个模型
的一次观测，**不是基准测试**。

## Windows 上的 Claude Code

在实测过的三个 CLI（Claude Code 2.1.302、`opencode-ai` 1.19.5、
`@tencent-ai/codebuddy-code` 2.63.5）中，用 npm shim 路径注册智能体在 Windows 上均未生效：
它们以原生二进制分发，shim 是「转发到 exe」形式，被发现流程拒绝。改为注册二进制本体即可：

```
POST /api/installations
{ "engine": "claude",
  "path": "C:\\Users\\<user>\\AppData\\Roaming\\npm\\node_modules\\@anthropic-ai\\claude-code\\bin\\claude.exe" }
```

细节与原因分析见 [#1](https://github.com/DmiyDing/botogether/issues/1)。

## 如何自查一个服务

1. 在 **设置 → 模型与代理** 中创建服务并保存凭据。
2. 执行连通性检查。它会校验端点与凭据，并返回服务商的模型清单。
3. 执行智能体级检查（**verify agent**）。它会真正拉起智能体、要求它返回一个固定口令并
   校验完全一致。**只有这一步能证明智能体确实能用该服务**——连通性检查通过并不代表可用。

## 补充新组合

如果你验证了其他服务商或其他智能体，欢迎提 issue，并附上：

- 服务商名称、区域与 base URL；
- 使用的协议与智能体；
- 完整的模型服务配置（端点、协议、认证方式、模型列表）；
- 任务是否完成、是否产出文件；
- 是否有用量上报。

这些信息足以在不做推测的前提下扩充本表。
