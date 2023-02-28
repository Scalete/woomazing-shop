import React from "react"
import ContentLoader from "react-content-loader"
import { ISkeletonOptions } from "../../redux/product/interfaces";

const Skeleton: React.FC<ISkeletonOptions> = (props) => (
  <ContentLoader 
    speed={2}
    width={props.width}
    height={props.height}
    viewBox={`0 0 ${props.width} ${props.height}`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {
        props.elementsArr.map((item, index) => (
            <React.Fragment key={index}>
                {item}
            </React.Fragment>
        ))
    }
  </ContentLoader>
)

export default Skeleton;