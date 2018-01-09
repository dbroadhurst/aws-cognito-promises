// import { CognitoUser } from 'amazon-cognito-identity-js'

import { getCurrentUserSession } from './config'

export default function(username, newpassword, data = null) {
  // const userData = {
  //   Username: username,
  //   Pool: getUserPool()
  // }

  // const cognitoUser = new CognitoUser(userData)
  const cognitoUser = getCurrentUserSession()

  return new Promise((resolve, reject) => {
    cognitoUser.completeNewPasswordChallenge(newpassword, data, {
      onSuccess: function(result) {
        resolve(result)
      },
      onFailure: function(err) {
        reject(err)
      }
    })
  })
}
