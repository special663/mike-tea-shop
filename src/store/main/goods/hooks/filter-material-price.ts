//过滤掉数组参数，获取到价格信息
export default function filterMaterialPrice(payloads: any[]) {
  const cache: any = {}
  payloads.forEach((payload) => {
    cache[payload?.name] = payload.oldPrice
  })
  return cache
}
