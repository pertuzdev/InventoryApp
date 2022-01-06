export const calculateTotalInArr = ({list = [], mapCallback = null}) => {
  if (mapCallback) {
    const arr = list.map(mapCallback);
    const reducer = (prev, curr) => prev + curr;

    return arr.reduce(reducer);
  } else {
    throw 'You need to specific mapCallback attribute!';
  }
};
