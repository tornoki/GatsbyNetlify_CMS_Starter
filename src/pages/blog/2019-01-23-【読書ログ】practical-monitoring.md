---
templateKey: blog-post
title: 【読書ログ】Practical Monitoring
date: 2019-01-23T07:19:58.086Z
description: 邦題「入門　監視」
tags:
  - reading_record
---
## Part 1. Monitoring Principles

### Monitoring Anti-Patterns

- Tool Obsession: ツール有りきで体制・行動を取らないようにする。
目的ベースで監視が重要。監視は複数の要因からなり、一括りに出来ないものである。そのため、監視ツールは最適なものを過不足なく選定・使用することが重要。不足なく情報を収集するためであればツールを増やすことを恐れてはいけない。ただ重複して情報を集めるツールは不要。ツールは文化/体制を形作る。いいものがなければ目的ベースで作るのもあり。
- Monitoring-as-a-Job: monitoringはjobでなくskillである。
monitoring toolのスペシャリストはいてもいいが、monitoringは全メンバーがある程度理解する必要がある。
- Checkbox Monitoring: 形だけの監視はやめる。
サービスに影響があるか、障害原因解明につかえる、無視することのない、高頻度の情報監視を意識して行うこと。
- Using Monitoring as a Crutch: 監視は問題を解決しない。
監視によって問題を確認できるので、その後その問題を解消することが重要だ。
- Manual Configuration: 手組で監視設定を行わない。
なるべく自動的に設定できるようにする。


### Monitoring Design Patterns

