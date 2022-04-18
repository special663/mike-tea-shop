import { ITabsConfig, ITabConfig } from '@/base-ui/tab/types'

const titleStyle = 'color: rgba(0,122,83); font-size: 1.1em; font-weight: 800;'

export const tabsConfig: ITabsConfig = {
  // 'title-active-color': 'rgba(82,165,138)'
  sticky: true,
  'offset-top': '46.5px'
}

export const tabConfig: ITabConfig[] = [
  {
    title: '当前订单',
    name: 'cur',
    'title-style': titleStyle
  },
  {
    title: '历史订单',
    name: 'pre',
    'title-style': titleStyle
  }
]
