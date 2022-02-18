export function getRoute(newValue: any) {
  if (
    newValue === 'Home' ||
    newValue === 'Goods' ||
    newValue === 'Moments' ||
    newValue === 'Mine'
  ) {
    return true
  } else {
    return false
  }
}
