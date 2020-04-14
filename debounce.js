function debounce(fn, wait, immediate) {
  let timer;
  return function () {
    clearTimeout(timer);
    let _this = this;
    let arg = arguments;
    if (immediate) {
      let hasTimer = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (hasTimer) {
        fn.apply(_this, arg);
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(_this, arg);
      }, wait);
    }
  };
}

export default debounce
