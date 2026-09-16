# E+ 项目网站

这是 E+ 的独立静态网站仓库，可直接托管到 GitHub Pages。网站不需要构建步骤，所有页面和资源都位于仓库根目录。

## 在线地址

- 网站：https://hulu53.github.io/E_plus_website/
- 主项目：https://github.com/HULU53/Ets100_Plus/

## GitHub Pages 部署

仓库已包含 `.github/workflows/pages.yml`，推送到 `main` 分支后会自动发布：

1. 打开 GitHub 仓库的 `Settings` → `Pages`。
2. 在 `Build and deployment` 中将 `Source` 设置为 `GitHub Actions`。
3. 推送或合并到 `main` 分支。
4. 在仓库的 `Actions` 页面查看发布进度。

网站也可以使用 GitHub Pages 的 `Deploy from a branch` 模式直接发布根目录，`.nojekyll` 已用于避免静态资源被 Jekyll 处理。

## 本地预览

直接打开 `index.html` 即可。也可以在当前目录启动任意静态文件服务器，例如：

```bash
python -m http.server 8000
```

## 文件结构

- `index.html`：网站首页
- `404.html`：GitHub Pages 自定义 404 页面
- `styles.css`：全站响应式样式
- `script.js`：模式切换、折叠卡片、滚动动画和复制反馈
- `site.webmanifest`：网站应用清单
- `robots.txt`、`sitemap.xml`：搜索引擎基础配置
- `assets/`：应用图标、PWA 图标和社交分享图
- `.nojekyll`：关闭 GitHub Pages 的 Jekyll 处理
- `.github/workflows/pages.yml`：GitHub Pages 自动发布流程

## 内容来源

页面功能与法务文案依据 Android 主项目中的界面和文档整理，主要包括：

- 云端、Shizuku、零宽字符直读、Root 四种读取模式
- 试卷答案读取、解析、查看与复制
- 实验性的 OCR、自动定位、点击和系统 TTS 模块
- 项目内的使用守则、隐私与数据说明、免责声明
