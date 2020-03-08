const STORAGE_KEY = "test";
export default {
  setItem(key, value, module) {
    let val = this.getStorage();
    if (module) {
      let val = this.getStorage()(module);
      if (val) {
        val[key] = value;
        this.setItem(module, val);
      }
    } else {
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },

  getItem(key, module) {
    if (module) {
      let val = this.getStorage()(module);
      if (val) {
        return val[key];
      }
    }
    return this.getStorage()[key];
  },

  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "{}");
  },

  clear(key,module) {
      let val = this.getStorage()
      if(module){
          delete val[module][key]
      }else{
          delete val[key]
      }
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
};
