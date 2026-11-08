# 邓健怡 / AI 运营作品集 V2

静态个人网页，无需安装依赖。首页使用提供的参考图，核心能力卡使用实际作品画面。视频页收录桌面“视频加作品集”文件夹中的 15 段视频，按广告视觉、剧情叙事、动漫概念、视觉实验分类。

## 预览

直接打开 `index.html`，或在本目录执行 `python3 -m http.server 8000`，然后访问 `http://localhost:8000`。

## 离线展示

在 GitHub 仓库页面选择 **Code → Download ZIP**，解压后直接打开 `index.html`。也可以使用 `git clone` 下载仓库。图片、简历和页面实际使用的 15 段视频都随仓库保存，展示时不需要联网；未被页面引用的视频原片只保留在本机原目录，不包含在仓库中。

## 修改内容

个人资料、核心能力、技能和项目都在 `data.js`。页面中的姓名、联系方式和项目描述来自旧版简历资料；项目数字请在正式投递前再次核对。高清头像 `assets/profile.jpg` 和简历位于 `assets/`。视频文件位于 `assets/videos/portfolio/`，封面位于 `assets/posters/portfolio/`。

首页封面支持左右按钮、圆点、触屏滑动和自动轮播；鼠标悬停或键盘聚焦时会暂停。往下滚动时内容区逐步出现。作品环上的卡片可点击进入项目或具体视频；在空白处拖动或点左右按钮切换作品。视频页支持分类筛选、播放与全屏观看。

## 获取个人网址

1. 登录 GitHub，新建公开仓库，推荐命名为 `你的GitHub用户名.github.io`。
2. 将本目录的文件上传到仓库根目录并提交到 `main` 分支。
3. 在仓库的 `Settings → Pages` 中选择 `Deploy from a branch`，分支选 `main`，目录选 `/ (root)`。
4. 发布后网址是 `https://你的GitHub用户名.github.io/`。如果仓库使用其他名字，例如 `portfolio`，网址会是 `https://你的GitHub用户名.github.io/portfolio/`。

目前没有 GitHub 用户名，页面因此没有放虚构的网址。确认用户名后可以在 `data.js` 更新 `github` 和 `website` 字段，再把网址加入页面。
