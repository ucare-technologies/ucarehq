// export function formatDate(inputDate: string) {
//   const date = new Date(inputDate)
//   const day = date.getUTCDate()
//   const month = date.toLocaleString('default', { month: 'long' })
//   const year = date.getUTCFullYear()

//   const formattedDate = `${day} ${month} ${year}`
//   return formattedDate
// }

export function formatDate(dateString) {
  const date = new Date(dateString)

  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return `${day} ${monthNames[month]} ${year}`
}
