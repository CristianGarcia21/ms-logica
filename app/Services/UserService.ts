import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()
class UserService {
  public async fetchUserData( userId: string) {
    const baseUrl = process.env.MS_SECURITY
    const url = `${baseUrl}/api/public/users/${userId}`
    try {
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      throw new Error('Error fetching user data: ' + error.message)
    }
  }
}

export default new UserService()
