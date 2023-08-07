export function formatDate(inputDate: string) {
  const date = new Date(inputDate)
  const day = date.getUTCDate()
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getUTCFullYear()

  const formattedDate = `${day} ${month} ${year}`
  return formattedDate
}
