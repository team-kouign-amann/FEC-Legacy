import axios from 'axios';

const postToCart = (id) => (
  axios({
    method: 'post',
    url: 'http://3.21.164.220/cart',
    data: {
      sku_id: id,
    },
    header: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => {
      alert('Added to Cart!');
    })
    .catch((err) => {
      console.log('Post to cart error, ', err);
    })

);

export default postToCart;
