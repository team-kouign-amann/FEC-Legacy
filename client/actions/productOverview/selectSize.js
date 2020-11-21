const selectSizeAction = (payload) => ({
  type: 'CURRENT-SIZE',
  payload,
});

const toggleSelectSizeAction = (payload) => ({
  type: 'SELECT-SIZE',
  payload,
});

const updateMaxQuantityAction = (payload) => ({
  type: 'MAX-QUANTITY',
  payload,
});

exports.toggleSelectSizeAction = toggleSelectSizeAction;
exports.selectSizeAction = selectSizeAction;
exports.updateMaxQuantityAction = updateMaxQuantityAction;
