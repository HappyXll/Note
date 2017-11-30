
  
    ##Express+sqlite3+webpack做一个note##
**功能是：**
  ```  
    增加 note
    删除 note
    修改 note
    显示所有note
    第三方登陆（github）使用的是passport+passport-github
    前后台同步，利用sqlite作为后台数据库使用。
```
**技术点：**
``` 
  >1 view层用到的是less
  
    2 功能模块化：瀑布流布局模块，note的创建删除等功能的模块，消息体的模块
	
    3 发布与订阅模式：来将功能松散耦合，从而为功能的复用提供了帮助
	
    4 后台数据：使用Sequelize操作sqlite3
	
    5 第三方登陆：使用passport.js 完成第三方登陆的验证
	
    6 当再次刷新的时候，无需重新登陆。是利用passport的serializeUser将用户登陆后的信息保存在session中，
	  同时作为浏览器的cookie来进行保存。
	  当用户刷新的时候，利用passport的deserializeUser则根据浏览器中的cookie来从 session 中读取用户的全部数据的对象，
	  并将其封装到 req.user中
   
   7 webpack和package.json中的npm进行前端工程化的操作
``` 

**展示：**
**没有登陆前，展示所有人的便签。无法修改，删除，增加便签**
   ![image.png](http://upload-images.jianshu.io/upload_images/5224715-9aa753b14db307db.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**登陆后可以操作自己的便签内容**
![image.png](http://upload-images.jianshu.io/upload_images/5224715-a21f0cb2eb0059f0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**使用环境**
  windows
  下载后代码后：
               npm i下载相应的模块包
               npm start 运行本地服务器,在浏览器中输入：localhost即可运行显示程序
 # 注意点
    #localshow 分支是本地运行测试代码

