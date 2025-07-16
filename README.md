# taiyme/renovate-config

[![License](https://img.shields.io/npm/l/%40taiyme%2Frenovate-config?style=flat)](./LICENSE)
[![Donate](https://img.shields.io/badge/donate-%3C3-f96854?style=flat)](https://taiy.me/to/donate)

taiyのためのRenovate共有プリセットです。

## セットアップ

### `renovate.json` の設定

`renovate.json` を、次のように構成します。

※ 既存の `renovate.json` を変更する場合は、 `renovate/reconfigure` ブランチを作成し、プルリクエストを作成します。

```jsonc
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "github>taiyme/renovate-config",
    ":assignAndReview(<your_name_here>)"
  ]
}
```

## ライセンス

[MIT License](./LICENSE)
