import React from "react";
import tw, { styled, css } from "twin.macro";

const GalleryBlock = (props) => {

  return (
    <div className={props.className} css={tw`gap-6 mb-24`}>
     {props.children}
    </div>
  )
};

const galleryProc = {
  name: "gallery",
  priority: 20,
  test: ({ props }) => props && props.className && props.className.includes("wp-block-gallery"),
  processor: ({ props, parent }) => {
    return {
      component: GalleryBlock,
      props: { ...props, parent },
    }
  },
};

export default galleryProc;

