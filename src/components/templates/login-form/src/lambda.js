import AWS from 'aws-sdk'

export default {
  login (payload) {
    const lambdaConfig = {
      apiVersion: '2015-03-31'
    }

    var initializeLoginPage = function () {
      AWS.config.region = process.env.STAYWOKE_AWS_REGION
      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: process.env.STAYWOKE_AWS_UNAUTH_IDENTITY_POOL_ID
      })
      AWS.config.credentials.params.IdentityId = null
      AWS.config.credentials.params.Logins = null
    }

    initializeLoginPage()

    const lambda = new AWS.Lambda(lambdaConfig)

    return new Promise(function (resolve, reject) {
      lambda.invoke({
        FunctionName: 'login',
        Payload: JSON.stringify(payload)
      }, function (err, data) {
        if (err) {
          return reject(new Error('Error Detected During Login'))
        }

        var user = JSON.parse(data.Payload)

        if (user.errorMessage) {
          // Mask errors that indicate username is valid
          return (user.errorMessage.toLowerCase() === 'invalid user id' || user.errorMessage.toLowerCase() === 'incorrect password')
            ? reject(new Error('Incorrect Username or Password'))
            : reject(new Error(user.errorMessage))
        }

        var sts = new AWS.STS()
        AWS.config.credentials = sts.credentialsFrom(user.rawCredentials)

        return resolve(user)
      })
    })
  }
}
