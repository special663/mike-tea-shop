//对选中的元素进行筛选，得到目标元素DOM节点中的"data-content-after"属性
export default function filterElement(id: number | string, els: Element[]) {
  const [element] = els.filter((el) => {
    return el.getAttribute('name') === `select-${id}`
  })
  const cache = element.querySelector('.count-show')
  if (cache !== null && cache !== undefined) return cache
  else return element
}
