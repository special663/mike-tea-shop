import { IPopupConfig } from '@/base-ui/popup/types'

export const popupConfig: IPopupConfig = {
  position: 'bottom',
  style: {
    height: 'auto',
    width: '100%',
    bottom: '50px',
    'min-height': '125px',
    'max-height': '500px'
  },
  'lock-scroll': false,
  round: true
}
