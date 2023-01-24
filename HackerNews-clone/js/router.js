import { Stories } from "../pages/stories";
import view from "../utils/view";
import Favorites from "../pages/favorites";

const router = new Navigo(null, true, "#");
console.log(router);

export default class RouterHandler {
  constructor() {
    this.createRoutes();
  }

  createRoutes() {
    const routes = [
      { path: "/", page: Stories },
      { path: "/new", page: Stories },
      { path: "/ask", page: Stories },
      { path: "/show", page: Stories },
      { path: "/item", page: Item },
      { path: "/favorites", page: Favorites },
    ];

    routes.forEach(({ path, page }) => {
      router
        .on(path, () => {
          page(path);
        })
        .resolve();
    });
  }
}
