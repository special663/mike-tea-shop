export default interface IMineListConfig {
  title: string
  options: IOptionsConifg[]
}
//声明图标
export interface IOptionsConifg {
  name: string
  route: string
  color: string
  size?: string | number
  tip: string
}
