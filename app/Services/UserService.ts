import axios from 'axios'

class UserService {
  public async fetchUserData(token: string) {
    try {
      const response = await axios.get('http://localhost:8080/api/users', {
        headers: {
          Authorization: token,
        },
      })
      return response.data
    } catch (error) {
      throw new Error('Error fetching user data: ' + error.message)
    }
  }
}

export default new UserService()
