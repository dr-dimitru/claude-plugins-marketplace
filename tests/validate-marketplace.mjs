import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(
  fs.readFileSync(path.join(root, ".claude-plugin", "marketplace.json"), "utf8")
);
const plugin = manifest.plugins.find(entry => entry.name === "claude-jev");

assert.ok(plugin, "claude-jev marketplace entry is required");
assert.equal(plugin.source.source, "github");
assert.equal(plugin.source.repo, "dr-dimitru/claude-jev-plugin");
// Installs come from a release tag, not from whatever is on main.
assert.match(plugin.source.ref, /^v\d+\.\d+\.\d+$/);
assert.equal(Object.keys(plugin.source).sort().join(","), "ref,repo,source");
assert.equal("version" in plugin, false);
assert.equal(fs.existsSync(path.join(root, ".gitmodules")), false);
const entry = execFileSync("git", ["ls-files", "-s", "plugins/claude-jev"], {
  cwd: root,
  encoding: "utf8",
});
assert.equal(entry.trim(), "");
assert.equal(typeof manifest.description, "string");
assert.ok(manifest.description.length > 0);
