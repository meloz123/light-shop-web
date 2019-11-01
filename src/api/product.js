import request from '@/utils/request'

export function getProductsList() {
  return request({
    url: '/api-web/product/getProductsList',
    method: 'get'
  })
}
