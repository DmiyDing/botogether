# Model service compatibility matrix

This page records which model services can be used with which Botogether Agent, and what
to configure for each combination. It is based on end-to-end runs against a real Botogether
installation, not on documentation alone.

> **Scope.** Every row marked *verified* was executed against Botogether `0.1.0-preview.12`
> on Windows 11 x64: the provider was created in Botogether, the credential was stored, a task
> was sent, and the produced files were inspected. Unverified rows are marked as such and
> should not be relied on.

## Which Agent supports which protocol

Botogether can inject a custom model service into exactly three Agents. The protocol is not
interchangeable, and the engine picks the injection mechanism:

| Agent | Accepted protocol | Injection mechanism | Custom models |
|---|---|---|---|
| Claude Code | `anthropic` | `ANTHROPIC_BASE_URL` + `ANTHROPIC_AUTH_TOKEN` / `ANTHROPIC_API_KEY` | Yes |
| OpenCode (1.x) | `openai` | `OPENCODE_CONFIG_CONTENT` with an `@ai-sdk/openai-compatible` provider | Yes |
| OpenCode (2.x) | — | — | **No** — see [#2](https://github.com/DmiyDing/botogether/issues/2) |
| Codex | `openai` | `model_providers.<name>` with `wire_api: "responses"` | Yes, Responses-only |
| All other Agents | — | — | No — they keep their native account and configuration |

Two rules follow from the table:

- A service that only speaks Chat Completions cannot be used with Codex, because the Codex
  adapter always sends `wire_api: "responses"`.
- A service that only speaks the Anthropic Messages format cannot be used with OpenCode.

## Verified: MiniMax

Two MiniMax regions exist, and a key is valid in exactly one of them:

| Region | OpenAI-compatible base URL | Anthropic-compatible base URL |
|---|---|---|
| Mainland China | `https://api.minimaxi.com/v1` | `https://api.minimaxi.com/anthropic` |
| International | `https://api.minimax.io/v1` | `https://api.minimax.io/anthropic` |

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

`GET /v1/models` lists more models than can actually be called. The table below was produced
by sending a real request to every listed id on all three protocols.

| Model | Chat Completions | Anthropic Messages | Responses |
|---|---|---|---|
| `MiniMax-M3.1-Flash` | verified | verified | verified |
| `MiniMax-M3` | verified | verified | verified |
| `MiniMax-M2.7` | verified | verified | — |
| `MiniMax-M2.7-highspeed` | verified | verified | — |
| `MiniMax-M2.5` | verified | verified | verified |
| `MiniMax-M2.5-highspeed` | verified | verified | — |
| `MiniMax-M2.1` | retired (404) | retired (404) | — |
| `MiniMax-M2.1-highspeed` | retired (404) | retired (404) | — |
| `MiniMax-M2` | retired (404) | retired (404) | — |

The set of callable models is the same on all three protocols. Note that the retired ids are
still returned by `/v1/models`, which Botogether surfaces as available — see
[#3](https://github.com/DmiyDing/botogether/issues/3).

### Observed differences between models

Same task, same Agent (Claude Code), Anthropic-compatible endpoint:

| | `MiniMax-M3` | `MiniMax-M2.5` |
|---|---|---|
| Wall time | 30 s | 15 s |
| Output tokens | 1984 | 828 |
| Reported cost (estimate) | $0.114 | $0.069 |

`MiniMax-M2.5` was roughly 40 % cheaper here and produced a third of the output tokens for
the same deliverable; `MiniMax-M3` tended to add more documentation and edge-case handling.
Both used the shell tool to run and verify their own output.

## Verified: Claude Code on Windows

Registering the Agent by its npm shim path does not work on Windows, because modern npm
CLIs ship a native binary behind an exe-forwarding `.cmd` shim. Register the binary itself:

```
POST /api/installations
{ "engine": "claude",
  "path": "C:\\Users\\<user>\\AppData\\Roaming\\npm\\node_modules\\@anthropic-ai\\claude-code\\bin\\claude.exe" }
```

The same applies to any npm-installed Agent whose package ships a native binary. Details and
the reasoning are in [#1](https://github.com/DmiyDing/botogether/issues/1).

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
