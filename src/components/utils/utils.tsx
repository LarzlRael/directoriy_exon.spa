export const capitalizeFirstLetter = (word: string = ''): string => {
  if (word.length === 0 || word === null || word === undefined) return ''
  return word.charAt(0).toUpperCase() + word.slice(1)
}
export const validateStatus = (status: any) => {
  const validateStatusCodes = [200, 201, 202, 203, 204, 205, 206, 207, 208];
  return validateStatusCodes.includes(status);
}
