### HTTP代理

在项目中可以利用node_env判断环境，可以在开发环境中使用node的http代理转发请求。

why use it？

- 服务端不存在跨域
- 可以修改返回数据，进行mock
- 热更新

在项目中有更加强大的方案。类似node-http-proxy。