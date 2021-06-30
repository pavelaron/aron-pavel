import axios from 'axios'

export default class MailHandler {
  static async sendMail (data, id) {
    const { name, email, subject, message } = data

    if (subject) {
      return {
        data: {
          message: 'Message sent successfully!'
        }
      }
    }

    if (!name || !email || !message) {
      throw new Error('incomplete form')
    }

    const url = `https://script.google.com/macros/s/${id}/exec`
    const formData = new FormData()

    formData.append('name', name)
    formData.append('email', email)
    formData.append('message', message)

    const result = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

    return result
  }
}
