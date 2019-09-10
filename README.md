## MusicBee Fly ##

[中文](README-CN.md) | [英文](README.md)

MusicBee Fly 是一款MusicBee插件，使用此插件可以让你远程使用手机控制MusicBee。在开始使用MusicBee Fly之前请先确保你已下载安装MusicBee，MusicBee是一款功能强大的音乐播放和管理软件，MusicBee可从[MusicBee官网](http://323)下载。 

MusicBee Fly的插件（后端）部分采用C#编写，前端部分采用ionic4 + AngularJs + Cordova编写，前后端数据交换采用Websocket，前端同时支持Browser/WebApp/Native App。

- [安装方法](#安装方法)
- [使用方法](#使用方法)
- [已知的BUG](#已知的BUG)
- [屏幕截图](#屏幕截图)
- [鸣谢](#鸣谢)

## 安装方法 ##

### 插件安装 ###

从[release](https://github.com/tracemouse/MusicBeeFly/releases) 页面下载最新版本的MusicBeeFly plugin 压缩文件，把解压之后得到的mb_fly。dll文件和mb_fly。www目录拷贝到MusicBee plugin目录下面。 拷贝之前请关闭MusicBee程序，拷贝完成后重新打开MusicBee程序，插件会自动生效。

### 安装手机App ###

手机App的安装方法有两种: WebApp(PWA)和 Native App，推荐安装Native App，获得更好的用户体验。

#### Iphone App ####

虽然MusicBee Fly前端部分很容易可以编译为ios app(ipa)，但是由于我没有Apple开发者帐号，所以无法把App发布到Apple App Store，所以暂时无法提供ios app。

#### Iphone PWA(WebApp) ####

ios从11.3开始支持PWA(Progress Web Application)，所以你可以使用PWA的方式让MusicBee Fly变成一个WebApp， 看起来和一个Native app非常相似，虽然用户体验无法和Native App相比。步骤如下：
1) 在你iphon的Safari浏览器里面打开下面这2个url中的任意一个:
http://musicbee-fly.tracemouse.top  (建议,原因参考[已知的BUG](#已知的BUG))
http://ip:port/  (这个是你自己的MusicBee 里面MusicBee Fly插件提供的，在MusicBee Fly设置窗口可以看见这个url)

2) 点击Safari下面的分享按钮，然后点击“添加到主屏幕”

3) 上面第二步完成之后在主屏幕上就可以看见MusicBee Fly图标，点击打开它，没错，看起来和一个普通的App一模一样

#### Android App ####

从[release](https://github.com/tracemouse/MusicBeeFly/releases)页面下载安装apk安装包，直接下载安装到你的安桌手机就行了。怎么安装安桌apk程序不用我多说了吧，拷贝到手机上之后在文件管理器里面点击apk文件就行了。

#### Android WebApp ####

如果你不想安装Android apk，同样也可以把MusicBee Fly安装为WebApp。安装方法和上面的Iphone PWA类似，不过要换成用Google Chrome浏览器来操作。你的安桌手机可能会提示你没有权限，需要在你的手机设置中放开Chrome添加主屏幕图标的权限，具体设置方法不同品牌手机可能稍有不同，仔细找找一定能找到。不要试图在你手机品牌自己提供的浏览器上寻找这个功能，一般是没有的，所以需要先安装Google Chrome浏览器.
另外，Chrome可能会提醒你http是非安全连接，建议采用SSL(https)，这个忽略就行了，不用理会。


## 使用方法 ##

### 插件设置 ###

插件的设置窗口可通过MusicBee 的"首选项" -> "插件" -> "MusicBee Fly 设置" 打开，在插件设置窗口可设置监听端口和连接密码。监听端口默认为9999，设置范围是 0 - 99999， 必须错开系统上已被其他程序占用的端口，如无特殊要求建议设置为9999。连接密码默认为空，也就是无须密码可以任意连接，如果担心不安全的连接，请设置密码。

如果你的电脑网络设置的是DHCP自动获取IP地址，你的IP地址可能会不固定，这样会造成你使用MusicBee Fly可能需要重新输入新的IP地址，所以最好让把你的电脑设置为固定IP。设置固定IP有两个方法：
a) 直接在网络属性里面把IPV4的地址固定（设置之前先查看DHCP SERVE给你分配的参数，完全设置成一样的就行了) 
b) 在路由器上的DHCP设置里把你的网卡MAC address设为静态分配，也就是分配一个固定的IP地址永不过期。具体设置方法不同的路由器稍有区别，但是大同小异。

建议采用方法b)， 不会怎么办，当然是百度或者Google。

请参考以下应用场景设置：
- 你的电脑拥有Internet(俗称外网)IP：
因为MusicBee Fly插件的http/websocket默认会绑定到你电脑的所有IP地址，所以如果有外网IP的话意思就是你的监控端口暴露在internet上面了，你可以用通过internet在任意地方遥控你的MusicBee，听起来很美好，但是实际上没什么X用，所以完全不建议把你的MusicBee Fly暴露在internet上，如果一定要在这个应用场景下使用，请记得一定要设置password,并且尽量使用复杂一点的密码（密码最高可设为8位），并且千万不要泄露你的密码。
另外，MusicBee Fly的websocket没有采用SSL，不要问我为什么。

- 你的电脑处于家庭局域网内部：
这个是最安全的应用场景，如果确认你的家庭局域网的内部用户都是可信任的（例如家人），可以不用设置密码，方便前端可以无须输入密码直接连接。完全不建议你在路由器上设置端口转发把你的MusicBee Fly端口暴露到Internet上。

- 你的电脑处于公司局域网内部：
如果你必须在公司局域网的内部电脑上使用MusicBee Fly插件，建议设置连接密码，防止公司同事连接到你的MusicBee打扰你听音乐的心情。


### 前端部分 ###

- 登录
登录页面需要填写IP地址、端口、密码，如果插件部分没有设置连接密码则密码无须填写，IP地址和端口必填，可用插件的设置窗口看见IP地址和端口。当然，你必须保证你的手机和电脑的网络是连通的，例如在同一个局域网下面。
每次打开App时，会自动使用你上一次设置的IP/端口/密码登录，如果登录失败（例如你的MusicBee未打开）会停留在登录页面

- 播放
播放页面显示的是正在播放的歌曲列表，歌曲列表右侧的红色播放按钮可点击播放这首歌曲，黄色喇叭图标表示当前正在播放这首歌曲。上部的播放、前进、后退按钮可点击控制歌曲的播放，黄色的歌曲播放进度条不可拖动和点击。右上角红色按钮在歌曲播放时会自动开始动画，播放停止时自动停止动画，可点击它进入当前播放歌曲的页面。
如果本页面的数据没有实时刷新，也没有弹出任何错误提示，那么有可能是Websocket的连接断开了，可以直接在本页面下拉刷新重新连接websocket，或者通过设置页面退出然后重新登录

- 正在播放的歌曲
播放进度条可以点击控制播放进度，不可以拖动控制
专辑封面在歌曲播放时默认会旋转，可在设置页面关闭动画
专辑封面建议全部使用正方形图片，否则拉伸后会变形，建议的分辨率是500x500

- 曲库
曲库页面首次进入时会自动获取MusicBee的音乐库，并按照文件夹、专辑、演唱者分类显示，搜索框可输入任意文件实时过滤列表数据。
本页面不会随时刷新，如果需要刷新数据可以下拉页面或者点击顶部的刷新按钮。
点击列表上的文件夹、专辑或演唱者可以进入歌曲列表页面
获取远程音乐库数据时是一次性把远程的所有歌曲全部获取过来，然后在本地进行排序和分类，如果你的音乐库的歌曲数量非常大，可能需要一点时间。作者的曲库中有2000多首歌曲，实测获取速度在可接受的范围。
顶部的搜索图标点击之后可以进入歌曲搜索页面。

- 搜索
搜索页面填写搜索关键字之后会从远程MusicBee音乐库中按照你的关键字搜索并返回所有满足条件的歌曲并显示，搜索结果和你在MusicBee中搜索一致。

- 播放列表
播放列表页面首次进入时会自动装载远程的播放列表，不会随时刷新，如果需要刷新数据可以下拉页面或者点击顶部的刷新按钮
点击播放列表可以进入歌曲列表页面

- 设置
上部的MusicBee连接是可以点击的，刷新间隔仅对播放页面生效，因为只有播放页面是不停的实时刷新的，默认值是1000毫秒，不建议设置的过大或者过小
右上角的红色按钮点击之后可以远程控制你的电脑关闭屏幕和关机，关机要小心点，特别是立即关机一旦点击你的电脑马上就会关机o

- 其他
因为Websocket有可能在空闲时被关闭，所以当调用Websocket发送数据失败时页面底部会弹出黄色的提示框，点击上面的X按钮会退出到登录页面，可以直接点击登录按钮重新连接并进入播放页面

## 已知的BUG ##

BUG一定会有的，但是基本都不太影响使用，作者只有一台iphone X和一台Oppo的低端安桌备用机，所以无法在不同的平台和不同的系统版本做广泛的测试。

遇到问题怎么办，关掉App（要从后台关闭App，否则只是让App进入后台而已），然后重新打开APP就行了。

PWA(WebApp) 安装模式并没有采用service worker + cache storage，所以依赖的浏览器自动缓存，从目前测试结果来看，Google PWA的效果不错，ios PWA的离线效果不太好，服务器端离线之后再连线时有时无法从服务器获取版本，所以对于iphone PWA用户，如果遇到PWA的使用问题，可能通过以下方法解决：

- 在主屏幕上删除MusicBee Fly，然后在iphone 设置 -> Safari 下面清掉Safari 缓存，然后重新添加PWA
- 建议通过我提供的 http://musicbee-fly.tracemouse.top 来添加PWA，因为这个url其实是指向github的（没错，就是你在这个页面上部看到的文件），而github是一直在线的，如果通过你自己的MusicBee Fly插件提供的url来添加PWA，那么一旦你的MusicBee程序被关闭了，这个url就是离线状态.


## 屏幕截图 ##

MusicBee Fly统一采用ionic的ios样式，在browser/iphone app/android app上面展现的效果完全一致，下面截图供参考：


## 鸣谢 ##

- [websock-sharp](https://github.com/sta/websocket-sharp)
- [Newtonsoft.Json](https://github.com/JamesNK/Newtonsoft.Json)
