require("dotenv").config();

module.exports = {
     client: 'mysql2',
     connection: {
          host: '127.0.0.1',
          user: 'root',
         password: process.env.PASSWORD_BD,
          database: 'Banco_Pokemon'
     },
     
     debug: true
}