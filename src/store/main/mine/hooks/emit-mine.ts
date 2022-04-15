interface IMethodsType {
  dispatch?: any
  commit?: any
}
interface IOptions {
  code: string | number
  mutations?: string
  actions?: string
  result?: any
  method?: string
}

export default function emitMine(options: IOptions, methods: IMethodsType) {
  const { code, mutations, result, method } = options
  let effect: any
  const means = method ?? 'get'
  //首字母大写
  if (mutations) {
    effect = mutations?.split('')
    effect[0] = effect[0].toUpperCase()
    effect = effect.join('')
  }
  const { dispatch, commit } = methods
  const emit = dispatch ?? commit
  const type = commit ? `setAddress${effect}` : `${means}AddressList`
  switch (code) {
    case 200:
      emit(type, result)
      return true
    default:
      return false
  }
}
