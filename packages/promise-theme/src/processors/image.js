import React from "react";
import tw, { styled, css } from "twin.macro";

const ImageBlock = (props) => {

  const styles = {
    default: "",
    "full": tw`my-24 -mx-6 lg:mx-gutter`
  };

  let style = "default";
  if(props.children && props.children.props.className && props.children.props.className.includes("size-full")) {
    style = "full";
  }

  return (
    <div className={props.className} css={styles[style]}>
     {props.children}
    </div>
  )
};

const imageProc = {
  name: "image",
  priority: 20,
  test: ({ props }) => props && props.className && props.className.includes("wp-block-image"),
  processor: ({ props, parent }) => {
    return {
      component: ImageBlock,
      props: { ...props, parent },
    }
  },
};

export default imageProc;

