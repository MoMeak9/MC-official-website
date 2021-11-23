const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

async function getArticle(req, res, next) {
  const articles = await prisma.article.findMany()
  res.send({articles})
}

module.exports = {
  getArticle
}
