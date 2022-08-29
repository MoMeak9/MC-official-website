import storage from "store2";

export default ({ app }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.router.beforeEach((to:any, from:any, next:any) => {
    const token = storage.get("token");
    if (to.path === "/apply" && token == null) {
      next({
        path: "/login",
      });
    } else {
      next();
    }
  });
};
