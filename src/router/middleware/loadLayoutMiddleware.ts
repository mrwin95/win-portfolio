export async function loadLayoutMiddleware(route: any) {
  try {
    const layout = route.meta.layout;
    const layoutComponent = await import(`@/layouts/${layout}.vue`);
    route.meta.layoutComponent = layoutComponent.default;
  } catch (e) {
    console.error("Error occurred in progressing of layouts: ", e);
    console.log("Mounted default layout AppLayoutDefault");
    const layout = "AppLayoutDefault";
    const layoutComponent = await import(`@/layouts/${layout}.vue`);
    route.meta.layoutComponent = layoutComponent.default;
  }
}
