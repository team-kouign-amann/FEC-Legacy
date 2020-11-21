const selectQuantityAction = (payload) => ({
  type: 'CURRENT-QUANTITY',
  payload,
});

const toggleSelectQuantityAction = (payload) => ({
  type: 'SELECT-QUANTITY',
  payload,
});

exports.toggleSelectQuantityAction = toggleSelectQuantityAction;
exports.selectQuantityAction = selectQuantityAction;
