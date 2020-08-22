# 超休闲游戏开发模板

用心开发精品游戏

- 快速开发
- 可适配手机端、iPad 端、PC 端
- 性能流畅度极佳

这个库为游戏基础模板, [在线演示](https://liurongqing.github.io/mao-game-webpack/) [游戏集合](https://liurongqing.github.io/mao-games-webpack/)

---

## 项目简介

本项目使用 `Typescript` + `Webpack` + `Phaser3` 构建，支持自定义 Phaser 库至 `public/phaser.js` 中，能够快速编译用户代码。

## 规范

- 目录文件命名为小驼峰法

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

1. 运行自动生成 `phaser.js` 至 `public` 目录下

   ```bash
   yarn phaser
   ```

## 打包生产测试

使用 [http-server](https://github.com/http-party/http-server#readme) 测试

1. 全局安装 `http-server`

   ```bash
   yarn global add -D http-server
   ```

1. 启动服务

   ```bash
   http-server ./dist
   ```

1. 访问

   ```bash
   http://127.0.0.1:8080
   ```

## 更新 npm 包

```bash
yarn upgrade-interactive --lastest # 空格: 选择  i: 反选  a: 全选 会更新 yarn.lock 文件，不会更新package.json文件
yarn upgrade phaser@lastest # 更新到最新，并更新 package.json 文件
```

## Git submodule 使用

1. 添加子模块

    ```bash
    git submodule add https://github.com/xx.git dir_name # dir_name不写，默认为仓库名
    ```

1. 更新子模块

    ```bash
    git submodule update
    git submodule update --remote # 远程项目最新版本
    ```

1. 查看子模块

    ```bash
    git submodule
    ```

1. 克隆包含子模块的项目

    1. 克隆父项目，再更新子模块

        ```bash
        git clone https://github.com/parent_xx.git # 克隆父项目
        git submodule init # 初始化子模块
        git submodule update # 更新子模块
        ```
    1. 递归克隆整个项目(子模块是最新的)

        ```bash
        git clone https://github.com/parent_xx.git --recursive
        ```

1. 删除子模块

    1. 删除子模块文件夹
    
        ```bash
        git rm --cached dir_name
        rm -rf dir_name
        ```
    1. 删除 `.gitmodules` 文件相关子模块信息

        ```bash
        [submodule "dir_name"]
            url = https://**.git
        ```
    1. 删除 `.git/config` 中的相关子模块信息

        ```bash
        [submodule "dir_name"]
            url = https://**.git
        ```
    1. 删除 `.git` 文件夹中的相关子模块文件

        ```bash
        rm -rf .git/modules/dir_name
        ```

1. 忽略 `git status` 对子模块无更改的提示信息

    在 .gitmodules 文件最后添加一行： ignore = dirty


## 错误

1. [.WebGL-0x7fb093019600]RENDER WARNING: there is no texture bound to the unit 5

    > 解答： 使用 scene.start('mainScene') 时， phaser3.24.1 以上版本有这个提示 

1. 开发中不能自动更新

    > 解答：git 忽略了目录文件大小写，导致没监听到



## 问题反馈

若您有任何问题或建议，请不吝与我联系。

- 微信: 16620882081
