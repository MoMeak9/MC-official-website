import storage from 'store'
import {NavigationGuardNext, Route} from 'vue-router'

export default ({app}: any) => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.router.beforeEach((to: Route, from: Route, next: NavigationGuardNext) => {
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
