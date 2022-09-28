//引入fs模块
const fs = require("fs")
// 读取 诗文
function readshiwen() {
    return new Promise((resolve, reject) => {
        fs.readFile("./插秧诗.md", (err, data) => {
            // 如果失败
            if (err) reject(err);
            // 如果成功
            resolve(data)
        })
    })
}

// 声明一个async函数
async function main() {
    // 获取为学内容
    let weixun = await readshiwen();
    console.log(weixun.toString());
}
main()