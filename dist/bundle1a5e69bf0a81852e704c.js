/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes animate {\n  0% {\n    background-position: 0%;\n  }\n  100% {\n    background-position: 400%;\n  }\n}\n@-webkit-keyframes glow {\n  from {\n    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;\n  }\n  to {\n    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;\n  }\n}\n@keyframes move-background {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n  }\n  to {\n    -webkit-transform: translate3d(1000px, 0, 0);\n  }\n}\n@-webkit-keyframes move-background {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n  }\n  to {\n    -webkit-transform: translate3d(1000px, 0, 0);\n  }\n}\n@-moz-keyframes move-background {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n  }\n  to {\n    -webkit-transform: translate3d(1000px, 0, 0);\n  }\n}\n@-webkit-keyframes move-background {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n  }\n  to {\n    -webkit-transform: translate3d(1000px, 0, 0);\n  }\n}\n.background-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.stars {\n  background: black url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png) repeat;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: block;\n  z-index: -5;\n}\n\n.twinkling {\n  width: 10000px;\n  height: 100%;\n  background: transparent url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png\") repeat;\n  background-size: 1000px 1000px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -4;\n  -moz-animation: move-background 70s linear infinite;\n  -ms-animation: move-background 70s linear infinite;\n  -o-animation: move-background 70s linear infinite;\n  -webkit-animation: move-background 70s linear infinite;\n  animation: move-background 70s linear infinite;\n}\n\n.clouds {\n  width: 10000px;\n  height: 100%;\n  background: transparent url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/clouds_repeat.png\") repeat;\n  background-size: 1000px 1000px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 0;\n  -moz-animation: move-background 50s linear infinite;\n  -ms-animation: move-background 50s linear infinite;\n  -o-animation: move-background 50s linear infinite;\n  -webkit-animation: move-background 50s linear infinite;\n  animation: move-background 50s linear infinite;\n}\n\nimg {\n  height: 70vh;\n  width: 70vh;\n  position: absolute;\n  z-index: -2;\n  right: 20px;\n}\n\n.main-content {\n  width: 80%;\n  display: flex;\n  justify-content: space-around;\n  margin: auto;\n  gap: 10%;\n}\n\nheader {\n  display: flex;\n  height: 50px;\n  justify-content: space-around;\n  align-items: center;\n  color: white;\n  position: relative;\n  z-index: 2;\n}\nheader .logo {\n  cursor: pointer;\n}\nheader ul {\n  width: 40%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  list-style-type: none;\n  cursor: pointer;\n}\nheader ul div {\n  width: 14px;\n  height: 100%;\n  border: 1px solid gainsboro;\n  transform: rotate(90deg);\n}\n\n.score {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n}\n\n.score:first-of-type {\n  font-weight: bolder;\n  margin-bottom: 15px;\n}\n\n.score:not(:last-of-type) {\n  border-bottom: 1px solid black;\n}\n\n.leaderboard-container {\n  position: relative;\n  width: 100%;\n  height: 65vh;\n  background-color: rgba(249, 246, 238, 0.1);\n  color: white;\n  border-radius: 50px;\n  padding: 20px;\n  -webkit-box-shadow: 0 0 121px 10px rgba(104, 31, 222, 0.64);\n  -moz-box-shadow: 0 0 121px 10px rgba(104, 31, 222, 0.64);\n  box-shadow: 0 0 121px 10px rgba(104, 31, 222, 0.64);\n  overflow: scroll;\n}\n.leaderboard-container .leaderboard {\n  width: 70%;\n  margin: auto;\n  font-size: 25px;\n  font-weight: 400;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\n.leaderboard-container .score:nth-child(-n+4):not(:first-of-type) {\n  animation: glow 1s ease-in-out infinite alternate;\n}\n.leaderboard-container .leaderboard-title-container {\n  width: 70%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  margin: auto;\n}\n.leaderboard-container span {\n  width: 20%;\n  overflow: hidden;\n}\n\n.leaderboard-container::-webkit-scrollbar {\n  display: none;\n}\n\n.refresh-btn {\n  /* stylelint-disable */\n  height: fit-content;\n  /* why it showing Invalid value for `height` as it is valid? */\n  /* stylelint-enable */\n  width: 150px;\n  align-self: center;\n  text-align: center;\n  line-height: 30px;\n  color: #fff;\n  font-size: 20px;\n  font-family: sans-serif;\n  box-sizing: border-box;\n  background: linear-gradient(90deg, #5bcedf, #f96161, #fc8f46, #36e494);\n  background-size: 400%;\n  border-radius: 30px;\n}\n\n.refresh-btn:hover {\n  animation: animate 8s linear infinite;\n}\n\n.refresh-btn::before {\n  background: linear-gradient(90deg, #5bcedf, #f96161, #fc8f46, #36e494);\n  background-size: 400px;\n  border-radius: 40px;\n  opacity: 0;\n  transition: 0.5s;\n}\n\n.refresh-btn:hover::before {\n  filter: blur(10px);\n  opacity: 1;\n}\n\n.main-title-text {\n  text-align: center;\n  color: white;\n  animation: glow 1s ease-in-out infinite alternate;\n}\n\n.form-container {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  width: 70%;\n  height: 50vh;\n}\n.form-container h3 {\n  margin: auto;\n}\n\nform {\n  width: 100%;\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n  margin: auto;\n  background-color: rgba(249, 246, 238, 0.1);\n  color: white;\n  border-radius: 50px;\n  padding: 60px 20px;\n  -webkit-box-shadow: 0 0 121px 10px rgba(104, 31, 222, 0.64);\n  -moz-box-shadow: 0 0 121px 10px rgba(104, 31, 222, 0.64);\n  box-shadow: 0 0 121px 10px rgba(104, 31, 222, 0.64);\n  position: relative;\n  z-index: 1;\n}\nform input {\n  height: 30px;\n  padding: 5px 10px;\n  background-color: rgba(104, 31, 222, 0.64);\n  color: whitesmoke;\n  font-size: large;\n  outline: none;\n  border: 0;\n}\nform input::placeholder {\n  font-style: italic;\n}\nform button {\n  width: 50%;\n  align-self: flex-end;\n}\n\n.audio-controls {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n.audio-controls #playPauseBtn {\n  width: 100px;\n  height: 40px;\n  background-color: #8181d2;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  margin: 10px;\n  cursor: pointer;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease-in-out;\n}\n.audio-controls #playPauseBtn:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  transform: translateY(-2px);\n}\n.audio-controls #muteBtn {\n  width: 100px;\n  height: 40px;\n  background-color: #0de8ce;\n  color: black;\n  border: none;\n  border-radius: 5px;\n  margin: 10px;\n  cursor: pointer;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease-in-out;\n}\n.audio-controls #muteBtn:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  transform: translateY(-2px);\n}\n.audio-controls #volumeControl {\n  width: 200px;\n  margin: 10px;\n  appearance: none;\n  background-color: #ddd;\n  height: 5px;\n  border-radius: 5px;\n}\n.audio-controls #volumeControl::-webkit-slider-thumb {\n  appearance: none;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background: rgb(25, 228, 15);\n  background: linear-gradient(90deg, rgb(25, 228, 15) 54%, rgb(247, 1, 1) 100%);\n  cursor: pointer;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease-in-out;\n}\n.audio-controls #volumeControl::-webkit-slider-thumb:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  transform: translateY(-2px);\n}\n\n.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"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","sourcesContent":["@keyframes animate {\r\n  0% {\r\n    background-position: 0%;\r\n  }\r\n\r\n  100% {\r\n    background-position: 400%;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes glow {\r\n  from {\r\n    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;\r\n  }\r\n\r\n  to {\r\n    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;\r\n  }\r\n}\r\n\r\n@keyframes move-background {\r\n  from {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(1000px, 0, 0);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes move-background {\r\n  from {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(1000px, 0, 0);\r\n  }\r\n}\r\n\r\n@-moz-keyframes move-background {\r\n  from {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(1000px, 0, 0);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes move-background {\r\n  from {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(1000px, 0, 0);\r\n  }\r\n}\r\n\r\n.background-container {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n.stars {\r\n  background: black url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png) repeat;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  display: block;\r\n  z-index: -5;\r\n}\r\n\r\n.twinkling {\r\n  width: 10000px;\r\n  height: 100%;\r\n  background: transparent url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png\") repeat;\r\n  background-size: 1000px 1000px;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  z-index: -4;\r\n  -moz-animation: move-background 70s linear infinite;\r\n  -ms-animation: move-background 70s linear infinite;\r\n  -o-animation: move-background 70s linear infinite;\r\n  -webkit-animation: move-background 70s linear infinite;\r\n  animation: move-background 70s linear infinite;\r\n}\r\n\r\n.clouds {\r\n  width: 10000px;\r\n  height: 100%;\r\n  background: transparent url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/clouds_repeat.png\") repeat;\r\n  background-size: 1000px 1000px;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  z-index: 0;\r\n  -moz-animation: move-background 50s linear infinite;\r\n  -ms-animation: move-background 50s linear infinite;\r\n  -o-animation: move-background 50s linear infinite;\r\n  -webkit-animation: move-background 50s linear infinite;\r\n  animation: move-background 50s linear infinite;\r\n}\r\n\r\nimg {\r\n  height: 70vh;\r\n  width: 70vh;\r\n  position: absolute;\r\n  z-index: -2;\r\n  right: 20px;\r\n}\r\n\r\n.main-content {\r\n  width: 80%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  margin: auto;\r\n  gap: 10%;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  height: 50px;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  color: white;\r\n  position: relative;\r\n  z-index: 2;\r\n\r\n  .logo {\r\n    cursor: pointer;\r\n  }\r\n\r\n  ul {\r\n    width: 40%;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    list-style-type: none;\r\n    cursor: pointer;\r\n\r\n    div {\r\n      width: 14px;\r\n      height: 100%;\r\n      border: 1px solid gainsboro;\r\n      transform: rotate(90deg);\r\n    }\r\n  }\r\n}\r\n\r\n.score {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  overflow: hidden;\r\n}\r\n\r\n.score:first-of-type {\r\n  font-weight: bolder;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.score:not(:last-of-type) {\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.leaderboard-container {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 65vh;\r\n  background-color: rgba(249, 246, 238, 10%);\r\n  color: white;\r\n  border-radius: 50px;\r\n  padding: 20px;\r\n  -webkit-box-shadow: 0 0 121px 10px rgba(104, 31, 222, 0.64);\r\n  -moz-box-shadow: 0 0 121px 10px rgba(104, 31, 222, 0.64);\r\n  box-shadow: 0 0 121px 10px rgba(104, 31, 222, 0.64);\r\n  overflow: scroll;\r\n\r\n  .leaderboard {\r\n    width: 70%;\r\n    margin: auto;\r\n    font-size: 25px;\r\n    font-weight: 400;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n  }\r\n\r\n  .score:nth-child(-n+4):not(:first-of-type) {\r\n    animation: glow 1s ease-in-out infinite alternate;\r\n  }\r\n\r\n  .leaderboard-title-container {\r\n    width: 70%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: 20px;\r\n    margin: auto;\r\n  }\r\n\r\n  span {\r\n    width: 20%;\r\n    overflow: hidden;\r\n  }\r\n}\r\n\r\n.leaderboard-container::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.refresh-btn {\r\n  /* stylelint-disable */\r\n  height: fit-content;\r\n  /* why it showing Invalid value for `height` as it is valid? */\r\n  /* stylelint-enable */\r\n  width: 150px;\r\n  align-self: center;\r\n  text-align: center;\r\n  line-height: 30px;\r\n  color: #fff;\r\n  font-size: 20px;\r\n  font-family: sans-serif;\r\n  box-sizing: border-box;\r\n  background: linear-gradient(90deg, #5bcedf, #f96161, #fc8f46, #36e494);\r\n  background-size: 400%;\r\n  border-radius: 30px;\r\n}\r\n\r\n.refresh-btn:hover {\r\n  animation: animate 8s linear infinite;\r\n}\r\n\r\n.refresh-btn::before {\r\n  background: linear-gradient(90deg, #5bcedf, #f96161, #fc8f46, #36e494);\r\n  background-size: 400px;\r\n  border-radius: 40px;\r\n  opacity: 0;\r\n  transition: 0.5s;\r\n}\r\n\r\n.refresh-btn:hover::before {\r\n  filter: blur(10px);\r\n  opacity: 1;\r\n}\r\n\r\n.main-title-text {\r\n  text-align: center;\r\n  color: white;\r\n  animation: glow 1s ease-in-out infinite alternate;\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  color: white;\r\n  width: 70%;\r\n  height: 50vh;\r\n\r\n  h3 {\r\n    margin: auto;\r\n  }\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n  display: flex;\r\n  gap: 10px;\r\n  flex-direction: column;\r\n  margin: auto;\r\n  background-color: rgba(249, 246, 238, 10%);\r\n  color: white;\r\n  border-radius: 50px;\r\n  padding: 60px 20px;\r\n  -webkit-box-shadow: 0 0 121px 10px rgba(104, 31, 222, 0.64);\r\n  -moz-box-shadow: 0 0 121px 10px rgba(104, 31, 222, 0.64);\r\n  box-shadow: 0 0 121px 10px rgba(104, 31, 222, 0.64);\r\n  position: relative;\r\n  z-index: 1;\r\n\r\n  input {\r\n    height: 30px;\r\n    padding: 5px 10px;\r\n    background-color: rgba(104, 31, 222, 0.64);\r\n    color: whitesmoke;\r\n    font-size: large;\r\n    outline: none;\r\n    border: 0;\r\n  }\r\n\r\n  input::placeholder {\r\n    font-style: italic;\r\n  }\r\n\r\n  button {\r\n    width: 50%;\r\n    align-self: flex-end;\r\n  }\r\n}\r\n\r\n.audio-controls {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n\r\n  #playPauseBtn {\r\n    width: 100px;\r\n    height: 40px;\r\n    background-color: #8181d2;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n    margin: 10px;\r\n    cursor: pointer;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\n  #playPauseBtn:hover {\r\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n    transform: translateY(-2px);\r\n  }\r\n\r\n  #muteBtn {\r\n    width: 100px;\r\n    height: 40px;\r\n    background-color: #0de8ce;\r\n    color: black;\r\n    border: none;\r\n    border-radius: 5px;\r\n    margin: 10px;\r\n    cursor: pointer;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\n  #muteBtn:hover {\r\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n    transform: translateY(-2px);\r\n  }\r\n\r\n  #volumeControl {\r\n    width: 200px;\r\n    margin: 10px;\r\n    appearance: none;\r\n    background-color: #ddd;\r\n    height: 5px;\r\n    border-radius: 5px;\r\n  }\r\n\r\n  #volumeControl::-webkit-slider-thumb {\r\n    appearance: none;\r\n    width: 15px;\r\n    height: 15px;\r\n    border-radius: 50%;\r\n    background: rgb(25, 228, 15);\r\n    background: linear-gradient(90deg, rgba(25, 228, 15, 1) 54%, rgba(247, 1, 1, 1) 100%);\r\n    cursor: pointer;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\n  #volumeControl::-webkit-slider-thumb:hover {\r\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n    transform: translateY(-2px);\r\n  }\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/add.js":
/*!********************!*\
  !*** ./src/add.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
// just for saving the id
// const id = 'Tobk4hm6O32zn1RQqpj8';

const getData = async () => {
  const recive = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Tobk4hm6O32zn1RQqpj8/scores/');
  const gettingData = await recive.json();
  return gettingData;
};

const add = async (user, score) => {
  const ready = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Tobk4hm6O32zn1RQqpj8/scores/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ user, score }),

  });
  const scoreData = await ready.json();
  return scoreData;
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.js */ "./src/add.js");


//  for now lets leave the contact
const submitBtn = document.getElementById('submit');
const navLeaderboard = document.getElementById('leaderBoard');
const navAddScore = document.getElementById('addScores');
const boardTitle = document.getElementById('boardTitle');
const addTitle = document.getElementById('addTitle');
const leaderboardContainer = document.querySelector('.leaderboard-container');
const formContainer = document.querySelector('.form-container');

navLeaderboard.addEventListener('click', () => {
  boardTitle.classList.remove('hidden');
  leaderboardContainer.classList.remove('hidden');
  addTitle.classList.add('hidden');
  formContainer.classList.add('hidden');
});

navAddScore.addEventListener('click', () => {
  boardTitle.classList.add('hidden');
  leaderboardContainer.classList.add('hidden');
  addTitle.classList.remove('hidden');
  formContainer.classList.remove('hidden');
});

const disableButton = () => {
  submitBtn.disabled = true;
  submitBtn.innerText = 'Posting...';
};
submitBtn.addEventListener('click', disableButton);
const sendingData = async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const error = document.querySelector('small');
  if (name.length > 20 || score > 1000000) {
    error.innerHTML = 'please enter valid score or name';
    submitBtn.disabled = false;
    submitBtn.innerText = 'Try again';
    setInterval(() => window.location.reload(), 2000);
    return;
  }
  await (0,_add_js__WEBPACK_IMPORTED_MODULE_1__.add)(name, score);
  window.location.reload();
};

submitBtn.addEventListener('click', sendingData);

const refreshBtn = document.querySelector('.refresh-btn');
//  refreshing the whole page

refreshBtn.addEventListener('click', () => {
  window.location.reload();
});

const leaderboard = document.querySelector('.leaderboard');
const displayScores = async () => {
  const waitingData = await (0,_add_js__WEBPACK_IMPORTED_MODULE_1__.getData)();
  const descendingData = waitingData.result
    .filter(
      (a) => !Number.isNaN(Number(a.score)) && a.score <= 1000000000 && a.user.length <= 20,
    )
    .sort((a, b) => Number(b.score) - Number(a.score));

  descendingData.forEach((result) => {
    leaderboard.innerHTML += `
    <div class="score">${result.user.toUpperCase()}  <span>${result.score}</span></div>
    `;
  });
};

displayScores();
const audio = document.getElementById('myAudio');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');
const volumeControl = document.getElementById('volumeControl');

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.loop = true;
    audio.play();
    playPauseBtn.innerHTML = 'Pause';
  } else {
    audio.pause();
    playPauseBtn.innerHTML = 'Play';
  }
});

muteBtn.addEventListener('click', () => {
  if (audio.muted) {
    audio.muted = false;
    muteBtn.innerHTML = 'Mute';
  } else {
    audio.muted = true;
    muteBtn.innerHTML = 'Unmute';
  }
});

volumeControl.addEventListener('input', () => {
  audio.volume = volumeControl.value;
});

})();

/******/ })()
;
//# sourceMappingURL=bundle1a5e69bf0a81852e704c.js.map