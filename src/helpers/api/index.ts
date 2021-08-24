/* 
This File is for reusable API calls such as:
    - GetAll, complexe queries ...etc

PS: Keep it clean, only API calls
*/

export const getToken = (): string | null => {
<<<<<<< HEAD
  const token = localStorage.getItem('token')
=======
 const token = localStorage.getItem('token')
>>>>>>> 1a05ac864fd6def133a9848daf86e8d848d7a005

  return token
}

// eslint-disable-next-line
export const removeToken = () => localStorage.removeItem('token')

// eslint-disable-next-line
export const setToken = (token: string) => Promise.resolve(localStorage.setItem('token', token))
