import AWS from 'aws-sdk'

export default {
  login (payload) {
    const lambdaConfig = {
      apiVersion: '2015-03-31'      
    }

    var initializeLoginPage = function() {
      window.AWS.config.region = 'us-east-1';
      window.AWS.config.credentials = new window.AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'STAYWOKE_UNAUTH_IDENTITY_POOL_ID',
      });
      window.AWS.config.credentials.params.IdentityId = null;
      window.AWS.config.credentials.params.Logins = null;
    };

    initializeLoginPage();

    const lambda = new window.AWS.Lambda(lambdaConfig)

    return new Promise(function(resolve, reject){
      lambda.invoke({
        FunctionName: 'login',
        Payload: JSON.stringify(payload)
      }, function (err, data) {
        if (err) {
          return reject(err);
        } 

        var user = JSON.parse(data.Payload);
        var sts = new window.AWS.STS();
        window.AWS.config.credentials = sts.credentialsFrom(user.rawCredentials);
         //// TO DO: user auth manager to save user to storafe --- window.saveToStorage('user', JSON.stringify(user));
        return resolve(null);
      });
    });
  }
}
