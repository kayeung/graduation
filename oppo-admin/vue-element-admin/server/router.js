// const { default: router } = require('@/router')
const express = require('express')
const router = express.Router()
// 导入数据库 sqlF n('sql',[],res=>{})
const sqlFn = require('./mysql')
//图片需要的模块
const multer = require('multer')
const fs = require('fs')
//导入模块 jsonwebtoken 密钥
const jwt = require('jsonwebtoken')
// config.jwtSecert 
const config=require('./secert')

//测试接口
router.get('/', (req, res) => {
    res.send('hello')
})

router.get('/test', (req, res) => {
    const sql = 'select * from project where id';
    sqlFn(sql, null, result => {
        if (result.length > 0) {
            res.send({
                status: 200,
                data: result,
            })
        } else {
            res.send({
                status: 500,
                msg: '暂无数据'
            })
        }
    })
})

// 路由接口

/**
 * 注册
 */
router.post("/register", (req, res) => {
    const { userName, password, email } = req.body;
    const sql = "insert into user values(null,?,?,?)";
    const arr = [userName, password, email]
    sqlFn(sql, arr, result => {
        if (result.affectedRows > 0) {
            res.send({
                status: 200,
                msg: "注册成功"
            })
        } else {
            res.send({
                status: 401,
                msg: '注册失败'
            })
        }
    })
})

/**
 * 登陆接口
 * 语法：
 * 如60，"2 days","10h","7d",Expiration time,过期时间
 * jwt.sign({},'秘钥','过期时间，{expiresIn:20*1,'1day''1h'}')
 */

/**
 * 登录
 * 接受字段：userName, password
 */
router.post("/login", (req, res) => {
    const { userName, password } = req.body;
    //请求数据库
    const sql = "select * from user where userName=? and password=?";
    const arr = [userName, password];
    sqlFn(sql, arr, result => {
        if (result.length > 0) {
            let token = jwt.sign({
                userName: result[0].userName,
                id: result[0].id
            }, config.jwtSecert, {
                expiresIn: 20 * 1
            })
            res.send({
                status: 200,
                data: token,
            })
        } else {
            res.send({
                status: 404,
                msg: "信息错误"
            })
        }
    })
})


/**
 * 商品列表：获取分页{total:'',arr:[{},{},{}],pagesize:8,}
 * 参数:page 页码
 */
router.get('/goodsList', (req, res) => {
    const page = req.query.page || 1;
    const sqlLen = "select * from project where id";
    sqlFn(sqlLen, null, data => {
        let len = data.length;
        const sql = 'select * from project order by id desc limit 8 offset ' + (page - 1) * 8;
        sqlFn(sql, null, result => {
            if (result.length > 0) {
                res.send({
                    status: 200,
                    data: result,
                    pageSize: 8,
                    total: len
                })
            } else {
                res.send({
                    status: 500,
                    msg: '暂无数据'
                })
            }
        })
    })
})

/**
 * 商品查询接口 search
 * 参数:search
 */
router.get('/search', (req, res) => {
    var search = req.query.search;
    const sqlLen = "select * from project where concat(title,sellPoint,descs) like '%" + search + "%'";
    sqlFn(sqlLen, null, (result) => {
        if (result.length > 0) {
            res.send({
                status: 200,
                result
            })
        } else {
            res.send({
                status: 500,
                msg: '暂无数据',
            })
        }
    })
})

/**
 * 上传图片 post请求 upload
 * 说明：
 * 1.后台安装 multer模块，同时引入fs模块
 * 2.router.js入口文件导入模块
 *      const fs=require('fs')
 *      const multer=require('multer')
 * 3.上传图片
 */
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./upload/")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
})

var createFolder = function (folder) {
    try {
        fs.accessSync(folder);
    } catch (e) {
        fs.mkdirSync(folder);
    }
}

var uploadFolder = './upload/';
createFolder(uploadFolder);
var upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), function (req, res, next) {
    var file = req.file;
    console.log('文件类型：%s', file.mimetype);
    console.log('原始文件名：%s', file.originalname);
    console.log('文件大小：%s', file.size);
    console.log('文件保存路径：%s', file.path);
    res.json({ res_code: '0', name: file.originalname, url: file.path });
});

/**
 * 类目选择
 * 接口说明：接口不同的参数cid返回不同的类目数据 后台接受变量：id
 */
router.get("/selectItemCategoryByParentId", (req, res) => {
    const id = req.query.id || 1;
    const sql = "select * from category where id=?";
    const arr = [id];
    sqlFn(sql, arr, result => {
        if (result.length > 0) {
            res.send({
                status: 200,
                result
            })
        } else {
            res.send({
                status: 500,
                msg: "暂无数据"
            })
        }
    })
})



module.exports = router