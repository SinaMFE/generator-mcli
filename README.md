# Generator-mcli

为了保证多人开发时依赖安装的一致性，本项目依赖于 [yarn](https://yarnpkg.com/zh-Hans/) 作为包管理工具

## 安装

本脚手架依赖于 `yoman`，请确保已全局安装 `yo`

```bash
npm install -g yo
```

测试安装成功 yo

```bash
yo --version
```

安装 generator-mcli

```bash
npm install -g generator-mcli
```

### 更新

```bash
npm update -g @mfelibs/generator-mcli
```

## 生成项目

1. 创建工程文件夹，比如 test-mcli

2. 进入 test-mcli 文件夹，在命令行中输入：

        yo @mfelibs/mcli


3. 根据提示初始化组件结构

PS: 默认脚手架会帮助安装npm包的依赖，如果没有安装则可能是权限导致的需要手动安装。手动安装的方法是：

    yarn

如果存在权限问题请使用 sudo 或者管理员权限的命令行

