import { Config } from 'aws-sdk'

export default function(email, code) {
  return new Promise((resolve, reject) => {
    Config.credentials.refresh(err => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}
