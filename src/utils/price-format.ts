export const filterPrice = (raw: number) => {
  raw = Number(raw)
  return `￥${raw.toFixed(2)}`
}

export const filterPicture = (raw: string) => {
  return require(`@/assets/img/png/${raw}.png`)
}
