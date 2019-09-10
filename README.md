## MusicBee Fly ##

MusicBee Fly 是一款MusicBee插件,使用此插件可以让你远程使用手机控制MusicBee. MusicBee 是一款功能强大的音乐播放软件,在开始使用MusicBee Fly之前请先确保你已下载安装MusicBee, MusicBee可从[http://323](MusicBee官网)下载. 

MusicBee Fly的插件部分采用C#编写, 使用Websocket作为数据交换接口, 前端部分采用ionic4 + AngularJs + cordova编写, 同时支持Browser/WebApp/App.

- [安装方法](#安装方法)
- [使用方法](#使用方法)
- [屏幕截图](#屏幕截图)
- [鸣谢](#鸣谢)

## 安装方法 ##

### 插件安装 ###

从[http://323](release) 页面下载最新版本的MusicBeeFly plugin 压缩文件,把解压之后得到的mb_fly.dll文件和mb_fly.www目录拷贝到MusicBee plugin目录下面. 拷贝之前请关闭MusicBee程序，拷贝完成后重新打开MusicBee程序，插件会自动生效。

### 安装手机App ###

手机App的安装方法有两种: WebApp(PWA)和 Native App, 推荐安装Native App, 获得更好的用户体验.

#### Iphone App ####

虽然MusicBee Fly前端部分很容易可以编译为ios app(ipa),但是由于我没有Apple开发者帐号,所以无法把App发布到Apple App Store,所以暂时无法提供ios app.

#### Iphone WebApp ####

ios从11.3开始支持PWA(Progress Web Application), 所以你可以使用PWA的方式让MusicBee Fly变成一个WebApp, 看起来和一个Native app非常相似,虽然用户体验无法和Native App相比。

#### Android App ####

从[http://323](release) 可以下载安装apk安装包，直接下载安装到你的安桌手机就行了。

#### Android WebApp ####

如果你不想安装Android apk，同样也可以把MusicBee Fly安装为WebApp。具体安装方法如下：


## 使用方法 ##

### 插件设置 ###

插件的设置窗口可通过MusicBee 的"首选项" -> "插件" -> "MusicBee Fly 设置" 打开，在插件设置窗口可设置监听端口和连接密码。监听端口默认为9999，设置范围是 0 - 99999, 必须错开系统上已被其他程序占用的端口，如无特殊要求建议设置为9999。连接密码默认为空，也就是无须密码可以任意连接，如果担心不安全的连接，请设置密码。

如果你的电脑网络设置的是DHCP自动获取IP地址，你的IP地址可能会不固定，这样会造成你使用MusicBee Fly可能需要重新输入新的IP地址，所以最好让把你的电脑设置为固定IP。设置固定IP有两个方法：
a) 直接在网络属性里面把IPV4的地址固定（设置之前先查看DHCP SERVE给你分配的参数，完全设置成一样的就行了) 
b) 在路由器上的DHCP设置里把你的网卡MAC address设为静态分配，也就是分配一个固定的IP地址永不过期。具体设置方法不同的路由器稍有区别，但是大同小异。

建议采用方法b), 不会怎么办，当然是百度或者Google.

### 前端部分 ###



## 屏幕截图 ##

MusicBee Fly统一采用ionic的ios样式，在browser/iphone app/android app上面展现的效果完全一致，下面截图供参考：


## 鸣谢 ##

- [Websocksharp](http://)
- [NewSoft Json](http://)
