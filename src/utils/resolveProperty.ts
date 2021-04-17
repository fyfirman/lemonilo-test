const resolve = (path: any, obj: object) => {
  return path.split('.').reduce((prev:any, curr:any) => {
    return prev ? prev[curr] : null;
  }, obj);
};

export default resolve;
