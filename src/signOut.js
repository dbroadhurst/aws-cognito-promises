import { getUser } from './config'

export default function() {
  const cognitoUser = getUser()

  if (cognitoUser) {
    cognitoUser.signOut()
    Promise.resolve()
  } else {
    throw new Error('no cognitiveUser value')
  }
}
