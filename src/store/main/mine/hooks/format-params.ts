//如果带有params参数，就进行格式化url
export default function formatParams(url: string, params: string) {
  const start = url.startsWith('/')
  const end = url.endsWith('/')
  if (start && end) return url + params
  else if (start && !end) return `${url}/${params}`
  else if (!start && end) return `/${url}${params}`
  else return `/${url}/${params}`
}
