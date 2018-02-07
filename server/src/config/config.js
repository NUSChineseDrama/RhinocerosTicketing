module.exports = {
    port: process.env.PORT || 8087,
    db: {
        database: process.env.DB_NAME || 'rhino_ticket',
        user: process.env.DB_USER || 'president',
        password: process.env.DB_PASS || 'Rhinoceros2018',
        options: {
            dialect: process.env.DIALECT || 'mssql',
            host: process.env.HOST || 'rhino-ticket.database.windows.net',
            dialectOptions: {
                encrypt: true
              }
            // storage: './rhino-ticket.sqlite'
        }
    }
}
