export function getRoute(newValue: any) {
  if (
    newValue === 'Home' ||
    newValue === 'Goods' ||
    newValue === 'Order' ||
    newValue === 'Mine'
  ) {
    return true
  } else {
    return false
  }
}
