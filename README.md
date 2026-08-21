# 知识笔记

用 Markdown 写技术文档，在网站、GitHub 和 RSS 阅读器里阅读。

## 快速开始

```bash
npm install
npm run dev
```

本地预览地址带仓库前缀：`http://localhost:4321/Blog/`。

## 怎么写

1. 复制 [`posts/_template.md`](posts/_template.md)。
2. 改成有意义的文件名，例如 `posts/linux-disk.md`。
3. 填写 `title`、`description`、`pubDate`、`tags`。
4. 用普通 Markdown 写正文。
5. 提交到 GitHub。合并进 `master` 后会自动发布。

正文、标签和日期都以 `posts/` 里的 Markdown 为准。GitHub 上打开这些文件就能阅读，不需要先启动网站。

## 可以在哪里读

- **网站**：GitHub Pages，适合手机和电脑浏览器。
- **GitHub**：直接浏览 [`posts/`](posts/) 目录。
- **RSS**：`/Blog/rss.xml`，可订阅到任何 RSS 阅读器。
- **本地**：把仓库当笔记目录，用编辑器或 Obsidian 打开 `posts/`。

## 第一次发布网站

1. 合并本仓库到 `master`。
2. 打开 GitHub 仓库 **Settings → Pages**。
3. Source 选择 **GitHub Actions**。
4. 等待 `Deploy to GitHub Pages` 工作流完成。

站点地址是 `https://mmgren.github.io/Blog/`。

## 常用命令

| 命令 | 作用 |
| --- | --- |
| `npm run dev` | 本地预览 |
| `npm run build` | 生成静态网站到 `dist/` |
| `npm run preview` | 预览构建结果 |
