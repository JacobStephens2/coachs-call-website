// Gatsby component for work page
(function(modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) {
    if(installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
  }
  return __webpack_require__(0);
})([
  function(module, exports, __webpack_require__) {
    "use strict";
    var React = __webpack_require__(1);
    var ReactDOM = __webpack_require__(2);
    
    var WorkPage = function WorkPage() {
      return React.createElement("div", null, "Work Page Content");
    };
    
    module.exports = WorkPage;
  },
  function(module, exports) {
    module.exports = window.React;
  },
  function(module, exports) {
    module.exports = window.ReactDOM;
  }
]);
