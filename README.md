# 引力彼端 / Beyond Gravity

> 从行星束缚，到存在超越。
> From planetary bound, to existence transcended.

这是一个面向科幻爱好者的双语静态网站，以图文并茂的方式展示一套 10 级科技文明分级体系。

This is a bilingual static website for sci-fi enthusiasts, showcasing a 10-tier technological civilization classification system through immersive visuals and storytelling.

## 在线访问 / Live Site

https://caoyachao.github.io/civilization/

## 项目亮点 / Highlights

- **双语切换 / Bilingual**: 完整支持中文与英文内容切换
- **全息星图卡片 / Holographic Cards**: 10 级文明各具特色的差异化卡片设计
- **跃迁入镜动画 / Warp Reveal**: 基于 Framer Motion 的滚动触发动画，营造星际航行感
- **星空背景 / Starfield**: 轻量 Canvas 粒子背景，桌面端支持鼠标视差
- **纯代码视觉 / Code-Only Visuals**: 不依赖外部图床，全部通过 CSS 渐变与 Canvas 绘制

## 页面结构 / Pages

1. **首页 / Home** — 10 级文明主展（Hero + 文明卡片）
2. **战争 / Warfare** — 战争形态的终极演变
3. **毁灭 / Destruction** — 行星与恒星毁灭能力谱系
4. **个体 / Individual** — 个体在战争中的 U 型演变曲线

## 技术栈 / Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router + Static Export)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

## 本地开发 / Local Development

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

浏览器访问 http://localhost:3000/civilization

Open http://localhost:3000/civilization in your browser.

## 构建与部署 / Build & Deploy

```bash
# 静态导出到 dist 目录
npm run build
```

项目通过 GitHub Actions 自动构建并部署到 GitHub Pages。推送至 `main` 分支即可触发部署。

The project is automatically built and deployed to GitHub Pages via GitHub Actions. Pushing to the `main` branch triggers the deployment.

## 数据来源 / Data Source

所有文明分级、战争形态、毁灭能力与个体演变的原始设定均整理自 `req.md`。

All civilization tiers, warfare modes, destruction capabilities, and individual evolution narratives are derived from `req.md`.

---

Powered by curiosity and caffeine.
