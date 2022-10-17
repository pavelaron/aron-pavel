export default class FirebaseHandler {
  static init (app) {
    app.$fire.analytics.setAnalyticsCollectionEnabled(true)
  }

  static async getCvUrl (app) {
    const ref = app.$fire.storage.ref('CV - Pável Áron.pdf')
    const cvUrl = await ref.getDownloadURL()

    return cvUrl
  }
}
