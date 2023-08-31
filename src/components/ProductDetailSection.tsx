import React from "react";

//react component that passes props to the children
interface propsTypes {
  children: React.ReactNode;
}

const ProductDetailSection: React.FC<propsTypes> = (props: propsTypes) => {
  return <div className="pt-4 pb-4 lg:pb-8 border-b">{props.children}</div>;
};

export default ProductDetailSection;
