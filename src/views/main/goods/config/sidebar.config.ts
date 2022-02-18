import { ISidebarItemConfig } from '@/base-ui/sidebar/types'
import Storage from '@/utils/cache'

export const sidebarItemConfig: ISidebarItemConfig[] =
  Storage.getStorage('goodsList')
