import { onMounted, nextTick, onBeforeUnmount } from 'vue'
import { useStore } from '@/store'

interface IOptions {
  gettersPath: string
  commitPath: string
}
export default function (el: string, storePath: IOptions) {
  const Store = useStore()
  let timer: any = null
  const savePosY = () => {
    if (timer) return
    timer = setTimeout(() => {
      const node: any = document.querySelector(el)
      //记录滚动位置
      Store.commit(storePath.commitPath, node.scrollTop)
      timer = null
      clearTimeout(timer)
    }, 100)
  }
  onMounted(() => {
    const contentWrapper: any = document.querySelector(el)
    contentWrapper.addEventListener('scroll', savePosY)
    nextTick(() => {
      contentWrapper.scrollTop = Store.getters[storePath.gettersPath]('Y')
    })
  })
  onBeforeUnmount(() => {
    document.removeEventListener('scroll', savePosY)
  })
}
