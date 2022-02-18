export const filterAttribute = (raws: any, attr: string[], cache: any) => {
  if (!attr.length) return cache
  for (const raw of raws) {
    if (raw.title === attr[0]) {
      cache.push(raw)
      attr.shift()
      filterAttribute(raws, attr, cache)
    }
  }
}
