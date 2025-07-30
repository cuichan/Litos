---
title: '文章配置'
description: 'Litos 主题中文章配置的综合指南'
pubDate: 2025-05-01
tags: ['配置','图片','文章']
recommend: true
heroImage: 'MD-Configuration.webp'
ogImage: 'MD-Configuration.webp'
---

本文档为 Litos 主题的文章配置提供了全面的指南，包括 front matter 设置和图片显示选项。

## 创建新文章

要创建新的 Markdown 文件，请按照以下步骤操作：

1.  导航到 `src/content/posts` 目录。
2.  创建一个扩展名为 `.md` 的新 Markdown 文件。

## Front Matter 配置

Markdown 文件中的 front matter 通过 Astro 内容集合进行管理，从而在所有文章中强制执行一致的结构。以下是可用的 front matter 属性的详细规范：

```md
---
title: '你的文章标题'
description: '你的文章的简要描述'
pubDate: 2025-05-01
updatedDate: 2025-05-01
author: 'Dnzzk2'
recommend: false
heroImage: 'image-filename.png'
ogImage: 'og-image-filename.png'
heroImageLayout: 'left'
heroImageAspectRatio: '16/9'
tags: ['标签1', '标签2']
---
```

### 属性规范

| 属性 | 类型 | 必需 | 默认值 | 描述 |
|---|---|---|---|---|
| title | string | 是 | - | 文章的主标题，在文章页面和文章列表中突出显示 |
| description | string | 是 | - | 文章的简明摘要，用于 SEO 优化和社交媒体预览卡片 |
| pubDate | Date | 是 | - | 发布日期，格式为 YYYY-MM-DD |
| updatedDate | Date | 否 | - | 最后修改日期，格式为 YYYY-MM-DD |
| author | string | 否 | - | 内容创作者的姓名；如果未指定，则回退到网站的默认作者 |
| recommend | boolean | 否 | false | 为文章启用特色状态，添加一个特殊的推荐指示器 |
| heroImage | string | 否 | - | 特色图片文件名（存储在 `public/hero-images/` 中）或外部 URL |
| ogImage | string | 否 | - | 社交媒体预览图片（存储在 `public/og-images/` 中）或外部 URL |
| heroImageLayout | string | 否 | - | 文章列表中的图片定位（'left' 或 'right'）；当文章列表类型为 'image' 时优先 |
| heroImageAspectRatio | string | 否 | '16/9' | 图片宽高比，支持 '16/9' 或 '3/4' |
| tags | string[] | 否 | [] | 用于内容分类和导航的关键词数组 |

## 图片显示配置

当文章列表类型设置为 `image` 时，主题提供了灵活的图片处理方式：

- 如果未指定 `heroImage`，系统将使用 `config.ts` 中 `POSTS_CONFIG` 的 `defaultHeroImage`。
- 如果省略 `ogImage`，则应用网站的默认 `ogimage`。

### 显示变体

> [!IMPORTANT] 2025/07/25
> 新增 `Jap` 风格，可在 Front Matter 中配置 `postType` 使用，值得一试。
>
> 本主题不再根据图片有无或比例来决定使用哪种 meta 信息展示风格，而是让您自己定义。您可以在 `config.ts` 中配置 `postType` 来决定默认风格，并在 MD 文档的 front matter 中通过 `postType` 指定此 MD 文件的显示风格。

主题根据 `heroImage` 配置支持三种不同的图片显示样式：

1.  无特色图片：
    :::image-figure[noImage]
    ![](~/assets/images/md-configuration/noImage-dark.webp)(class:img-light)

    ![](~/assets/images/md-configuration/noImage-light.webp)(class:img-dark)
    :::

2.  有特色图片（默认 16/9 比例）：
    :::image-figure[16/9]
    ![](~/assets/images/md-configuration/image-16-9-dark.webp)(class:img-light)

    ![](~/assets/images/md-configuration/image-16-9-light.webp)(class:img-dark)
    :::

3.  有特色图片（3/4 比例）：
    :::image-figure[3/4]
    ![](~/assets/images/md-configuration/image-3-4-dark.webp)(class:img-light)

    ![](~/assets/images/md-configuration/image-3-4-light.webp)(class:img-dark)
    :::

> [!note]
> 宽高比 '3/4' 和 '16/9' 作为垂直或水平方向的指示，而非严格的尺寸要求。但是，使用与这些比例紧密匹配的图片可以防止失真。
>
> 为了在文章列表中保持一致性，无论原始图片尺寸如何，主题都会强制执行固定的 3/4 或 16/9 比例。

## 图片处理工具

Litos 包含内置的图片优化工具，以帮助减少网站加载时间并提高性能。该项目提供了两个用于图片处理的主要脚本：

### 优化图片脚本

`optimize` 脚本是用于批量处理图片的强大工具，提供各种优化选项：

```bash
pnpm run optimize -- [options]
```

#### 可用选项

| 选项 | 别名 | 描述 | 默认值 |
|---|---|---|---|
| --input, | -i | 输入文件或目录路径（必需） | - |
| --quality | -q | 压缩质量 (0-100) | 80 |
| --width | -w | 要调整的最大宽度（0 = 不调整大小） | 0 |
| --format | -f | 输出格式 (jpg, jpeg, png, webp, avif) | 原始格式 |
| --keepOriginal | -k | 保留原始文件 | false |
| --recursive | -r | 处理子目录 | true |
| --outputDir | -o | 自定义输出目录 | 与输入相同 |

