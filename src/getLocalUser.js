import { getUser } from './config'

export default function() {
  const cognitoUser = getUser()

  if (cognitoUser) {
    return new Promise((resolve, reject) => {
      cognitoUser.getSession(function(err, result) {
        if (err) {
          reject(err)
        } else {
          resolve(cognitoUser)
        }
      })
    })
  } else {
    throw new Error('no cognitiveUser value')
  }
}
