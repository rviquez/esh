import Repository from './Repository'

const resource = '/ExternalSystem/GetAll'
export default {
  getLogin (payload) {
    return Repository.post(`${resource}`, payload)
  }
}
