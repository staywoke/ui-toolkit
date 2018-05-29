import { AMZ } from '../../../../aws'
import { tempStore } from '../../../../store/modules/store'
export default {
  login (payload) {
    AMZ.initLogin()
    return AMZ.callLambda('login', payload)
    .then(function(user){
        AMZ.setCredentials(user.rawCredentials)
        tempStore.put('user', user)
        //// TODO: this needs to be placed within the main load or init function, so that it runs on refresh, app open 

        setInterval(AMZ.refreshCredentials, 300000);
        return user
    })
  }
}
