export const capitalizeFirstLetter = (word: string = ''): string => {
  if (word.length === 0 || word === null || word === undefined) return ''
  return word.charAt(0).toUpperCase() + word.slice(1)
}
