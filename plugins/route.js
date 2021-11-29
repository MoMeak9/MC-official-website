import storage from 'store'

export default ({app}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.router.beforeEach((to, from, next) => {
    const token = storage.get('token')
    if (to.path === '/questionnaire' && token == null) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  })
}
