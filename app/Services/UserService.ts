import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()
class UserService {
  public async fetchUserData(token: string, userId: string) {
    const baseUrl = process.env.MS_SECURITY
    const url = `${baseUrl}/api/public/users/${userId}`
    try {
      const response = await axios.get(url, {
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
