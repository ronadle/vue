((doc, win) => {
  const docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window
      ? 'orientationchange'
      : 'resize',
    recalc = () => {
      let clientWidth = docEl.clientWidth;
      if (!clientWidth) 
        return;
      if (clientWidth >= 640) {
        docEl.style.fontSize = '100px';
      } else {
        docEl.style.fontSize = docEl.clientWidth / 7.5 + 'px';
      }
    };
  if (!doc.addEventListener) 
    return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
  //当dom加载完成时，或者 屏幕垂直、水平方向有改变进行html的根元素计算
})(document, window);