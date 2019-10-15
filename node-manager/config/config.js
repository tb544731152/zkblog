module.exports = {
    environment: 'dev',
    database: {
        dbName: 'boblog',
        host: '39.97.161.132',
        port: 3306,
        user: 'root',
        password: '123456'
    },
    security: {
        secretKey: "secretKey",
        // 过期时间 1小时
        expiresIn: 60 * 60
    },
    wx: {
        appId: '',
        appSecret: '',
        loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
    }
}
