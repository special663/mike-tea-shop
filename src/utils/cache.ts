enum Methods {
  session,
  local
}
class storage {
  //设置 默认本地存储
  setStorage(key: string, value: any, methods: Methods = Methods.local) {
    switch (methods) {
      case Methods.local:
        localStorage.setItem(key, JSON.stringify(value))
        break
      case Methods.session:
        sessionStorage.setItem(key, JSON.stringify(value))
        break
    }
  }
  //获取
  getStorage(key: string, methods: Methods = Methods.local) {
    let result = undefined
    switch (methods) {
      case Methods.local:
        result = localStorage.getItem(key)
        break
      case Methods.session:
        result = sessionStorage.getItem(key)
        break
    }
    if (result) {
      result = JSON.parse(result)
    }
    return result
  }
  //删除
  removeStorage(key: string, methods: Methods = Methods.local) {
    switch (methods) {
      case Methods.local:
        localStorage.removeItem(key)
        break
      case Methods.session:
        sessionStorage.removeItem(key)
        break
    }
  }
  //清空
  clearStorage(methods: Methods) {
    switch (methods) {
      case Methods.local:
        localStorage.clear()
        break
      case Methods.session:
        sessionStorage.clear()
        break
    }
  }
}

export default new storage()
