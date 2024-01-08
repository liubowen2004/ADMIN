import http from "../utils/httpRequest"
export interface IDictList {
  page: number
  size: number
  sort: string
}

export const getDictListApi = (params:IDictList) => http.get("/api/dict", { params })
