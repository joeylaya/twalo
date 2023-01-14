export const convertToSentenceCase = (str: string) => {
  if (!str || str.length < 0) return ""

  const words = str.split(" ")
  const convertedWords = []

  for (const word of words) {
    const chars = word.split("")
    const firstChar = chars[0].toUpperCase()
    const endingChars = chars.slice(1)

    convertedWords.push(firstChar + endingChars.join("")) 
  }

  return convertedWords.join(" ")
}
