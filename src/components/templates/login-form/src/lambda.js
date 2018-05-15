import AWS from 'aws-sdk'

export default {
  login (payload) {
    const config = {
      apiVersion: '2015-03-31'
      // @TODO: Add required AWS Config Options
    }

    const lambda = new AWS.Lambda(config)

    return lambda.invoke({
      FunctionName: 'login',
      Payload: JSON.stringify(payload)
    }, function (err, data) {
      if (err) {
        return Promise.reject(err)
      } else {
        var output = JSON.parse(data.Payload)
        return Promise.resolve(output)
      }
    })
  }
}
