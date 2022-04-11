import { DEFAULT_COLOR, ACTIVE_COLOR } from '@/constants/global-types'

export default function verdictColor(payload: any) {
  const { sugar, temp } = payload
  if (Object.keys(sugar).length + Object.keys(temp).length >= 4)
    return ACTIVE_COLOR
  else return DEFAULT_COLOR
}
