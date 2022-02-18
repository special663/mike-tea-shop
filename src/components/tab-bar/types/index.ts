export interface ITabBarItem {
  name: number | string
  icon: string
  url?: string
  to: string | any
  replace: boolean
  dot?: boolean
  message: string
}

export interface ITabBar {
  'active-color'?: string
  'inactive-color'?: string
  route?: boolean
}

export interface ITabBarConfig {
  tabBar: ITabBar
  tabBarItem: ITabBarItem
}
