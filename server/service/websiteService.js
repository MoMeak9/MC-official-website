const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function addReadTime(req, res, next) {
    try {
        let times = await querySql('select times from readtable where item = ?', ['website'])
        times[0]++
        await querySql('update readtable set item = ?', [times[0]])
    } catch (err) {
        res.status(500).send({code: -1, msg: "系统异常"})
        console.log(err)
        next(err)
    }
}

async function queryReadTime(req, res, next) {
    try {
        let times = await querySql('select * from readtable')
        res.send({code: 1, msg: "成功", data: times})
    } catch (err) {
        res.status(500).send({code: -1, msg: "系统异常"})
        console.log(err)
        next(err)
    }
}

module.exports = {
    addReadTime,
    queryReadTime
}
