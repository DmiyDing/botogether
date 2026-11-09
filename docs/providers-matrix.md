# Model service compatibility matrix

This page records which model services can be used with which Botogether Agent, and what
to configure for each combination. It is based on end-to-end runs against a real Botogether
installation, not on documentation alone.

> **How to read this page.** Two different words are used, and they mean different things:
>
> - **Verified in Botogether** — the provider was created inside Botogether, the credential
>   was stored, a task was sent through the Agent, and the produced files were inspected.
> - **API-probed** — a direct request was sent to the provider's endpoint with that model id.
>   This proves the model can be called, but it does **not** prove the Agent can use it.
>
> Rows that were not exercised at all are marked `not tested` and should not be relied on.

## Which Agent supports which protocol

Botogether can inject a custom model service into exactly three Agents. The protocol is not
interchangeable, and the engine picks the injection mechanism:

| Agent | Accepted protocol | Injection mechanism | Custom models | Status |
|---|---|---|---|---|
| Claude Code | `anthropic` | `ANTHROPIC_BASE_URL` + `ANTHROPIC_AUTH_TOKEN` / `ANTHROPIC_API_KEY` | Yes | Verified in Botogether |
| OpenCode 1.x | `openai` | `OPENCODE_CONFIG_CONTENT` with an `@ai-sdk/openai-compatible` provider | Yes | Verified in Botogether (1.19.5) |
| OpenCode 2.x | — | — | **No** | See [#2](https://github.com/DmiyDing/botogether/issues/2) |
| Codex | `openai` | `model_providers.<name>` with `wire_api: "responses"` | Yes, Responses-only | By design; not executed here |
| All other Agents | — | — | No | By design; they keep their native account and configuration |

Two rules follow from the table:

- A service that only speaks Chat Completions cannot be used with Codex, because the Codex
  adapter always sends `wire_api: "responses"`.
- A service that only speaks the Anthropic Messages format cannot be used with OpenCode.

## MiniMax

Two MiniMax regions exist, and a key is valid in exactly one of them:

| Region | OpenAI-compatible base URL | Anthropic-compatible base URL |
|---|---|---|
| Mainland China | `https://api.minimaxi.com/v1` | `https://api.minimaxi.com/anthropic` |
| International | `https://api.minimax.io/v1` | `https://api.minimax.io/anthropic` |

Only the Mainland China endpoints were exercised for this page. The International row is
included for completeness and is **not tested** here.

### Provider configuration that was verified to run

| Field | Claude Code | OpenCode 1.19.5 |
|---|---|---|
| Protocol | `anthropic` | `openai` |
| Endpoint | `https://api.minimaxi.com/anthropic` | `https://api.minimaxi.com/v1` |
| Credential source | `secure` | `secure` |
| Auth mode | `bearer` | `bearer` |
| Models | `MiniMax-M3`, `MiniMax-M2.5` | `MiniMax-M3`, `MiniMax-M2.5` |
| Result | task completed, files produced, usage reported | task completed, files produced, **usage not reported** |

### Models

The table below is **API-probed**: a direct request was sent to each model id, on the
protocols named in the column header. `not tested` means no request was made for that
combination — it is not a claim of failure. A retired model answers with HTTP 404 and the
message `The model "<id>" is no longer available. (2069)`.

| Model | Chat Completions | Anthropic Messages | Responses |
|---|---|---|---|
| `MiniMax-M3.1-Flash` | callable | callable | callable |
| `MiniMax-M3` | callable | callable | callable |
| `MiniMax-M2.7` | callable | callable | not tested |
| `MiniMax-M2.7-highspeed` | callable | callable | not tested |
| `MiniMax-M2.5` | callable | callable | callable |
| `MiniMax-M2.5-highspeed` | callable | callable | not tested |
| `MiniMax-M2.1` | retired (404) | retired (404) | not tested |
| `MiniMax-M2.1-highspeed` | retired (404) | retired (404) | not tested |
| `MiniMax-M2` | retired (404) | retired (404) | not tested |

The retired ids are still returned by `GET /v1/models`, which Botogether surfaces as
available — see [#3](https://github.com/DmiyDing/botogether/issues/3).

### Observed differences between models

Same task, same Agent (Claude Code), Anthropic-compatible endpoint. Both runs completed and
produced a file:

| | `MiniMax-M3` | `MiniMax-M2.5` |
|---|---|---|
| Wall time | 30 s | 15 s |
| Output tokens | 1984 | 828 |
| Reported cost (estimate) | $0.114 | $0.069 |

`MiniMax-M2.5` was roughly 40 % cheaper here and produced a third of the output tokens for
the same deliverable; `MiniMax-M3` tended to add more documentation and edge-case handling.
Both used the shell tool to run and verify their own output. This is a single observation
per model, not a benchmark.

## Claude Code on Windows

Registering the Agent by its npm shim path did not work on Windows for the CLIs tested
(Claude Code 2.1.302, `opencode-ai` 1.19.5, `@tencent-ai/codebuddy-code` 2.63.5): they ship
a native binary behind an exe-forwarding `.cmd` shim, which the discovery step rejected.
Registering the binary itself works:

```
POST /api/installations
{ "engine": "claude",
  "path": "C:\\Users\\<user>\\AppData\\Roaming\\npm\\node_modules\\@anthropic-ai\\claude-code\\bin\\claude.exe" }
```

Details and the reasoning are in [#1](https://github.com/DmiyDing/botogether/issues/1).

## How to check a service yourself

1. Create the service under **Settings → Models & providers** and save the credential.
2. Run the connection check. This validates the endpoint and the credential, and returns the
   provider's model list.
3. Run the agent-level check (**verify agent**). This starts the real Agent, asks it for a
   fixed token, and requires the exact reply. It is the only step that proves the Agent can
   actually use the service — a passing connection check does not.

## Reporting a new combination

If you verify another provider or another Agent, please open an issue with:

- the provider name, region and base URL,
- the protocol and agent you used,
- the exact provider configuration (endpoint, protocol, auth mode, models),
- whether the task completed and whether files were produced,
- whether usage was reported.

That is enough to extend this table without guessing.
