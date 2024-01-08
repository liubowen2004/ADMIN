import http from '../utils/httpRequest'
//获取验证码
export const getCodeApi=()=>http.get('auth/code')
//数据所需的类型
export interface RuleForm {
  username: string
  password: string
  code: string
  uuid: string
  url?:string
}

export const getLoginApi=(data:RuleForm)=>http.post('auth/login',data)