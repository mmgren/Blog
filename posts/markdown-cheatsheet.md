---
title: Markdown 技术文档速查
description: 写技术笔记时最常用的 Markdown 语法：标题、代码、表格、列表和引用。
pubDate: 2026-08-21
tags:
  - Markdown
  - 速查
---

这篇用来当写作时的速查表。网站和 GitHub 都按 GitHub Flavored Markdown 渲染。

## 标题

用标题拆章节。文章页会把二级和三级标题收进目录。

```markdown
## 安装
### Ubuntu
```

## 强调和行内代码

- *斜体* 或 **加粗**
- 命令和文件名用行内代码：`npm run build`

## 列表

无序列表：

- 先复现问题
- 再记录原因
- 最后写下解决步骤

有序列表适合操作步骤：

1. 打开终端
2. 进入项目目录
3. 运行测试

## 代码块

写明语言，网站会做语法高亮：

```ts
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\/+/, '')}`;
}
```

```bash
git add posts/my-note.md
git commit -m "docs: add my note"
git push
```

## 表格

```markdown
| 命令 | 作用 |
| --- | --- |
| `npm run dev` | 本地预览 |
| `npm run build` | 生成静态网站 |
```

| 命令 | 作用 |
| --- | --- |
| `npm run dev` | 本地预览 |
| `npm run build` | 生成静态网站 |

## 引用和提示

> 把结论放在前面，细节放在后面。以后检索时会更快。

## 链接

站内文章请用相对路径指向 `.md` 文件。这样在 GitHub 上可以直接点开，网站构建时也会自动改成页面地址：

```markdown
[如何写和发布一篇笔记](./how-to-write.md)
```

外部文档用完整网址：

```markdown
[Astro](https://docs.astro.build/)
```

## 建议的笔记结构

1. **问题或结论**：开头用几句话说明这篇要解决什么。
2. **背景**：必要的环境和前提。
3. **步骤或原理**：可复制的命令、关键代码、容易踩的坑。
4. **参考**：链接到官方文档或其他笔记。
