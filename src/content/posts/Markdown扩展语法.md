---
title: 'Markdown 扩展语法'
description: 'Litos 主题中增强型 Markdown 功能的综合指南'
pubDate: 2025-04-29
author: 'Ating'
recommend: true
heroImage: 'markdown-extension-syntax.webp'
ogImage: 'markdown-extension-syntax.webp'
heroImageAspectRatio: '16/9'
tags: ['Markdown', '指南']
---

本指南基于 [markdown-mdx-extended-features](https://astro-antfustyle-theme.vercel.app/blog/markdown-mdx-extended-features/) 进行了轻微修改。**感谢**原作者 :link[Stephanie Lin]{#@lin-stephanie} 的辛勤付出。

## Callouts (标注)

由 :link[rehype-callouts]{id=lin-stephanie/rehype-callouts class='github'} 提供支持，你可以在 `plugins/index.ts` 中配置该插件。

如果你更改了 `theme` 配置（默认为 `'vitepress'`)，你还需要更新 `src/styles/pro.css` 中导入的 CSS 文件 (`@import 'rehype-callouts/theme/yourconfig'`)。

```md
<!-- Callout 类型名称不区分大小写：'Note'、'NOTE' 和 'note' 是等效的。 -->

<!-- vitepress -->

<!-- 这是一个_不可折叠_的标注 -->
> [!note]
> 注意内容。

> [!tip]
> 提示内容。

> [!important]
> 重要内容。

> [!warning]
> 警告内容。

> [!caution]
> 小心内容。

> [!caution]- 这是一个**可折叠**的标注
> 小心内容。

> [!note]+ 这是一个**可折叠**的标注
> 注意内容。
```

> [!note]
> 注意内容。

> [!tip]
> 提示内容。

> [!important]
> 重要内容。

> [!warning]
> 警告内容。

> [!caution]
> 小心内容。

> [!caution]- 这是一个**可折叠**的标注
> 小心内容。

> [!note]+ 这是一个**可折叠**的标注
> 注意内容。

## 功能齐全的代码块

