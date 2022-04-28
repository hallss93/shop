const modules: any = {};
const requireModule = require.context("./modules", true);

requireModule.keys().forEach(fileName => {
  if (fileName.includes("index") && !fileName.includes("js")) {
    const moduleName = fileName.replace("./", "").replace("/index", "");

    modules[moduleName] = {
      namespaced: true,
      ...requireModule(fileName).default
    };
  }
});

export default modules;
