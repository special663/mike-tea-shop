import { ICouponCellConfig } from '../types'

export default function setupParams(raw: ICouponCellConfig) {
  switch (raw.description) {
    case '元':
      raw.discountDesc = raw.discount + raw.description
      break
    case '折':
      raw.discountDesc = Number(raw.discount) * 10 + raw.description
      break
  }
  raw.express = `${raw.createAt} - ${raw.endAt}`
  return raw
}
