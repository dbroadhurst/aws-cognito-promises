import { CognitoUser } from 'amazon-cognito-identity-js'

import { getUserPool } from './config'

export default function(username, code, password) {
  const userData = {
    Username: username,
    Pool: getUserPool()
  }

  const cognitoUser = new CognitoUser(userData)

  return new Promise((resolve, reject) => {
    cognitoUser.confirmPassword(code, password, {
      onSuccess: function(result) {
        resolve(result)
      },
      onFailure: function(err) {
        reject(err)
      }
    })
  })
}
