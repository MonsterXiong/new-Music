import axios from '@/utils/axios'

export function getBanner(type = 2) {
  return axios.get(`/banner?type=${type}`)
}
