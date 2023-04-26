import UserManager from '../models/users/UserManager.js'

const manager = new UserManager()

const userController = {
  createUser: async (req, res) => {
    try {
      const newUser = await manager.createUser(req.body)
      res.status(201).send(newUser)
    } catch (error) {
      res.status(400).send({ error: error.message })
    }
  },
  login: async (req, res) => {
    try {
      const user = req.body
      const loggedUser = await manager.login(user)

      if (loggedUser) {
        return res.send('Logeado')
      }
      res.send(loggedUser)
    } catch (error) {
      res.send({ error: error.message })
    }
  },
  updateUserInfo: async (req, res) => {
    try {
    } catch (error) {
      console.log(error)
    }
  },
  deleteUser: async (req, res) => {
    try {
    } catch (error) {
      console.log(error)
    }
  }
}
export default userController
