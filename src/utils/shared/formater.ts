export const FormatTextReaction = (reactions: number, text: string) =>
  `${reactions} ${text}${reactions > 1 || reactions === 0 ? 's' : ''}`

export const FormatPostCreationDate = (
  strDate: string,
  currentDate = new Date(),
) => {
  const date1 = new Date(strDate)

  const { minutes, hours, days, weeks, months } = GetDifferenceBetweenDates(
    date1,
    currentDate,
  )

  if (minutes < 1) {
    return 'Justo Ahora'
  } else if (minutes < 60) {
    return `Hace ${FormatTextReaction(minutes, 'minuto')}`
  } else if (hours < 24) {
    return `Hace ${FormatTextReaction(hours, 'hora')}`
  } else if (weeks === 0) {
    return `Hace ${FormatTextReaction(days, 'dia')}`
  } else if (months === 0) {
    return `Hace ${FormatTextReaction(weeks, 'semana')}`
  } else {
    const day = date1.getUTCDate()
    const month = date1.getUTCMonth()
    return `Publicado el ${day < 10 ? '0' + day : day}/${
      month + 1 < 10 ? '0' + (month + 1) : month + 1
    }/${date1.getFullYear()}`
  }
}

export const GetDifferenceBetweenDates = (date1: Date, date2: Date) => {
  // @ts-ignore
  const diffTime = Math.abs(date2 - date1)
  const minutes = Math.round(diffTime / (1000 * 60))
  const hours = Math.round(diffTime / (1000 * 60 * 60))
  const days = Math.round(diffTime / (1000 * 60 * 60 * 24))
  const weeks = Math.round(diffTime / 604800000)
  const months = MonthDifference(date1, date2)

  return { minutes, hours, days, weeks, months }
}

export const MonthDifference = (date1: Date, date2: Date) => {
  let months
  months = (date2.getUTCFullYear() - date1.getUTCFullYear()) * 12
  months -= date1.getUTCMonth()
  months += date2.getUTCMonth()
  return months <= 0 ? 0 : months
}
