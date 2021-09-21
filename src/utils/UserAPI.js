import users from '../users.json'
export function getUserData(id){
    const user = users.filter((user) => user.username === id)
    return user[0]
}