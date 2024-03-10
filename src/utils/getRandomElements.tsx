function getRandomElements(arr: any[], count: number) {
  let tempArr = [...arr];
  let result = [];
  for (let i = 0; i < count; i++) {
    if (tempArr.length === 0) break;
    const randomIndex = Math.floor(Math.random() * tempArr.length);
    result.push(tempArr[randomIndex]);
    tempArr.splice(randomIndex, 1);
  }
  return result;
}

export default getRandomElements;
