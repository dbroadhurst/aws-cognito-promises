import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'

import { getUserPool } from './config'

export default function(username, password) {
  const authenticationData = {
    Username: username,
    Password: password
  }
  const authenticationDetails = new AuthenticationDetails(authenticationData)

  const userData = {
    Username: username,
    Pool: getUserPool()
  }

  const cognitoUser = new CognitoUser(userData)

  return new Promise((resolve, reject) => {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function(result) {
        resolve(result)
      },
      onFailure: function(err) {
        reject(err)
      }
    })
  })
}
