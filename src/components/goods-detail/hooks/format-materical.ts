export default function formatMaterical(param: any) {
  param.forEach((item: any, index: number) => {
    if (item.name === '常规') param.splice(index, 1)
  })
  return param
}
