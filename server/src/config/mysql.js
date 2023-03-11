import mysql from 'mysql'

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Lalit33#cool',
    database:'CRUDDataBase'
})


export default db