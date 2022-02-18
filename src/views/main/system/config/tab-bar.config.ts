import { ITabBar, ITabBarItem } from '@/components/tab-bar/types'

export const tabBarItemConfig: ITabBarItem[] = [
  {
    name: 'home',
    icon: 'home-o',
    to: '/home',
    replace: true,
    message: '首页'
  },
  {
    name: 'goods',
    icon: 'bag-o',
    to: '/goods',
    replace: true,
    message: '点餐'
  },
  {
    name: 'moments',
    icon: 'friends-o',
    to: '/moments',
    replace: true,
    message: '动态'
  },
  {
    name: 'mine',
    icon: 'contact',
    to: '/mine',
    replace: true,
    message: '我的'
  }
]

export const tabBarConfig: ITabBar = {
  route: true
}
