export const setUser = (data) => {
  sessionStorage.setItem('JS-USER', JSON.stringify(data))
}
export const getUser = () => {
  return JSON.parse(sessionStorage.getItem('JS-USER'))
}
export const removeUser = () => {
  sessionStorage.removeItem('JS-USER')
}