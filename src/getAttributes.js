export default function(session) {
  return new Promise((resolve, reject) => {
    session.getUserAttributes((results, err) => {
      if (err) {
        reject(err)
      } else {
        resolve(results)
      }
    })
  })
}
