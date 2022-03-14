// 搭建express服务
const express = require('express')
const app = express()
//路由
const router=require('../server/router')
//post 请求表单数据
app.use(express.urlencoded({extended:true}))

//静态文件托管 --- 访问http://localhost:9090/图片.jpg
app.use(express.static('upload'))

app.use('/api',router)

app.listen(9090,()=>{
    console.log(9090);
})