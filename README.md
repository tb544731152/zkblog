开源博客（vue + NodeJs + Mysql+koa） 采用前后端分离
==== 
目录简介 
-------
[体验地址http://zkblog.sxccsd.com/](http://zkblog.sxccsd.com/) 
 
# git clone https://github.com/tb544731152/zkblog.git
## node-manager 后台api
  此包下为博客api
  ### 运行 
  进入node-manager执行如下命令<br>
  ` ``
  npm install
  ` ``
  ` ``
  node app.js
  ` ``
  ### 访问
  http://localhost:3000<br>
  ### 线上启动建议使用forever start app.js
  [forever安装](https://blog.csdn.net/u013891584/article/details/102563658) 
## web 前端
  ### 运行 
  进入web执行如下命令<br>
  ` ``
  npm install
  ` ``
  ` ``
  npm run dev
  ` ``
  访问地址http://localhost:8080
  ` ``
  npm run build (编译上线需要修改访问地址lib/uitls.js,修改成你自己的服务器地址)<br>
  ` ``
## admin 后端

### 运行 
  进入admin执行如下命令（后台涉及图片服务器 用的七牛云，自己根据需要申请七牛云，也可以用阿里云）<br>
  ` ``
  npm install
  ` ``
  ` ``
  npm run dev
  ` ``
  访问地址http://localhost:8083<br><br>
  ` ``
  npm run build (编译上线需要修改访问地址lib/uitls.js,修改成你自己的服务器地址)<br>
  ` ``
