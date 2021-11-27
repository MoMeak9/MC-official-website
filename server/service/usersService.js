const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

async function login(req, res, next) {
  try {
    const {userEmail, password} = req.body
    const result = await prisma.user.get({
      user_email: userEmail,
      user_password: password
    })
    if (result == null) {
      res.send({})
    } else {
      res.send({})
    }
  } catch (err) {
    res.status(500).send({
      head: {
        code: -1, msg: "系统异常"
      }
    })
    next(err)
  }
}

module.exports={
  login,
}
