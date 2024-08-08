//input -> computeAmount().lacs(15).crore(5).lacs(20).thousand(45).crore(7).value();
//output ->   123545000

const computeAmount = () => {
  let totalAmount = 0;

  const lacs = (value) => {
    totalAmount = totalAmount + value * 100000;
    return obj;
  };

  const crore = (value) => {
    totalAmount = totalAmount + value * 10000000;
    return obj;
  };

  const thousand = (value) => {
    totalAmount = totalAmount + value * 1000;
    return obj;
  };

  const value = () => {
    return totalAmount;
  };

  const obj = {
    lacs,
    crore,
    thousand,
    value,
  };
  return obj;
};

console.log(
  computeAmount().lacs(15).crore(5).lacs(20).thousand(45).crore(7).value()
);
