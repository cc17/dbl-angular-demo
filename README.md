# 如何使用
 
  git clone 此repo。

## 添加业务逻辑

* 在state目录下按照home.js依葫芦画瓢，创建比如:demo.js
* 在controller目录下按照homeController.js创建一个demoController.js
* 在service目录下创建demoService.js
* 在view下创建demo.html
* ok大功告成。
* 如果需要directive，在directive下创建一个文件即可。都是自动加载的
* 如果需要services，在services下创建一个文件即可。都是自动加载的

## 为何用dbl

再也不用处理复杂的加载关系了，所有的我都已经帮你做好了。安心写你的业务逻辑吧。哈哈。
注意：有个隐藏大招，运行dbl server时会自动创建 8001端口，访问有惊喜。
