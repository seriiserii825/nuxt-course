export default defineNuxtRouteMiddleware((to, from) => {
  const is_logged_in = false;

  if (is_logged_in) {
    return navigateTo(to.fullPath);
  } else if (to.path === "/login") {
    return;
  }
  return navigateTo("/login");
});
