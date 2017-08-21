import { Config, CognitoIdentityCredentials } from 'aws-sdk'

import { CognitoUserPool } from 'amazon-cognito-identity-js'

let appConfig
let userPool

export const set = config => {
  appConfig = config

  Config.region = appConfig.region
  Config.credentials = new CognitoIdentityCredentials({
    IdentityPoolId: appConfig.IdentityPoolId
  })

  userPool = new CognitoUserPool({
    UserPoolId: appConfig.UserPoolId,
    ClientId: appConfig.ClientId
  })
}

export const get = () => {
  return appConfig
}

export const getUserPool = () => {
  return userPool
}

export const getUser = () => {
  return userPool.getCurrentUser()
}
