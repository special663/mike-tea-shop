interface IMethodsType {
  dispatch?: any
  commit?: any
}
interface IOptions {
  code: string | number
  mutations?: string
  actions?: string
  result?: any
}

export default function emitMine(options: IOptions, methods: IMethodsType) {
  const { code, mutations, result } = options
  let effect: any
  //首字母大写
  if (mutations) {
    effect = mutations?.split('')
    effect[0] = effect[0].toUpperCase()
    effect = effect.join('')
  }
  const type = `setAddress${effect}`
  const { dispatch, commit } = methods
  const emit = dispatch ?? commit
  switch (code) {
    case 200:
      emit(type, result)
      return true
    default:
      return false
  }
}
