function getSystemInfo() {
  // return uni.getSystemInfo({
  //   success(res){
  //     return res
  //   }
  // });
  // // console.log(JSON.stringify(res.model));
  // // console.log(res.pixelRatio);
  // // console.log(res.windowWidth);
  // // console.log(res.windowHeight);
  // // console.log(res.language);
  // // console.log(res.version);
  // // console.log(res.platform);
}

// 操作提示信息
function showTipsModel(msg = '提示框', callback = function () {
}) {
  uni.showToast({
    title: msg,
    icon: 'none',
    duration: 2000,
  });
  setTimeout(function () {
    callback();
  }, 2000);
}

function showLoading(msg = 'Loading...', mask = true, success = function () {
}, fail = function () {
}, complete = function () {
}) {
  uni.showLoading({
    title: 'Loading...',
    mask: mask,
    success: () => {
      success()
    },
    fail: () => {
      fail()
    },
    complete: () => {
      complete()
    },
  });
}

function hideLoading() {
  uni.hideLoading();
}

export {
  getSystemInfo,
  showTipsModel,
  showLoading,
  hideLoading
}
