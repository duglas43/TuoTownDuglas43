import React from "react";
import ContentLoader from "react-content-loader";
import PropTypes from "prop-types";
const ProductLoadingBlock = ({customWidth}) => {
  let displayWidth = window.innerWidth;
  if(displayWidth < 768 && displayWidth>425) {
  return(
  <ContentLoader 
    speed={2}
    width={300}
    height={420}
    viewBox="0 0 300 420"
    backgroundColor="#272727"
    foregroundColor="#474747"
  >
    <rect x="0" y="0" rx="13" ry="13" width="300" height="367" /> 
    <rect x="0" y="370" rx="5" ry="5" width="300" height="21" /> 
    <rect x="0" y="395" rx="6" ry="6" width="62" height="20" /> 
    <rect x="83" y="395" rx="6" ry="6" width="217" height="21" />
  </ContentLoader>
  )}
  if(displayWidth >=768) {
    return(
      <ContentLoader 
      speed={2}
      width={customWidth}
      height={454}
      viewBox="0 0 280 454"
      backgroundColor="#272727"
      foregroundColor="#474747"
    >
      <rect x="0" y="0" rx="13" ry="13" width="280" height="412" /> 
      <rect x="0" y="420" rx="6" ry="6" width="62" height="20" /> 
      <rect x="83" y="420" rx="6" ry="6" width="200" height="21" />
    </ContentLoader>
    )
  }
  if(displayWidth <425){
    return(
        <ContentLoader 
          speed={2}
          width={276}
          height={372}
          viewBox="0 0 276 372"
          backgroundColor="#272727"
          foregroundColor="#474747"
        >
          <rect x="0" y="0" rx="13" ry="13" width="276" height="330" /> 
          <rect x="0" y="420" rx="6" ry="6" width="62" height="20" /> 
          <rect x="83" y="420" rx="6" ry="6" width="276" height="0" /> 
          <rect x="2" y="337" rx="3" ry="3" width="68" height="26" /> 
          <rect x="104" y="337" rx="2" ry="2" width="173" height="26" />
        </ContentLoader>
      )
  }
}
ProductLoadingBlock.propTypes = {
  customWidth: PropTypes.number
};
ProductLoadingBlock.defaultProps = {
  customWidth:284
}
export default ProductLoadingBlock;