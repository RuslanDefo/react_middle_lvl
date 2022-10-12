import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={250}
    viewBox="0 0 400 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="147" rx="3" ry="3" width="200" height="10" />
    <circle cx="94" cy="71" r="70" />
    <rect x="2" y="164" rx="0" ry="0" width="200" height="50" />
  </ContentLoader>
)

export default Skeleton;
