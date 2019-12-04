# 超休闲游戏开发模板

用心开发精品游戏

- 快速开发
- 可适配手机端、iPad 端、PC 端
- 性能流畅度极佳

这个库为游戏基础模板

---

## DEMO 列表

1. [基于原生 JavaScript 的类似青蛙过河游戏](https://github.com/liurongqing/javascript-frogger-demo)
1. [基于 Phaser3 的类似青蛙过河游戏](https://github.com/liurongqing/phaser3-frogger-demo)

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
build // 构建工具， webpack 配置文件
public // 不参与编译的文件，可以放些静态文件
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

## 打包生产测试

使用 [http-server](https://github.com/http-party/http-server#readme) 测试

1. 全局安装 `http-server`

   ```bash
   yarn global add -D http-server
   ```

2. 启动服务

   ```bash
   http-server ./dist
   ```

3. 访问

   ```bash
   http://127.0.0.1:8080
   ```

## 问题反馈

若您有任何问题或建议，请不吝与我联系。

- 微信: 16620882081
