export async function postUserLogin(loginInfo:any) {
  const url = "http://127.0.0.1:5000/user-auth"
  const method = 'POST'
  const headers = {
    "Content-type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:5173",
    "Access-Control-Allow-Credentials": "http://localhost:5174"
  }
  const credentials = 'include'
  console.log('%c loginInfo in postUserLogin', 'color:red;', loginInfo)

  const response = await fetch(url, {method,headers,credentials,
    body: JSON.stringify(loginInfo)
  })
  // Always have to return the response, and we always have to jsonify it
  const data = await response.json()

  const stringifyData = JSON.stringify(data)
  sessionStorage.setItem('token', stringifyData)
  // We need to add backend handling for user authentication
  return stringifyData
}