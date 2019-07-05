/**
 * 表单提交验证
 * @param fields
 * @returns {boolean}
 */
function isValid(fields) {
  let flag = true;
  if (typeof fields === 'object' && fields.length > 0) {
    fields.filter((item, index) => {
      if (item.value === '' && item.type === 'input') {
        this.showTipsModel(item.label);
        flag = false;
      }
      else if (Array.isArray(item.value) && item.type === 'password') {
        flag = item.value[0] === item.value[1] ? true : false;
        flag ? '' : this.showTipsModel(item.label);
      }
      else if (item.reg) {
        flag = item.reg.test(item.value) ? true : false;
        flag ? '' : this.showTipsModel(item.regLabel)
      }
    });
  }
  return flag;
}


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
function showTipsModel(msg = '提示框', icon = 'none', callback = function () {
}) {
  uni.showToast({
    title: msg,
    icon: icon,
    duration: 2000,
  });
  setTimeout(function () {
    callback();
  }, 2000);
}

/**
 *
 * @param msg
 * @param mask
 * @param success
 * @param fail
 * @param complete
 */
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
  isValid,
  getSystemInfo,
  showTipsModel,
  showLoading,
  hideLoading
}
