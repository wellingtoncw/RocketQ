const Database = require('./config')

const initDb = {
    async init(){ //pra usar o await em uma função, a função tem que ser async
        const db = await Database() //await aguarda o retorno antes de ir pra proxima linha

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
            )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            read INT
        )`);

        await db.close()
    }
}

initDb.init()