import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8989';
//const USER_API_BASE_URL = 'http://localhost:9999/users에서 바꿧음';

class ApiService {
  fetchUsers() {
    return axios.get(USER_API_BASE_URL);
  }
  loginUser(user) {
    return axios.post(USER_API_BASE_URL + '/oauth/jwt/common', user);
  }
  fetchUserByID(userID) {
    console.log('유저찡 = ', userID);
    return axios.get(USER_API_BASE_URL + '/' + userID);
  }

  deleteUser(userID) {
    return axios.delete(USER_API_BASE_URL + '/' + userID);
  }

  addUser(user) {
    return axios.post(USER_API_BASE_URL + '/join', user);
  }

  editUser(user) {
    return axios.put(USER_API_BASE_URL + '/' + user.id, user);
  }
}

export default new ApiService();
