module.exports = {
    port: 8081,
    db: {
        database: process.env.DB_NAME || 'vegetablefruit',
        user: process.env.DB_User || 'root',
        password: process.env.DB_PASS || '',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            storage: './vegetablefruit.sqlite'
        },
    },
    authentication:{
        jwtSecret: "test"
    }
}