export default defineNuxtRouteMiddleware(async (to) => {
    if(to.path !== '/') {
      try {
        const response = await fetch(useDomain(to.path));
        if (response.redirected) {
          let url = response.url.split("?", 2);
          let urlArr = url[0].split("/");
          return navigateTo('/' + urlArr.slice(3).join('/'), {redirectCode: 301})
        }
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
      }
    }
  });