#### 示例

1.  使用默认设置进行基本优化：
    ```bash
    pnpm run optimize -- -i public/images
    ```

2.  将图片转换为 WebP 格式，质量为 85%：
    ```bash
    pnpm run optimize -- -i public/images -f webp -q 85
    ```

3.  将图片大小调整为最大宽度 1200px：
    ```bash
    pnpm run optimize -- -i public/images -w 1200
    ```

4.  将优化后的图片保存到不同目录：
    ```bash
    pnpm run optimize -- -i public/images -o public/optimized
    ```

### 替代工具

虽然建议使用内置工具以实现无缝集成，但您也可以使用外部服务进行图片优化：

- [TinyPNG](https://free.tinypng.site/) - 对 PNG 和 JPEG 文件进行出色的压缩
- [Squoosh](https://squoosh.app/) - 基于浏览器的图片优化工具，支持多种格式
- [ImageOptim](https://imageoptim.com/) - 用于无损图片优化的桌面应用程序

> [!tip]
> 为获得最佳效果，请考虑为您的图片使用 WebP 格式，因为它在保持高质量的同时提供了出色的压缩。指定后，内置优化工具会自动处理 WebP 转换。

### 特色图片和 OG 图片

特色图片和 OG 图片在增强内容的视觉吸引力和社交媒体影响力方面起着至关重要的作用。以下是创建有效图片的一些推荐工具和指南：

#### 推荐工具

1.  **OG 图片生成器**：
    - [Free OG Image Generator](https://ogimage.click/) - 简单快速地创建 OG 图片

2.  **OG 预览工具**：
    - [Social Share Preview](https://socialsharepreview.com/) - 在各平台上测试 OG 图片
    - [Metatags.io](https://metatags.io/) - 预览和调试社交媒体卡片

#### 尺寸建议

- **特色图片**：
  - 横向 (16/9): 1200×675px 或 1920×1080px
  - 纵向 (3/4): 800×1067px 或 1200×1600px

- **OG 图片**：
  - 最佳尺寸: 1200×630px (Facebook, Twitter, LinkedIn)
  - 最小尺寸: 600×315px
  - 宽高比: 1.91:1

> [!tip]
> 创建图片时，请考虑：
>
> - 使用一致的品牌元素
> - 保持可读的文本大小
> - 在不影响质量的情况下优化文件大小
> - 测试在不同平台上的外观

## 代码片段

`.vscode/litos.code-snippets` 文件提供了三个代码片段，用于快速生成 Markdown frontmatter。这些片段可帮助您高效地创建不同类型的博客文章模板。

### 基本模板（无图片）

- **触发器**: `postfm` 或 `postnoimg`
- **目的**: 创建一个不带图片的基本博客文章模板
- **占位符**:
  - `${1:Your Post Title}`: 文章标题
  - `${2:A brief description}`: 文章描述
  - `${3-4:YYYY-MM-DD}`: 发布和更新日期（自动填充当前日期）
  - `${5:Author}`: 作者姓名（默认为文件名）
  - `${6|false,true|}`: 特色文章切换
  - `${7-8:tag}`: 文章标签

**示例输出**:
```md
---
title: 'Getting Started with TypeScript'
description: 'A comprehensive guide to TypeScript fundamentals'
pubDate: 2024-01-15
updatedDate: 2024-01-15
author: 'John Doe'
recommend: false
tags: ['TypeScript', 'Programming']
---
```

### 16/9 图片模板

- **触发器**: `postfm16` 或 `post169`
- **目的**: 创建一个支持 16/9 横向图片的模板
- **附加字段**:
  - `heroImage`: 封面图片文件名
  - `ogImage`: 社交媒体预览图片
  - `heroImageAspectRatio`: 固定为 '16/9'

**示例输出**:
```md
---
title: 'Modern Web Design Trends'
description: 'Exploring the latest trends in web design for 2024'
pubDate: 2024-01-15
updatedDate: 2024-01-15
author: 'Jane Smith'
recommend: true
heroImage: 'web-design-trends.png'
ogImage: 'web-design-trends.png'
heroImageAspectRatio: '16/9'
tags: ['Design', 'Web Development']
---
```

### 3/4 图片模板

- **触发器**: `postfm34` 或 `post34`
- **目的**: 创建一个支持 3/4 纵向图片的模板
- **附加字段**:
  - 与 16/9 模板相同，但 `heroImageAspectRatio` 固定为 '3/4'

**示例输出**:
```md
---
title: 'Portrait Photography Tips'
description: 'Essential tips for capturing stunning portrait photos'
pubDate: 2024-01-15
updatedDate: 2024-01-15
author: 'Alex Johnson'
recommend: false
heroImage: 'portrait-tips.png'
ogImage: 'portrait-tips.png'
heroImageAspectRatio: '3/4'
tags: ['Photography', 'Tutorial']
---
```

### 使用说明

1.  在 VS Code 中创建一个新的 `.md` 文件
2.  输入触发器前缀（例如 `postfm`）并按 Tab
3.  使用 Tab 在占位符之间导航并填写内容
4.  完成所有占位符后，光标将定位在文章正文处

> [!tip]
> 选择适当的模板以简化您的写作流程。对于带图片的文章，请选择与您的图片宽高比匹配的模板以获得最佳显示效果。