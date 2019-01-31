---
templateKey: blog-post
title: javascript基本
date: 2019-01-31T01:22:12.662Z
description: javascriptを勉強する上で、わかりにくかったところをメモしていく。
tags:
  - javascript
---
## <u>関数</u>

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


## <u>Promise Object</u>

非同期（時間のかかる処理を待たず先の処理に進む）関数を実行した時に返されるオブジェクト。
処理待ちで返り値が予約されていることを表している。
返り値が戻ってくると返り値になる。

```.js
//axios.getはhttp requestを送る関数で、responseが返ってくるまでPromise Objectを返す。
let var1 = axios.get(url);
console.log(var1)
// -> Promise
```

上記のように定義時点でPromiseが代入されていしまうため、明示的に時間のかかる処理を待つことで非同期関数の返り値を得ることができる。具体例は以下。