由 :link[astro-expressive-code]{id=https://github.com/expressive-code/expressive-code/tree/main/packages/astro-expressive-code} 以及 [@expressive-code/plugin-collapsible-sections](https://expressive-code.com/plugins/collapsible-sections/) 和 [@expressive-code/plugin-line-numbers](https://expressive-code.com/plugins/line-numbers/) 插件提供支持，为代码块添加样式和额外功能。

要自定义代码块主题或功能，请在阅读 :link[配置 Expressive Code]{id=https://expressive-code.com/reference/configuration/} 后，修改项目根目录下的 `ec.config.mjs` 文件，例如[更改主题](https://expressive-code.com/guides/themes/#using-bundled-themes)、[启用自动换行](https://expressive-code.com/key-features/word-wrap/#wrap)或[切换行号](https://expressive-code.com/plugins/line-numbers/#showlinenumbers)。

这里快速预览了可能实现的功能。查看[详细指南](https://expressive-code.com/key-features/syntax-highlighting/)了解更多信息。

#### 语法高亮

```js title='example.md'
console.log('此代码已语法高亮！')
```

```ansi title='ansi-example.md'
ANSI colors:
- Regular:  [31mRed [0m  [32mGreen [0m  [33mYellow [0m  [34mBlue [0m  [35mMagenta [0m  [36mCyan [0m
- Bold:     [1;31mRed [0m  [1;32mGreen [0m  [1;33mYellow [0m  [1;34mBlue [0m  [1;35mMagenta [0m  [1;36mCyan [0m
- Dimmed:   [2;31mRed [0m  [2;32mGreen [0m  [2;33mYellow [0m  [2;34mBlue [0m  [2;35mMagenta [0m  [2;36mCyan [0m

256 colors (showing colors 160-177):
 [38;5;160m160  [38;5;161m161  [38;5;162m162  [38;5;163m163  [38;5;164m164  [38;5;165m165 [0m
 [38;5;166m166  [38;5;167m167  [38;5;168m168  [38;5;169m169  [38;5;170m170  [38;5;171m171 [0m
 [38;5;172m172  [38;5;173m173  [38;5;174m174  [38;5;175m175  [38;5;176m176  [38;5;177m177 [0m

Full RGB colors:
 [38;2;34;139;34mForestGreen - RGB(34, 139, 34) [0m

Text formatting:  [1mBold [0m  [2mDimmed [0m  [3mItalic [0m  [4mUnderline [0m
```

##### 代码编辑器框架

```js title="my-test-file.js"
// 使用 `title="my-test-file.js"`
console.log('标题属性示例')
```

```ts
// src/content/index.ts
// 使用 `// src/content/index.ts`
console.log('文件名注释示例')
```

##### 终端框架

```bash
echo "这个终端框架没有标题"
```

```powershell title="PowerShell 终端示例"
Write-Output "这个有标题！"
```

##### 标记整行和行范围

```js {1, 4, 7-8}
// 第 1 行 - 通过行号定位
// 第 2 行
// 第 3 行
// 第 4 行 - 通过行号定位
// 第 5 行
// 第 6 行
// 第 7 行 - 通过范围 "7-8" 定位
// 第 8 行 - 通过范围 "7-8" 定位
```

##### 选择行标记类型 (mark, ins, del)

```js title="line-markers.js" del={2} ins={3-4} {6}
function demo() {
  console.log('此行被标记为已删除')
  // 此行和下一行被标记为已插入
  console.log('这是第二行插入的内容')

  return '此行使用中性的默认标记类型'
}
```

##### 为行标记添加标签

```jsx {"1":5} del={"2":7-8} ins={"3":10-12}
// labeled-line-markers.jsx
<button
  role="button"
  {...props}
  value={value}
  className={buttonClassName}
  disabled={disabled}
  active={active}
>
  {children &&
    !active &&
    (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

##### 在单独的行上添加长标签

```jsx {"1. 在此处提供 value 属性:":5-6} del={"2. 移除 disabled 和 active 状态:":8-10} ins={"3. 添加此项以在按钮内渲染子元素:":12-15}
// labeled-line-markers.jsx
<button
  role="button"
  {...props}

  value={value}
  className={buttonClassName}

  disabled={disabled}
  active={active}
>

  {children &&
    !active &&
    (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

##### 使用类 diff 语法

```diff
+此行将被标记为已插入
-此行将被标记为已删除
这是一行常规文本
```

```diff lang="js"
  function thisIsJavaScript() {
    // 整个块将作为 JavaScript 高亮显示，
    // 我们仍然可以向其添加 diff 标记！
-   console.log('将被移除的旧代码')
+   console.log('全新的代码！')
  }
```

##### 标记行内单个文本

```js "given text"
// 纯文本搜索字符串
function demo() {
  // 标记行内的任何给定文本
  return '支持给定文本的多个匹配项'
}
```

##### 标记行内单个文本

```ts /ye[sp]/
// 正则表达式
console.log('单词 yes 和 yep 将被标记。')
```

```sh /\/ho.*\//
# 正则表达式
echo "Test" > /home/test.txt
```

```ts /ye(s|p)/
// 正则表达式
如果你只想标记正则表达式匹配的某些部分，可以使用捕获组。

例如，表达式 `/ye(s|p)/` 将匹配 yes 和 yep，但只标记字符 s 或 p：
```

```ts /ye(?:s|p)/
// 正则表达式
要阻止捕获组的这种特殊处理，可以将其转换为非捕获组，方法是在左括号后添加 ?:。例如：

此块使用 `/ye(?:s|p)/`，这将导致完整
匹配的单词 "yes" 和 "yep" 被标记。
```

```js "return true;" ins="inserted" del="deleted"
// 选择行内标记类型 (mark, ins, del)
function demo() {
  console.log('这些是插入和删除标记类型');
  // return 语句使用默认标记类型
  return true;
}
```

##### 按块配置自动换行

```js wrap
// 启用自动换行的示例
function getLongString() {
  return '这是一个非常长的字符串，除非容器非常宽，否则很可能无法容纳在可用空间内'
}
```

```js wrap=false
// 禁用自动换行的示例
function getLongString() {
  return '这是一个非常长的字符串，除非容器非常宽，否则很可能无法容纳在可用空间内'
}
```

##### 配置换行缩进

```js wrap preserveIndent
// 启用 preserveIndent 的示例（默认启用）
function getLongString() {
  return '这是一个非常长的字符串，除非容器非常宽，否则很可能无法容纳在可用空间内'
}
```

```js wrap preserveIndent=false
// 禁用 preserveIndent 的示例
function getLongString() {
  return '这是一个非常长的字符串，除非容器非常宽，否则很可能无法容纳在可用空间内'
}
```

##### 可折叠部分

```js collapse={1-5, 12-14, 21-24}
// 所有这些样板设置代码都将被折叠
import { someBoilerplateEngine } from '@example/some-boilerplate'
import { evenMoreBoilerplate } from '@example/even-more-boilerplate'

const engine = someBoilerplateEngine(evenMoreBoilerplate())

// 这部分代码将默认可见
engine.doSomething(1, 2, 3, calcFn)

function calcFn() {
  // 你可以有多个折叠部分
  const a = 1
  const b = 2
  const c = a + b

  // 这将保持可见
  console.log(`计算结果: ${a} + ${b} = ${c}`)
  return c
}

// 从这里到块尾的所有代码将再次被折叠
engine.closeConnection()
engine.freeMemory()
engine.shutdown({ reason: '示例样板代码结束' })
```

##### 按块显示行号

```js showLineNumbers
// 此代码块将显示行号
console.log('来自第 2 行的问候！')
console.log('我在第 3 行')
```

```js showLineNumbers=false
// 此块已禁用行号
console.log('你好？')
console.log('抱歉，你知道我在哪一行吗？')
```

```js showLineNumbers startLineNumber=5
// 更改起始行号
console.log('来自第 5 行的问候！')
console.log('我在第 6 行')
```

## 图片标题和链接

使用 :link[remark-directive-sugar]{#lin-stephanie/remark-directive-sugar .github} 的 [`:::image`](https://github.com/lin-stephanie/remark-directive-sugar?tab=readme-ov-file#image-) 指令将图片包装在容器中，以添加标题、可点击链接等。通过 `plugins/index.ts` 中的 `image` 选项 (`remarkDirectiveSugar`) 进行自定义，并在 `src/styles/pro.css` 的 `/* :::image */` 下设置样式。

### `:::image-figure`

`:::image-figure[caption]{<figcaption> attrs}`：方括号定义 `<figcaption>` 文本（如果省略，则默认为 `![]()` 中的 alt 文本），而花括号用于为生成的 `<figcaption>` 元素添加内联样式或支持的属性。

`![alt](image path)(<img> attrs)`：标准的 Markdown 图片，括号中带有可选属性，由 :link[remark-imgattr]{#OliverSpeir/remark-imgattr .github} 启用，用于自定义生成的 `<img>` 元素。

`:::image-figure[caption]{<figcaption> attrs}`：方括号定义 `<figcaption>` 文本（如果省略，则默认为 `![]()` 中的 alt 文本），而花括号用于为生成的 `<figcaption>` 元素添加内联样式或支持的属性。

`![alt](image path)(<img> attrs)`：标准的 Markdown 图片，括号中带有可选属性，由 :link[remark-imgattr]{#OliverSpeir/remark-imgattr .github} 启用，用于自定义生成的 `<img>` 元素。

```md title=':::image-figure.md'
:::image-figure[这是一个带 _`<figure>` 属性_ 的 **Figcaption**]{style="text-align:center;color:orange"}
![](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::

:::image-figure[这是一个带 _`<img>` 属性_ 的 **figcaption**。]
![](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)(style: width:600px;)
:::

<!-- 💡 使用 `(class:no-zoom)` 禁用缩放 -->
:::image-figure[这是一个带 `class:no-zoom` 的 **figcaption**。]
![](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)(class:no-zoom)
:::

<!-- 💡 如果没有 `[caption]`，则使用 `[alt]` 作为 figcaption。 -->
:::image-figure
![如果未设置 `[caption]`，`![]()` 中的 alt 文本将用作 figcaption。](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::

<!-- 💡 适用于浅色 (img-light) 和深色 (img-dark) 模式的图片 -->
<!-- ⚠️ 两个图片语法 (![]()) 之间必须至少有一行空行，否则将无法正常工作。 -->
:::image-figure[此示例显示了适用于浅色（添加 `class:img-light`）和深色（添加 `class:img-dark`）模式的不同图片。]
![](~/assets/images/markdown-extension-syntax/image-16-9-light.png)(class:img-light)

![](~/assets/images/markdown-extension-syntax/image-16-9-light.png)(class:img-dark)
:::

<!-- ❌ 如果没有可用于 figcaption 的文本，它将无法工作。 -->
:::image-figure
![](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::
```

:::image-figure[这是一个带 _`<figure>` 属性_ 的 **Figcaption**]{style="text-align:center;color:orange"}
![](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::

:::image-figure[这是一个带 _`<img>` 属性_ 的 **figcaption**。]
![](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)(style: width:600px;)
:::

:::image-figure[这是一个带 `class:no-zoom` 的 **figcaption**。]
![](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)(class:no-zoom)
:::

:::image-figure
![如果未设置 `[caption]`，`![]()` 中的 alt 文本将用作 figcaption。](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::

:::image-figure[此示例显示了适用于浅色（添加 `class:img-light`）和深色（添加 `class:img-dark`）模式的不同图片。]
![](~/assets/images/markdown-extension-syntax/image-16-9-dark.png)(class:img-light)

![](~/assets/images/markdown-extension-syntax/image-16-9-light.png)(class:img-dark)
:::

> [!warning]
>
> 直接设置图片的 `width` 属性可能会导致模糊。[了解更多](https://github.com/Dnzzk2/Litos/discussions/17)

### `:::image-a`

自定义指令将图片包装在链接中，使其可点击。

`:::image-a{<a> attrs}`：在花括号中为 `<a>` 元素定义链接 (href)、样式或类。

`![alt](image path)(<img> attrs)`：同上。

```md title=':::image-a.md'
:::image-a{href="https://github.com/Dnzzk2/Litos"}
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::

:::image-a{href="https://github.com/Dnzzk2/Litos" style="display:block" .custom-class}
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)(style: margin-bottom: -1rem; transform:scaleX(1.1) scaleY(1.1);, loading: eager)
:::

::::image-a{href="https://github.com/Dnzzk2/Litos"}
:::image-figure[此示例显示 `:::image-a` 包装 `:::image-figure`（两者可互换）。]
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::
::::

<!-- ❌ 未提供外部链接，将无法工作。-->
:::image-a
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::
```

:::image-a{href="https://github.com/Dnzzk2/Litos"}
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::

:::image-a{href="https://github.com/Dnzzk2/Litos" style="display:block" .custom-class}
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)(style: margin-bottom: -1rem; transform:scaleX(1.1) scaleY(1.1);, loading: eager)
:::

::::image-a{href="https://github.com/Dnzzk2/Litos"}
:::image-figure[此示例显示 `:::image-a` 包装 `:::image-figure`（两者可互换）。]
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)(style:padding-top:1rem;)
:::
::::

### :::image-figure-polaroid

带有边框和阴影的宝丽来风格图片。

为了确保在手机上的样式尺寸，我设置了最小宽度为 300px，你可以在 `src/styles/picture.css` 中修改和扩展样式。

```md title=':::image-figure-polaroid.md'
:::::image-div-polaroid
:::image-figure-polaroid[这是一个带 _`<img>` 属性_ 的 **figcaption**。]
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::
:::::

:::::image-div-polaroid
:::image-figure-polaroid
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)

markdown-extension-syntax.png
:::
:::::

:::::image-div-polaroid
:::image-figure-polaroid
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::
:::::

<!-- 更改样式 -->
:::::image-div-polaroid
:::image-figure-polaroid{style="width:500px;"}
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::
:::::
```

:::::image-div-polaroid
:::image-figure-polaroid[这是一个带 _`<img>` 属性_ 的 **figcaption**。]
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::
:::::

:::::image-div-polaroid
:::image-figure-polaroid
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)

markdown-extension-syntax.png
:::
:::::

:::::image-div-polaroid
:::image-figure-polaroid
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::
:::::

:::::image-div-polaroid
:::image-figure-polaroid{style="width:500px;"}
![OG image](~/assets/images/markdown-extension-syntax/markdown-extension-syntax.png)
:::
:::::

## 视频嵌入

使用 :link[remark-directive-sugar]{id=lin-stephanie/remark-directive-sugar .github} 的 [`::video`](https://github.com/lin-stephanie/remark-directive-sugar?tab=readme-ov-file#video-) 指令，在不同平台上实现一致的视频嵌入。通过 `plugins/index.ts` 中的 `video` 选项进行自定义，并在 `src/styles/pro.css` 的 `/* ::video */` 下设置样式。

假设 `example.md` 包含：

```md title='example.md'
<!-- 嵌入 YouTube 视频 -->
::video-youtube{#gxBkghlglTg}

<!-- 嵌入带有自定义 `title` 属性的 Bilibili 视频 -->
::video-bilibili[custom title]{id=BV1MC4y1c7Kv}

<!-- 嵌入带有 class `no-scale` 以禁用缩放的 Vimeo 视频 -->
::video-vimeo{id=912831806 class='no-scale'}
<!-- ::video-vimeo{id=912831806 .no-scale} -->

<!-- 嵌入自定义视频 URL（必须使用 `id`，而不是 `#`） -->
::video{id=https://www.youtube-nocookie.com/embed/gxBkghlglTg}
```

然后 `example.mdx` 渲染为：

::video-youtube{#gxBkghlglTg}

::video-bilibili[custom title]{id=BV1MC4y1c7Kv}

::video-vimeo{id=912831806 class='no-scale'}

::video{id=https://www.youtube-nocookie.com/embed/gxBkghlglTg}

## 样式化链接（`:link`）

使用 :link[remark-directive-sugar]{id=lin-stephanie/remark-directive-sugar .github} 的 [`:link`](https://github.com/lin-stephanie/remark-directive-sugar?tab=readme-ov-file#link) 指令，为 GitHub、npm 或自定义 URL 添加带有头像或网站图标的链接。通过 `plugins/index.ts` 中的 `link` 选项进行自定义，并在 `src/styles/pro.css` 的 `/* :link */` 下设置样式。

**链接到 GitHub 用户或组织（在 `id` 前加上 `@`）**

**示例 1**：`:link[Dnzzk2]{#@Dnzzk2}` 链接到项目维护者 :link[Dnzzk2]{#@Dnzzk2} 的 GitHub 个人资料。

**示例 2**：`:link[Vite]{id=@vitejs}` 链接到 :link[Vite]{id=@vitejs} 组织的 GitHub 个人资料。

**示例 3**：`:link{#@Dnzzk2 tab=repositories}` 直接链接到 GitHub 用户的仓库选项卡，如 :link{#@Dnzzk2 tab=repositories}。对于 GitHub 用户，有效的 `tab` 选项：`'repositories','projects', 'packages', 'stars', 'sponsoring', 'sponsors'`。

**示例 4**：`:link{#@vitejs tab=org-people}` 直接链接到 GitHub 组织的成员部分，如 :link{#@vitejs tab=org-people}。对于 GitHub 组织，有效的 `tab` 选项：`'org-repositories', 'org-projects', 'org-packages', 'org-sponsoring', and 'org-people'`。

**链接到 GitHub 仓库**

**示例 5**：`:link[Astro]{#withastro/astro}` 或 `:link[Astro]{id=withastro/astro}` 创建一个指向 :link[Astro]{#withastro/astro} 仓库的链接。

**链接到 npm 包**

**示例 6**：`:link{#remark-directive-sugar}` 链接到 :link{#remark-directive-sugar} 的 npm 主页。

**示例 7**：`:link{id=remark-directive-sugar tab=dependencies}` 链接到 npm 上 :link{id=remark-directive-sugar tab=dependencies} 的依赖项部分。对于 npm 包，有效的 `tab` 选项：`'readme', 'code', 'dependencies', 'dependents', and 'versions'`。

**链接到自定义 URL（必须使用 `id`，而不是 `#`）**

**示例 8**：`:link{id=https://developer.mozilla.org/en-US/docs/Web/JavaScript}` 创建一个指向 :link{id=https://developer.mozilla.org/en-US/docs/Web/JavaScript} 的外部链接。

**示例 9**：`:link[Google]{id=https://www.google.com/}` 创建一个指向 :link[Google]{id=https://www.google.com/} 的外部链接。

**自定义**

**示例 10**：`:link[Vite]{id=@vitejs url=https://vite.dev/}` 通过使用 `url` 创建一个指向 `https://vite.dev/` 而不是 `https://github.com/vitejs` 的链接 :link[Vite]{id=@vitejs url=https://vite.dev/}。

**示例 11**：`:link[Vite]{id=@vitejs img=https://vitejs.dev/logo.svg}` 通过使用 `img` 创建一个显示自定义徽标的链接 :link[Vite]{id=@vitejs img=https://vitejs.dev/logo.svg}。

**示例 12**：`:link{id=Dnzzk2/Litos class=github}` 创建一个带有 `class=github`（或 `.github`）的链接 :link{id=Dnzzk2/Litos class=github}，以覆盖 GitHub 仓库的默认样式。

**示例 13**：`:link[Litos Themes]{id=https://github.com/Dnzzk2/Litos img=https://github.githubassets.com/assets/mona-e50f14d05e4b.png}` 完全自定义一个链接。:link[Litos Themes]{id=https://github.com/Dnzzk2/Litos img=
https://litos.vercel.app/favicon.ico}

## 徽章

使用 :link[remark-directive-sugar]{id=lin-stephanie/remark-directive-sugar .github} 的 [`:badge`](https://github.com/lin-stephanie/remark-directive-sugar?tab=readme-ov-file#badge-) 指令来显示小段信息，如状态或类别。

主题提供以下一个预定义徽章。你可以通过 `plugins/index.ts` 中的 `badge` 选项进行自定义，并在 `src/styles/pro.css` 的 `/* :badge */` 下设置样式。

- `badge-n`: :badge-n

此外，你可以直接使用 `:badge[text]{attrs}` 来轻松实现徽章的视觉定制。例如：`:badge[ISSUE]{style="background-color: #bef264"}` 将显示为 :badge[ISSUE]{style="background-color: #bef264"}。如果未指定颜色，默认外观将看起来像 :badge[This]。

## 详情下拉菜单

```md title=':::details.md'
:::details
::summary[详情下拉菜单]
- 列表项 1
- 列表项 2
- 列表项 3
- 列表项 4
:::
```

:::details
::summary[详情下拉菜单]
- 列表项 1
- 列表项 2
- 列表项 3
- 列表项 4
:::

此外，它还支持类似于 [remark-directive 中的示例](https://github.com/remarkjs/remark-directive?tab=readme-ov-file#use) 的用法。

再次**感谢**原作者 :link[Stephanie Lin]{#@lin-stephanie} 的开发，使得本主题拥有如此出色的扩展功能 💗。