---
title: VS Code - settings.json

---

This is my VS Code settings.json as of 12/8/2020:

```json
{
  "workbench.colorTheme": "Night Owl Black",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.formatOnSaveMode": "file",
  "diffEditor.codeLens": true,
  "editor.renderWhitespace": "boundary",
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.wordWrap": "on",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "launch": {

    "configurations": [],
    "compounds": []
  },
  "files.associations": {
    "*.css": "postcss",
    "*.module": "php"
  },
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "window.zoomLevel": 0,
  "editor.formatOnType": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
   "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[postcss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[php]": {
    "editor.defaultFormatter": "junstyle.php-cs-fixer"
  },
  "[twig]": {
    "editor.defaultFormatter": "mblode.twig-language-2"
  },
  "php-cs-fixer.executablePath": "${extensionPath}/php-cs-fixer.phar",
  "php-cs-fixer.lastDownload": 1606748176277,
  "editor.minimap.enabled": false,
  "terminal.integrated.shell.osx": "/bin/bash",
  "twig-language-2.bracePadding": true,
  "twig-language-2.indentStyle": "space",
  "twig-language-2.newLine": false,
  "gitmoji.additionalEmojis": [
    {
      "emoji": "🤠",
      "code": ":face_with_cowboy_hat:",
      "description": "Cowboy stuff",
      "description_zh_cn": "修复 Cowboy stuff"
    },
    {
      "emoji": "👷‍♂️",
      "code": ":construction_worker_man:",
      "description": "Builds",
      "description_zh_cn": "修复 Builds"
    }
  ]
}
```
