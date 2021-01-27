const currencyFormatter = (price) => {
  let currencyConverted = "";
  if (typeof price !== "number") {
    return "99999";
  } else {
    const numberformatted = price.toFixed(2);
    currencyConverted = numberformatted.replace(".", ",") + " €";
  }
  return currencyConverted;
};

export default currencyFormatter;
