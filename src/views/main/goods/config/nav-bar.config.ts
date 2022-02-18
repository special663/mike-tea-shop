import { INavBarConfig } from '@/base-ui/nav-bar/types'

export const navBarConfig: INavBarConfig = {
  border: true,
  fixed: true,
  otherProp: [
    {
      name: 'address',
      slotName: 'left'
    },
    {
      name: 'search',
      slotName: 'right'
    }
  ]
}
