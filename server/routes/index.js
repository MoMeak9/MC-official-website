const express = require('express');
const expressJWT = require("express-jwt");
const createError = require("http-errors");
const {PRIVATE_KEY, whitelist} = require('../utils/constant')
// Routes
// const usersRouter = require('../routes/users');
const websiteRouter = require('../routes/website');

const router = express.Router();

router.use(expressJWT({
  secret: PRIVATE_KEY, // algorithms: ['RS256'],
  algorithms: ['HS256']
}).unless({
  path: whitelist // ⽩名单,除了这⾥写的地址，其他的URL都需要验证
}));

router.use('/api/website', websiteRouter);

// catch 404 and forward to error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.use(function (req, res, next) {
  next(createError(404));
});

// error handler
router.use(function (err, req, res) {
  console.log(err);
  if (err.name === 'UnauthorizedError') {
    // 这个需要根据⾃⼰的业务逻辑来处理
    res.status(401).send({code: -1, msg: 'token验证失败'});
  } else {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  }
});

module.exports = router;
