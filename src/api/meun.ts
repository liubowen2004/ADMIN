import http from '../utils/httpRequest'

export const getMeunListApi=()=>http.get('api/menus/build')