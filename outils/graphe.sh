#!/bin/bash
# Reconstruit le graphe du code avec graphify : docs/graphe/graph.json + docs/graphe/GRAPH_REPORT.md
# Les numéros de ligne (L123) du graphe correspondent aux lignes de index.html.
set -e
cd "$(dirname "$0")/.."
command -v graphify >/dev/null || pip install -q graphifyy
T=$(mktemp -d); mkdir -p "$T/src"
node -e '
const fs = require("fs"), s = fs.readFileSync("index.html", "utf8"), re = /<script>([\s\S]*?)<\/script>/g; let m, i = 0;
while ((m = re.exec(s))) { const pad = s.slice(0, m.index).split("\n").length - 1; fs.writeFileSync(process.argv[1] + "/src/jeu-" + (++i) + ".js", "\n".repeat(pad) + m[1]); }
fs.copyFileSync("sw.js", process.argv[1] + "/src/sw.js");' "$T"
graphify update "$T/src" >/dev/null 2>&1
cp "$T/src/graphify-out/graph.json" "$T/src/graphify-out/GRAPH_REPORT.md" docs/graphe/
rm -rf "$T"
echo "Graphe à jour : docs/graphe/graph.json ($(grep -o '"id"' docs/graphe/graph.json | wc -l) entrées)"
