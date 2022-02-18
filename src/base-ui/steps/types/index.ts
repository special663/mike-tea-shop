export interface IStepsConfig {
  stepList?: IStepConfig[]
  active?: number | string
  direction?: string
}

export interface IStepConfig {
  id?: string | number
  name?: string
  info: string
}
