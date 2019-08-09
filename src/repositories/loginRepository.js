import Repository from './Repository'

const resource = '/Account/SignIn'

export default {
  postLogin (payload) {
    return Repository.post(`${resource}`, { 'Username': 'sa', 'Password': 'eva27rip' })
  }
}
