const MetaDataAction = (reviewsMetaData) => ({
  type: 'CURRENT_METADATA',
  metaRatings: reviewsMetaData,
});

export default MetaDataAction;
