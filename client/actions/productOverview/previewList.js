const previewListFirstAction = (first) => ({
  type: 'PREVIEW-FIRST',
  payload: first,
});

const previewListLastAction = (last) => ({
  type: 'PREVIEW-LAST',
  payload: Math.min(last, 5),
});

exports.previewListLastAction = previewListLastAction;
exports.previewListFirstAction = previewListFirstAction;
