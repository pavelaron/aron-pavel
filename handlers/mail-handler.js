import axios from 'axios'

export default class MailHandler {
  static async sendMail (data, id) {
    const { name, email, subject, message } = data

    if (subject.value) {
      await new Promise(resolve => setTimeout(resolve, 3000))

      return {
        data: {
          message: 'Message sent successfully!'
        }
      }
    }

    if (!name.value || !email.value || !message.value) {
      throw new Error('incomplete form')
    }

    const url = `https://script.google.com/macros/s/${id}/exec`
    const result = await axios.post(url, new FormData(data), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

    return result
  }
}
