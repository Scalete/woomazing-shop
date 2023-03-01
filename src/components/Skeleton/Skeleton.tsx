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

export const skeletonProductOptions: ISkeletonOptions = {
    width: 367,
    height: 580,
    elementsArr: [<rect x="0" y="0" rx="0" ry="0" width="350" height="478" />, <rect x="71" y="502" rx="0" ry="0" width="200" height="28" />, <rect x="150" y="548" rx="0" ry="0" width="34" height="28" />] 
}

export const skeletonCategoryOptions: ISkeletonOptions = {
    width: 176,
    height: 53,
    elementsArr: [<rect x="0" y="0" rx="0" ry="0" width="176" height="53" />]
}

export default Skeleton;