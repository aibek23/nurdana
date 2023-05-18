import {useState, useCallback, useEffect} from 'react'
const storageName = 'user'
export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [ready, setReady] = useState(false)
  const [userEmail, setUserEmail] = useState(null)
  const login = useCallback((jwtToken, useremail, username, checkbox) => {
    setToken(jwtToken)
    setUserEmail(useremail)
    checkbox&&localStorage.setItem(storageName, JSON.stringify({
       token: jwtToken, username:username, userEmail:useremail
    }))
  }, [])
  const logout = useCallback(() => {
    setToken(null)
     setUserEmail(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))

    if (data && data.token) {
      login(data.token, data.userEmail)
    }
    setReady(true)
  }, [login])
  return { login, logout, token, ready , userEmail }
}
