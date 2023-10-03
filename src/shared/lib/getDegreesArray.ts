export const getDegreesArray = (num: number) => {
  return [...Array(num)].map((_, index) => 30 + (360 / num) * index)
}
