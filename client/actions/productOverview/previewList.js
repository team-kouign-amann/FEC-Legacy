const previewListFirstAction = (first) => ({
  type: 'PREVIEW-FIRST',
  payload: first,
});

const previewListLastAction = (last) => ({
  type: 'PREVIEW-LAST',
  payload: Math.min(last, 4),
});

exports.previewListLastAction = previewListLastAction;
exports.previewListFirstAction = previewListFirstAction;
