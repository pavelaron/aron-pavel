export default class FirebaseHandler {
  constructor (app) {
    app.$fire.analytics.setAnalyticsCollectionEnabled(true)
  }

  async getCvUrl (app) {
    const ref = app.$fire.storage.ref('CV - Pável Áron.pdf')
    const cvUrl = await ref.getDownloadURL()

    return cvUrl
  }
}
