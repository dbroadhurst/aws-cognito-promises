import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'

import { getUserPool } from './config'

export default function(username) {
  const userData = {
    Username: username,
    Pool: getUserPool()
  }

  const cognitoUser = new CognitoUser(userData)

  return new Promise((resolve, reject) => {
    cognitoUser.forgotPassword({
      onSuccess: function(result) {
        resolve(result)
      },
      onFailure: function(err) {
        reject(err)
      }
    })
  })
}
