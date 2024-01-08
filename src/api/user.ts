import http from "../utils/httpRequest"

export interface UserList {
  page: number
  size: number
  sort: string
}

export const getUserListApi = (data: UserList) => http.get("api/users", { params: data })
