export const convertDate = (date: string) => {
  if (!date) return ""
  
  const nums = date.split("-")
  const year = nums[0]
  const month = nums[1]
  const day = nums[2].slice(0,2)

  const months: Record<string, string> = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
  }

  return `${months[month]} ${day}, ${year}`
}
