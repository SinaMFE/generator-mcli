
## 脚手架名称：@mfelibs/generator-mcli


## 使用说明
### 前置条件
* 安装yarn
    
    * window

            npm install -g yarn
    * MacOS

            curl -o- -L https://yarnpkg.com/install.sh | bash
    * 测试：输入yarn -v 可以看到版本号则安装成功

* 设置yarn的仓库 指向http://registry.cnpm.sina.com.cn/ (有些机器可能不成功，所以再设置下npm的仓库)

        yarn config set registry "http://registry.cnpm.sina.com.cn/"

        npm config set registry "http://registry.cnpm.sina.com.cn/"
* 安装git

* 安装yo工具,如果安装不成功注意看是否是权限问题，如果是的话 mac下用sudo，window下用管理员命令行

        npm install -g yo

* 测试安装成功yo

        yo --version

* 安装@mfelibs/generator-mcli

        npm install -g @mfelibs/generator-mcli

* 更新@mfelibs/generator-mcli

        npm update -g @mfelibs/generator-mcli

* 创建工程文件夹,比如test-mcli

* 进入test-mcli文件夹，在命令行中输入：

        yo @mfelibs/mcli


* 根据提示初始化组件结构

PS: 默认脚手架会帮助安装npm包的依赖，如果没有安装则可能是权限导致的需要手动安装。手动安装的方法是：

    yarn

如果存在权限问题请使用 sudo 或者管理员权限的命令行

* 同步至远程gitlab仓库

        cd existing_folder

        git init

        git remote add origin gitlab地址

        git add .

        git commit
        
        git push -u origin master


##UPDATE

1.0.7 
增加了.gitlab-ci.yml