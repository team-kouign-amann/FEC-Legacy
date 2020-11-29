const percentDifference = (newPrice, oldPrice) => {
  const percentChange = (Number(newPrice) - Number(oldPrice)) / Number(oldPrice);
  return Math.round(Math.abs(percentChange) * 100);
};

const findSaleStyle = (styles) => {
  // tuple of name and discount
  let nameDiscount = [];
  let discount = 0;
  for (let i = 0; i < styles.length; i++) {
    if (styles[i].sale_price !== '0') {
      const currentDiscount = percentDifference(styles[i].sale_price, styles[i].original_price);
      if (currentDiscount > discount) {
        discount = currentDiscount;
        nameDiscount = [styles[i].name, discount];
      }
    }
  }
  return nameDiscount;
};

export default findSaleStyle;
