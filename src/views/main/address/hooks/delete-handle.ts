import Storage from '@/utils/cache'
import { Toast } from 'vant'
const uid = Storage.getStorage('uid')

export default function deleteHandle(
  Store: any,
  Router: any,
  id: number | string
) {
  if (!uid) {
    Toast('操作失败')
    return false
  }
  console.log('蒸饭机器人')
}
