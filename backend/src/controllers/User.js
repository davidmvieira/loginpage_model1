import { openDb } from '../../db/configDB.js'

export async function createTable() {
    openDb()
    .then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT)')
    })
}

export async function insert(req, res) {
    let user = req.body
    console.log(user)
    openDb()
    .then(db => {
        db.run('INSERT INTO user ( name, email, password) VALUES (?, ?, ?)',[user.name,user.email,user.password])
    })
    res.json({"statusCode":200})
}

export async function update(req, res) {
    let user = req.body    
    openDb()
    .then(db => {
        db.run('UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?', [user.name, user.email, user.password, user.id])
        
    }).then(
    res.json({"statusCode":200}))
}

export async function getAll(req, res) {
    openDb()
    .then(db => {
        db.all('SELECT * FROM user').then(users => res.json(users))
    })
}

export async function getById(req, res) {
    let id = req.body.id
     openDb()
     .then(db => {
         db.get('SELECT * FROM user WHERE id = ?',[id]).then(user=> res.json(user))
     })
 }

 export async function deletedbyId(req, res) {
    let id = req.body.id
    openDb()
     .then(db => {
         db.get('DELETE FROM user WHERE id = ?',[id])
     })
     res.json({"statusCode":200})
 }

