##技术栈：
  vue2.0 + vue-router + express + node + axios + element-ui 
## 项目运行
  1. 安装依赖
    cnpm install

  2. 项目启动
    npm start/npm run dev

  3. 项目打包
    npm run build  

## 访问数据
   进入src/main.js文件中
   找到第23行  axios.defaults.baseURL = getUrl(0);
   通过更改getUrl(bool)根据传递参数(参数为布尔值,true为进行远程访问,false则进行本地数据的访问)改变访问数据的地址
### 本地访问
   进入src/main.js文件,更改axios.defaults.baseURL = getUrl(0);
   注意：如果更改本地访问地址，则需要同时将页面数据请求中的地址变更为与设置的本地访问路径一致
### 远程访问  
   1.将src/config目录中的baseUrl.js文件中的地址替换为所需的网络地址，并将src下的service文件夹放在所在服务器下，即
   export function getUrl(flag){
      if(flag){
        return 'http://www.wwtliu.com/net/axsl'(远程访问路径)
      }else{
        return '/net/axsl/static'(本地访问路径)
      }
    }
   2.进入src/main.js，更改axios.defaults.baseURL = getUrl(1);

   




