---
templateKey: blog-post
title: javascript基本
date: 2019-01-31T01:22:12.662Z
description: javascriptを勉強する上で、わかりにくかったところをメモしていく。
tags:
  - javascript
---
## 関数

関数の記述方法はいくつかある。

### 関数宣言
基本的な方法で、関数に名前をつけて定義する方法。
```
function sampleFunc(arg1, arg2) {
  console.log(arg1 + arg2);
}
```

### 関数式
変数に直接関数の結果を代入する方法。
関数に名前を定義せずに直接変数代入するので無名関数とも言われる。

- #### 基本形
```
let var1 = function(arg1, arg2) {
  return arg1 + arg2;
}
```

- #### アロー関数
```
let var1 = (arg1, arg2) => {
  return arg1 + arg2;
}
```

これら左辺の変数が、単純に関数から返り値を受け取った変数なのか、それとも関数名なのか確信を持てていないが恐らく変数？
