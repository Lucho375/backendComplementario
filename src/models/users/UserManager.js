import { hash } from '../../helpers/hash.js'
import UserModel from './User.js'

class UserManager {
  async createUser(newUser) {
    const hashedPass = hash(newUser.password)
    return await UserModel.create({ ...newUser, password: hashedPass })
  }

  async login(user) {
    try {
      const userInDb = await UserModel.findOne({
        email: user.email
      }).exec()

      const hashedPassword = hash(user.password)

      if (userInDb.password === hashedPassword) return true
      return false
    } catch (error) {
      console.log(error)
    }
  }

  async deleteUser(id) {
    const user = await UserModel.findByIdAndUpdate(id, { enabled: false })
    return user
  }

  async updateUser(user, update) {
    try {
      const findedUser = await UserModel.findByIdAndUpdate(user.id, {
        ...update
      })
      return findedUser
    } catch (error) {
      console.log(error)
    }
  }
}

export default UserManager
