export function filterTaste(payload: string) {
  switch (payload) {
    case 'material':
      return '配料'
    case 'sugar':
      return '糖度'
    case 'temp':
      return '温度'
    default:
      return ''
  }
}
