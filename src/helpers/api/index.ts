/* 
This File is for reusable API calls such as:
    - GetAll, complexe queries ...etc

PS: Keep it clean, only API calls
*/

export const getToken = (): string | null => {
  const token = localStorage.getItem('token')

  return token
}

// eslint-disable-next-line
export const removeToken = () => localStorage.removeItem('token')

// eslint-disable-next-line
export const setToken = (token: string) => Promise.resolve(localStorage.setItem('token', token))
