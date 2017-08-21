export default function(session) {
  return new Promise((resolve, reject) => {
    session.getDevice({
      onSuccess: function(result) {
        resolve(result)
      },
      onFailure: function(err) {
        reject(err)
      }
    })
  })
}
