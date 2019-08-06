function formatComponentName(vm) {
  try {
      if (vm.$root === vm) return "root";

      var name = vm._isVue
          ? (vm.$options && vm.$options.name) ||
            (vm.$options && vm.$options._componentTag)
          : vm.name;
      return (
          (name ? "component <" + name + ">" : "anonymous component") +
          (vm._isVue && vm.$options && vm.$options.__file
              ? " at " + (vm.$options && vm.$options.__file)
              : "")
      );
  } catch (error) {
      // 无需出错处理
  }
}

export default function(monitor, Vue) {
  Vue.config.errorHandler = function(err, vm, info) {
      try {
          if (vm) {
              var componentName = formatComponentName(vm);
              var propsData = vm.$options && vm.$options.propsData;
              monitor.getJsError(err, {
                  metaData: {
                      componentName: componentName,
                      propsData: propsData,
                      info: info
                  }
              });
          } else {
            monitor.notifyError(err);
          }
      } catch (error) {
          // 无需出错处理
      }
  };
}