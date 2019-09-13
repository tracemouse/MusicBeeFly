## MusicBee Fly ##

[**English**](README.md)

MusicBee Fly 是一款MusicBee插件，使用此插件可以让你远程使用手机控制MusicBee。

在开始使用MusicBee Fly之前请先确保你已下载安装 [**MusicBee**](http://www.getmusicbee.com/) ，MusicBee是一款完全免费的、功能强大的音乐播放和管理软件。  

MusicBee Fly 分为plugin和App两部分，plugin采用C#编写，App采用ionic4 + AngularJs + Cordova编写，plugin和App数据交换采用Websocket协议，并且App同时支持Browser(Web)、WebApp和Native App三种方式。UI统一采用ionic4的iOS样式，在Safari/Chrome/iOS App/Android App上面呈现的效果完全一致。

- [安装方法](#安装方法)  
  [MusicBee Fly plugin 安装方法](#MuiscBee-Fly-plugin-安装方法)  
  [MusicBee Fly App 安装方法](#MuiscBee-Fly-App-安装方法)   

- [使用方法](#使用方法)   
  [MusicBee Fly plugin 使用方法](#MuiscBee-Fly-plugin-使用方法)  
  [MusicBee Fly App 使用方法](#MuiscBee-Fly-App-使用方法)   

- [多语言支持](#多语言支持)

- [已知的问题](#已知的问题)

- [鸣谢](#鸣谢)

- [联系作者](#联系作者)

- [捐助](#捐助)

## 安装方法 ##

### MuiscBee Fly plugin 安装方法 ###

从 [release](https://github.com/tracemouse/MusicBeeFly/releases) 页面下载最新版本的MusicBeeFly plugin 压缩文件，把解压之后得到的`mb_fly.dll`文件和`mb_fly.www`目录拷贝到MusicBee Plugins目录下面。 拷贝之前请关闭MusicBee主程序，拷贝完成后重新打开MusicBee程序，插件会自动生效。  

![plugin-1](https://tracemouse.github.io/MusicBeeFly/docs/plugin-1.png)

### MusicBee Fly App 安装方法 ###

App的安装方法有两种: WebApp 和 Native App，推荐安装Native App，获得更好的用户体验。

#### iPhone App ####

由于作者没有Apple开发者帐号，无法把App发布到Apple App Store，所以暂时无法提供iOS App。

#### iPhone WebApp ####

iOS从**11.3**开始支持PWA(Progress Web Application)，所以你可以通过添加PWA的方式让MusicBee Fly变成一个WebApp。  
 
1) 在iPhone的Safari浏览器里面打开下面这2个url中的任意一个:

URL  | 说明
 ---- | -----  
http://musicbee-fly.tracemouse.top  |  建议,因为这个URL一直在线并且始终是最新版本
http://ip:port/  |  在MusicBee Fly plugin设置窗口可以看见这个url, 只有当MuicBee主程序打开时这个URL才能访问

2) 点击Safari下面的`分享按钮`，然后点击`添加到主屏幕`

3) 上面第二步完成之后在主屏幕上就可以看见MusicBee Fly图标，点击打开它，没错，看起来和一个普通的iPhone Native App一模一样，enjoy it

![iphone-1](https://tracemouse.github.io/MusicBeeFly/docs/iphone-1.png)
![iphone-2](https://tracemouse.github.io/MusicBeeFly/docs/iphone-2.png)
![iphone-3](https://tracemouse.github.io/MusicBeeFly/docs/iphone-3.png)
![iphone-4](https://tracemouse.github.io/MusicBeeFly/docs/iphone-4.png)

#### Android App ####

从 [release](https://github.com/tracemouse/MusicBeeFly/releases) 页面下载apk安装包，拷贝到手机上之后在文件管理器里面点击apk文件就行了。

#### Android WebApp ####

如果你不想安装Android apk，同样也可以把MusicBee Fly安装为WebApp。安装步骤方法和上面的iPhone WebApp，不过要换成用Google Chrome浏览器来操作。你的安桌手机可能会提示你没有权限，需要在手机设置中放开Chrome添加主屏幕图标的权限，具体设置方法不同品牌手机可能稍有不同。不要试图在你手机品牌自己提供的浏览器上寻找这个功能，一般是没有的，所以需要先安装Google Chrome浏览器.  

另外，Chrome可能会提醒你http是非安全连接，这个忽略就行了，不用理会，因为MusicBee Fly plugin没有采用SSL。

![chrome](https://tracemouse.github.io/MusicBeeFly/docs/chrome.png)
![chrome2](https://tracemouse.github.io/MusicBeeFly/docs/chrome-2.png)


## 使用方法 ##

### MuiscBee Fly plugin 使用方法 ###

插件的设置窗口可通过MusicBee的`"首选项" -> "插件" -> "MusicBee Fly 设置" `打开。端口默认为`9999`，建议设置范围是9000 - 9999，必须错开系统上已被其他程序占用的端口，如无特殊需要建议设置为9999。密码默认为空，也就是无须密码可以任意连接，如果担心不安全，请设置密码。  

![plugin-2](https://tracemouse.github.io/MusicBeeFly/docs/plugin-2.png)

如果你的电脑网卡设置的是DHCP自动获取IP地址，IP地址可能会不固定，这样会造成你使用MusicBee Fly App时可能经常需要输入新的IP地址，所以最好把网卡设置为固定IP。设置固定IP有两个方法：  
a) 直接在网卡属性里面把IPV4的地址固定（设置之前先查看DHCP SERVER给你分配的参数，完全设置成一样的就行了)   
b) 在路由器上的DHCP设置里把你的网卡MAC address设为静态分配，也就是分配一个固定的IP地址永不过期。具体设置方法不同的路由器稍有区别，但是大同小异。  

建议采用方法b， 不会的话请百度或者Google。

请参考以下应用场景设置：

- 你的电脑拥有Internet(俗称外网)IP：  
因为MusicBee Fly plugin的http/websocket会绑定到你电脑上的所有IP地址，所以如果你电脑有外网IP的话意味着你的端口暴露在Internet上面了，你可以用通过Internet在任意地方遥控你的MusicBee，听起来很美好，但是实际上没什么X用，所以完全不建议把MusicBee Fly plguin 暴露在Internet上，如果一定要在这个应用场景下使用，`请记得一定要设置密码，并且尽量使用复杂一点的密码（密码最高可设为8位），并且千万不要泄露你的密码`。

- 你的电脑处于公司局域网内部：
如果你必须在公司局域网的内部电脑上使用MusicBee Fly plugin，建议设置连接密码，防止公司同事偷偷连接到你的MusicBee打扰你听音乐的心情。

- 你的电脑处于家庭局域网内部：  
这个是最安全的应用场景，如果确认你的家庭局域网的内部用户都是可信任的（例如家人），可以不用设置密码，方便前端可以无须输入密码直接连接。另外，完全不建议你在路由器上设置端口转发把你的MusicBee Fly plugin端口暴露到Internet上，理由同上面第一个应用场景。

### MuiscBee Fly App 使用方法 ###
所有红色的地方都是可以点击的，播放、曲库、歌单页面支持下拉刷新。

- **登录**    
如果插件部分没有设置连接密码则密码无须填写，必须保证你的手机和MusicBee电脑的网络是连通的，例如在同一个局域网下面。  

![login](https://tracemouse.github.io/MusicBeeFly/docs/login.png)


- **播放**    
如果本页面的数据没有实时刷新，也没有弹出任何错误提示，那么有可能是Websocket的连接断开了，可以直接在本页面下拉刷新重新连接websocket，或者通过设置页面退出然后重新登录。   

![tab1](https://tracemouse.github.io/MusicBeeFly/docs/tab1.png)


- **正在播放的歌曲**    
播放进度条可以点击控制播放进度，不可以拖动控制  
专辑封面在歌曲播放时默认会旋转，可在设置页面关闭动画  
`专辑封面建议全部使用正方形图片，否则拉伸后会变形，建议的分辨率是500x500`

![playing](https://tracemouse.github.io/MusicBeeFly/docs/playing.png)


- **曲库**    
首次进入时会自动获取MusicBee的音乐库，本页面不会自动刷新，如果需要刷新数据可以下拉页面或者点击顶部的刷新按钮。  
获取远程音乐库数据时是一次性把远程的所有歌曲全部获取过来，然后在本地进行排序和分类，如果你的音乐库的歌曲数量非常大，可能需要一点时间。作者的曲库中有2000多首歌曲，实测获取速度在可接受的范围。  

![tab2](https://tracemouse.github.io/MusicBeeFly/docs/tab2.png)


- **搜索**     
填写搜索关键字之后会从远程MusicBee音乐库中按照你的关键字搜索并返回所有满足条件的歌曲并显示，搜索结果和你在MusicBee中搜索一致。  

![search](https://tracemouse.github.io/MusicBeeFly/docs/search.png)


- **播放列表**    
首次进入时会自动装载远程的播放列表，不会自动刷新，如果需要刷新数据可以下拉页面或者点击顶部的刷新按钮    

![tab3](https://tracemouse.github.io/MusicBeeFly/docs/tab3.png)


- **设置**  
刷新间隔仅对播放页面生效，因为只有播放页面是不停的实时刷新的，默认值是1000毫秒，不建议设置的过大或者过小 
右上角的红色按钮点击之后可以远程控制你的电脑关闭屏幕和关机，关机要小心点，特别是立即关机一旦点击你的电脑马上就会关机

![tab4](https://tracemouse.github.io/MusicBeeFly/docs/tab4.png)


- **其他**  
因为Websocket有可能在空闲时被关闭，所以当调用Websocket发送数据失败时页面底部会弹出黄色的提示框，点击上面的X按钮会退出到登录页面，可以直接点击登录按钮重新连接并进入播放页面 


## 多语言支持 ##

MusicBee Fly App目前支持简体中文、繁体中文和英文三种语言，如果你有兴趣翻译为其他语言，请找到下面这个JSON文件，翻译之后记得发一份给我整合到下一个版本。

[`assets\i18n\en.json`](https://tracemouse.github.io/MusicBeeFly/assets/i18n/en.json)

## 已知的问题 ##

- **连接断开**  
Websocket连接有可能会在App进入后台之后被断开，重新刷新或者重新登录可解决

- **不支持cue file**  
因为MusicBee插件接口不支持cue file，所以MusicBee Fly对cue file的支持不好，建议使用CUE Splitter把单文件分割为多文件。  
CUE Splitter可以从Miscrosoft Store免费下载。

- **WebApp 缓存问题**  
WebApp(PWA) 安装模式并没有采用service worker + cache storage，所以依赖的浏览器自动缓存，从目前测试结果来看，Google PWA的效果不错，iOS PWA的离线效果不太好，服务器端离线之后再连线时有时无法从服务器获取版本，所以对于iPhone PWA用户，如果遇到PWA的使用问题，可能通过以下方法解决：

   - 在主屏幕上删除MusicBee Fly，然后在iPhone 设置 -> Safari 下面清掉Safari 缓存，然后重新添加WebApp

   - 建议通过作者提供的 [http://musicbee-fly.tracemouse.top](http://musicbee-fly.tracemouse.top) 来添加WebApp，因为这个url其实是指向github的（没错，就是你在这个页面上部看到的文件），而github是一直在线的，如果通过你自己的MusicBee Fly插件提供的url来添加WebApp，那么一旦你的MusicBee程序被关闭了，这个url就是离线状态.

## 鸣谢 ##

- [MusicBee](http://www.getmusicbee.com/) 
- [websock-sharp](https://github.com/sta/websocket-sharp)
- [Newtonsoft.Json](https://github.com/JamesNK/Newtonsoft.Json)


## 联系作者 ##

可以给我发电子邮件，但是我不一定会一一回复。  

<tracemouse@163.com>

## 捐助 ##

如果你认可作者的劳动，你可以选择下面任意一种方式(paypal/微信/支付宝)捐助。

**Paypal:**  

[`paypal.me/Yangjun78`](https://paypal.me/Yangjun78)

**微信**

![alipay-wechat](https://tracemouse.github.io/MusicBeeFly/docs/wechat.png)

**支付宝**

![alipay-wechat](https://tracemouse.github.io/MusicBeeFly/docs/alipay.png)