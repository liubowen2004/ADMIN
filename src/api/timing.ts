import http from '../utils/httpRequest'

export const getTimingListApi = (params:any) => http.get(`/api/jobs?page=${params.page}&size=${params.size}&sort=id%2Cdesc`)