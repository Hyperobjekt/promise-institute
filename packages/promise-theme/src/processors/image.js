import React from "react";
import tw, { styled, css } from "twin.macro";
// import image from "@frontity/html2react/processors/image";

const ImageBlock = ({ children, className }) => {

  return (
    <div className={className} css={tw`mx-gutter`}>
     {children}
    </div>
  )
};

const imageProc = {
  name: "image",
  priority: 20,
  test: ({ props }) => props && props.className && props.className.includes("wp-block-image"),
  processor: ({ props }) => {
    return {
      component: ImageBlock,
      props: {
        className: props.className
      },
    }
  },
};

export default imageProc;

