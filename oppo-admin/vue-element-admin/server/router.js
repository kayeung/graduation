// const { default: router } = require('@/router')
const express = require('express')
const router = express.Router()
// 导入数据库 sqlF n('sql',[],res=>{})
const sqlFn = require('./mysql')
//图片需要的模块
const multer = require('multer')
const fs = require('fs')

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


module.exports = router