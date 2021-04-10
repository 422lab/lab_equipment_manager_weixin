// app.js

App({
  onLaunch() {
    const updateManager = wx.getUpdateManager();

    updateManager.onCheckForUpdate(function (res) {
      console.log('hasUpdate:', res.hasUpdate);
    });

    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            updateManager.applyUpdate();
          }
        }
      });
    });

    wx.login({
      success(res) {
        getApp().globalData.userCode = res.code;
      }
    });
  },

  globalData: {
    reqCode: {
      HTTP_REQ_CODE_APP_GET_INFO    : 110,  // 微信端获取用户信息
      HTTP_REQ_CODE_APP_SET_TIME    : 111,  // 微信端设定预约时间
      HTTP_REQ_CODE_APP_SET_CANCEL  : 112,  // 微信端取消预约时间
      HTTP_REQ_CODE_APP_SET_ONLINE  : 113,  // 微信端请求允许上机
      HTTP_REQ_CODE_APP_SET_OFFLINE : 114,  // 微信端请求强制下机
      HTTP_REQ_CODE_APP_BIND_USER   : 115,  // 微信端请求绑定用户
      HTTP_REQ_CODE_APP_UNBIND_USER : 116,  // 微信端请求解绑用户
      HTTP_REQ_CODE_APP_UPDATE_PSWD : 117   // 微信端请求修改密码
    },
    userCode: null,
    serverUrl: 'https://zyiot.top/lem/'
  }
});