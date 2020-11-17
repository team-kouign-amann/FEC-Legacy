const relatedInfo = (relatedProds) => {
  return {type: 'RELATED_PROD', payload: relatedProds}
}

module.exports.relatedInfo = relatedInfo;