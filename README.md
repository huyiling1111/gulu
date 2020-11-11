# gulu-ui

[官网链接](https://huyiling1111.github.io/gulu-ui-website/index.html)

## 介绍

gulu UI 是一款基于 Vue 3 和 TypeScript 的 UI 组件库。

这款组件库其实是我为了学习 Vue3 Composition API 而写的，全程亲手编写，尽量不采用第三方库，这个文档也都是我自己写的。

组件的样式、色彩的搭配参考了一些成熟的 UI 框架（如：Ant Design、Element UI）。

目前代码尚未完工，持续更新中。本组件库仅供学习交流，请勿在生产环境中使用。 在打包库的时候遇到一些问题，尚未解决。欢迎讨论交流，如果你觉得还不错，可以给我 Star。

## 安装

该组件库基于 Vue3，所以请在 Vue3 环境下安装使用。

打开终端运行下列命令：

```
npm install gulu-ui
```

或

```
yarn add gulu-ui
```

## 开始使用

请先安装本组件库。

然后在你的代码中写入下面的代码

**_ 注意：使用时，请按如下方式引入组件及组件样式 _**

```js
// 引入组件
import { Button, Switch, Dialog, openDialog } from "gulu-ui";
// 引入样式
import "gulu-ui/dist/lib/gulu-ui.css";
```

就可以使用我提供的组件了。

### Vue 单文件组件

代码示例：

```vue
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
// 引入组件
import { Button, Switch, Dialog, openDialog } from "gulu-ui";
// 引入样式
import "gulu-ui/dist/lib/gulu-ui.css";

export default {
  components: { Button },
};
</script>
```
