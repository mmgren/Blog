---
title: 如何写和发布一篇笔记
description: 从复制模板、填写 frontmatter，到本地预览和发布到 GitHub Pages。
pubDate: 2026-08-21
tags:
  - 指南
  - 工作流
---

写一篇笔记只需要三步：新建 Markdown、本地看一眼、提交到 GitHub。

## 1. 新建文件

复制 `posts/_template.md`，改成一个有意义的英文文件名，例如 `linux-disk.md`。文件名会变成网址：

```text
posts/linux-disk.md  →  /posts/linux-disk/
```

也可以用子目录分类：

```text
posts/linux/disk.md  →  /posts/linux/disk/
```

## 2. 填写文头

每篇文章开头都需要一段 YAML frontmatter：

```yaml
---
title: 文章标题
description: 一两句话摘要，会出现在列表、社交分享和 RSS 里。
pubDate: 2026-08-21
updatedDate: 2026-08-22
tags:
  - Linux
  - 运维
draft: false
---
```

常用字段：

- `title`：标题。
- `description`：摘要，请写人能看懂的一句话。
- `pubDate`：发布日期。
- `updatedDate`：可选，修订日期。
- `tags`：可选，用于分类。
- `draft`：设为 `true` 时，生产站点不会发布；本地开发时仍能预览。

正文就是普通 Markdown：标题、列表、表格、代码块、引用都可以用。

## 3. 本地预览

在仓库根目录执行：

```bash
npm install
npm run dev
```

浏览器打开提示的地址。因为站点会发布到 GitHub Pages 项目路径，本地预览的根路径是 `/Blog/`。

## 4. 发布

把 Markdown 提交并推送到 GitHub。合并到 `master` 后，GitHub Actions 会构建静态网站。

第一次需要在仓库设置里把 GitHub Pages 的 Source 选成 **GitHub Actions**。之后每次更新 `posts/`，网站和 RSS 都会一起更新。

## 图片和附件

把图片放在 `posts/` 旁边，用相对路径引用，这样 GitHub 预览和网站都能显示：

```markdown
![架构图](./images/architecture.png)
```
