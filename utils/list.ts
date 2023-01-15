export const convertArrayToList = (arr: string[]) => {
  if (arr.length == 1) return arr[0]
  if (arr.length == 2) return `${arr[0]} & ${arr[1]}`

  const lastEl = `& ${arr[arr.length-1]}`

  const preppedArr = arr.slice(0, -1)
  preppedArr.push(lastEl)

  const list = preppedArr.join(", ")
  return list
}
