# dr-dimitru Claude Tools

Claude Code plugin marketplace maintained by dr.dimitru.

## Repository availability

Remote installation requires both GitHub repositories to exist and be readable by the installing user's Git credentials:

- `dr-dimitru/claude-plugins-marketplace`
- `dr-dimitru/claude-jev-plugin`

Until those repositories are published or made accessible, use local checkout paths for validation only.

## Add marketplace

```text
/plugin marketplace add dr-dimitru/claude-plugins-marketplace
```

## Install and enable claude-jev

```text
/plugin install claude-jev@dr-dimitru-claude-tools --scope user
/plugin enable claude-jev@dr-dimitru-claude-tools
```

The plugin installs disabled by default because it sends bounded judgment data to TypeSafe and may incur API cost. Set `TYPESAFE_API_KEY` before enabling it.

## Update

```text
/plugin update claude-jev@dr-dimitru-claude-tools
```

## Disable or uninstall

```text
/plugin disable claude-jev@dr-dimitru-claude-tools
/plugin uninstall claude-jev@dr-dimitru-claude-tools
```

## Validate marketplace

```bash
npm test
npm run validate:marketplace
```
