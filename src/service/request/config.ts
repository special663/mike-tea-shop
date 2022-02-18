//根据运行环境输出不同的值
//第一种手动修改不推荐
//第二种根据process.env.NODE_ENV进行判断
let BASE_URL = ''
const TIME_OUT = 10000
if (process.env.NODE_ENV === 'development') {
  // BASE_URL = '/api'
  BASE_URL = 'http://localhost:8000'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'test') {
  BASE_URL = '/api'
}

export { BASE_URL, TIME_OUT }

//第三种根据VUE CLI支持的方式 .env文件写环境变量
