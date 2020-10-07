export const difference = (arrA, arrB) => {
    return arrA.filter(function(obj) {
      return !arrB.some(function(obj2) {
          return obj.id === obj2.id;
      });
  });
  }