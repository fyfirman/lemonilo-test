const arrayToMatrix = (array: Array<any>, column: number) => {
  const row : any[] = [];
  for (let i = 0; i < Math.ceil(array.length / column); i++) {
    row.push([]);
  }
  let i = 0;
  array.forEach((value, index) => {
    if (index % column === 0) {
      i += 1;
    }
    row[i - 1].push(value);
  });
  return row;
};

export default arrayToMatrix;
