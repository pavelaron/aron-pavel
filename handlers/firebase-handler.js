export default class FirebaseHandler {
  constructor (app) {
    app.$fire.analytics.setAnalyticsCollectionEnabled(true)
  }

  logEvent (app, event) {
    app.$fire.analytics.logEvent(event)
  }
}
