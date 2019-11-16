# 网页 H5 游戏开发

用心开发精品游戏

- 快速开发
- 可适配手机端、iPad 端、PC 端
- 性能流畅度极佳

---

master 分支为模板， 游戏在不同的分支中。

## 项目简介

本项目使用 `Typescript` + `Webpack` 构建，支持自定义 Phaser 库至 `public/phaser.js` 中，能够快速编译用户代码。

## 快速开始

```bash
yarn install # 安装依赖
yarn start # 本地运行
yarn prod # 打包生产
yarn phaser # 重新编译 phaser
```

## 项目结构

```javascript
build // 构建工具
public // 不参与编译的文件
src // 源码
  const // 常量
  scenes // 场景
  utils // 公用方法
  services // 后端服务
types // .d.ts 文件
.babelrc // babel 配置文件
.vscode // 使用工作区的 Typescript 版本
.editorconfig // VSCode 安装 EditorConfig for VS Code 配合使用
.prettierrc // VSCode 安装 Prettier - Code formatter 配合使用
tsconfig.json // 为了让 VSCode 识别 Typescript 语法
```

## 自定义 phaser 库

1. 更改 `phaser.full.js` 文件

   > 根据需要模块进行删减

2. 运行自动生成 `phaser.js` 至 `public` 目录下

   ```bash
   yarn phaser
   ```

## 问题反馈

若您有任何问题或建议，请不吝啬与我联系。

- 微信: 16620882081
