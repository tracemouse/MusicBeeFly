## MusicBee Fly ##

[中文](README-CN.md)

MusicBee Fly is a MusicBee Plugin, to enable remote controling of MusicBee by your mobile phone.

MusicBee is a free and powerfull music player.  
[**MusicBee Website**](http://www.getmusicbee.com/) 

MusicBee Fly does include two parts : Plugin and App, Plugin was built by C#, App was built by ionic4 + AngularJs + Cordova,
App supports the mobile browser, WebApp and Native App.  And the UI uses iOS style of ionic4 to show the same style on different platforms. 

- [Install](#Install)  
  [MusicBee Fly Plugin Install](#MuiscBee-Fly-Plugin-Install)  |  [MusicBee Fly App Install](#MuiscBee-Fly-App-Install) 
- [Usage](#Usage)   
  [MusicBee Fly Plugin Usage](#MuiscBee-Fly-Plugin-Usage)  |  [MusicBee Fly App Usage](#MuiscBee-Fly-App-Usage) 
- [Multiple Languages](#Multiple-Languages)
- [Bugs](#Bugs)
- [Thanks](#Thanks)
- [Contact](#Contact)
- [Donate](#Donate)

## Install ##

### MuiscBee Fly Plugin Install ###

Get the latest plugin file from the [release](https://github.com/tracemouse/MusicBeeFly/releases) page,
unzip the zip file and copy the file `mb_fly.dll` and the folder `mb_fly.www` to the folder of `MusicBee Plugins`.
Please remember to close the MusicBee main program, the plugin will be effective when you re-open the MusicBee program. 

![Plugin-1](https://tracemouse.github.io/MusicBeeFly/docs/Plugin-1.png)

### MusicBee Fly App Install ###

App could be installed as WebApp or Native App, suggest to install Native App for better user experience.

#### iPhone App ####

You cannot get it from Apple App Store in this stage because I have no an Apple developer acccount.

#### iPhone WebApp ####

iOS starts to support PWA(Progress Web Application) from `11.3`, it means you can add MusicBee Fly as a WebApp.  
Steps:
1) Open ether one of the below two urls on your iPhone's Safari

URL  | Remark
 ---- | -----  
http://musicbee-fly.tracemouse.top  |  Suggested, refer to [Bugs](#Bugs)
http://ip:port/  |  It's provided by your own MusicBee Fly Plugin, check it from the setting panel of MusicBee Fly Plugin

2) Click the share button and then click the button `Add to main screen`

3) Now you can see the MusicBee Fly icon on your main screen, click it like a native app, enjoy it

![iphone-1](https://tracemouse.github.io/MusicBeeFly/docs/iphone-1.png)
![iphone-2](https://tracemouse.github.io/MusicBeeFly/docs/iphone-2.png)
![iphone-3](https://tracemouse.github.io/MusicBeeFly/docs/iphone-3.png)
![iphone-4](https://tracemouse.github.io/MusicBeeFly/docs/iphone-4.png)

#### Android App ####

Get the apk file from the [release](https://github.com/tracemouse/MusicBeeFly/releases) page, Don't ask me how to install an Andriod app from the apk file.

#### Android WebApp ####

If you do not want to install the apk file, you may aslo install the MusicBee Fly as an Android WebApp like iPhone above. Please use Google Chrome to do it instead of the browser provided by your phone.  

Chrome may remind you the HTTP is unsafe, please ignore it because MusicBee Fly cannot use SSL.

![chrome](https://tracemouse.github.io/MusicBeeFly/docs/chrome.png)
![chrome2](https://tracemouse.github.io/MusicBeeFly/docs/chrome-2.png)

## Usage ##

### MuiscBee Fly Plugin Usage ###

The plugin seting panel could be opened from "MusicBee perferences" -> "Plugins" -> "MusicBee Fly Setting". 

![Plugin-2](https://tracemouse.github.io/MusicBeeFly/docs/Plugin-2.png)

Suggest to fix the IP address of your computer.

- Your computer has a internet IP：  
Please remember to set a strong password.

- Your computer is a part of company network:
Please remember to set a password.

- Your computer is a part of the family network: 
No need to set the password for easy using.

### MuiscBee Fly App Usage ###

- Login  
No need to input the password if you didn't set a password in the plugin.

![login](https://tracemouse.github.io/MusicBeeFly/docs/login.png)

- Now Playing List  

![tab1](https://tracemouse.github.io/MusicBeeFly/docs/tab1.png)

- Now Playing Track
Suggest to use the cover with 500x500  

![playing](https://tracemouse.github.io/MusicBeeFly/docs/playing.png)

- Music Library  
Loading the whole library may need a couple of minutes.

![tab2](https://tracemouse.github.io/MusicBeeFly/docs/tab2.png)

- Search  

![search](https://tracemouse.github.io/MusicBeeFly/docs/search.png)

- Playlist  

![tab3](https://tracemouse.github.io/MusicBeeFly/docs/tab3.png)

- Settings
Refresh interval is used for now playing only, suggest to set it as 1000 ms.  

![tab4](https://tracemouse.github.io/MusicBeeFly/docs/tab4.png)
 

## Multiple Languages ##

MusicBee Fly App supports 简体中文、繁体中文 and English, if you would translate it as other language, please try to transalte the below JSON file and send back me for next version.

`assets\i18n\en.json`

## Bugs ##

iPhone WebApp may eccounter some problems because it depends on auto cache of Safari, if it doesn't work, you may try the following approach,

- Delete MusicBee Fly from main screen, clean the Safari cache, and re-add the WebApp

- Suggest to add the url [http://musicbee-fly.tracemouse.top](http://musicbee-fly.tracemouse.top)  as the WebApp because the url will be always online.

## Thanks ##
- [MusicBee](http://www.getmusicbee.com/) 
- [websock-sharp](https://github.com/sta/websocket-sharp)
- [Newtonsoft.Json](https://github.com/JamesNK/Newtonsoft.Json)


## Contact ##

Can send the email to me.  

<tracemouse@163.com>

## Donate ##


**Paypal:**  [`paypal.me/Yangjun78`](https://paypal.me/Yangjun78)

** Alipay / Wechat : **

![alipay-wechat](https://tracemouse.github.io/MusicBeeFly/docs/alipay-wechat.png)