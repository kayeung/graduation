// 连接数据库 1.安装mysql 2.创建连接
const mysql = require("mysql")

// 创建数据库连接
const client = mysql.createConnection({
    //远程数据库
    // host:"120.78.134.163",//数据域名 地址
    // user:'phone',//数据库名称
    // password:'e6n6eckjfwKYANjH',//数据库密码 
    // database:'phone',

    //本地数据库
    host: "localhost",//数据域名 地址
    user: 'root',//数据库名称
    password: '',//数据库密码 
    database: 'oppo-database',

    // port:3306,
})

// 封装数据库操作语句 sql语句 参数数组arr callback成功函数结果
function sqlFun(sql, arr, callback) {
    client.query(sql, arr, function (error, result) {
        if (error) {
            console.log("数据库语句错误");
            console.log(error.toString())
            return;
        }
        callback(result)
    })
}

module.exports = sqlFun