import React from 'react';

const ComparisonModal = (props) => {
  const productName = props.overviewProduct.name;
  const relatedName = props.relatedInformation.name;
  const productFeatures = props.overviewProduct.features;
  const relatedFeatures = props.relatedInformation.features;

  let array = [];

  for (let i = 0; i < productFeatures.length; i++) {
    productFeatures[i].currentHas = true;
    array.push(productFeatures[i]);
  }
  for (let i = 0; i < relatedFeatures.length; i++) {
    let relatedFeature = relatedFeatures[i];
    const matchedFeature = array.find(((featureObj) => featureObj.feature === relatedFeature.feature));
    if (matchedFeature) {
      matchedFeature.relatedHas = true;
    } else {
      relatedFeature.currentHas = false;
      relatedFeature.relatedHas = true;
      array.push(relatedFeature);
    }
  }

  return (
    <>
      <div
        id="openModal-about"
        className="modalDialog"
        style={props.show && { opacity: "1", pointerEvents: "auto" }}
      >
        <div>
          <a href="#close" title="Close" className="close" onClick={props.hide}>
            X
          </a>
          <p className="modal_title">Compare</p>
          <div className="modal_flex modal_names">
            <div>{productName}</div>
            <div>{relatedName}</div>
          </div>

          {array.map((featureObj) => {
            return (
              <div className="modal_flex">
                <div>
                  {featureObj.currentHas
                  && <span className="comparison-check"></span>}
                </div>
                <div className="comparison-feature">{`${featureObj.feature} - ${featureObj.value}`}</div>
                <div>
                  {featureObj.relatedHas
                  && <span className="comparison-check"></span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ComparisonModal;