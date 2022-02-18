import React from "react";
// import { connect, css, styled } from "frontity";
import tw, { styled, css } from "twin.macro";

const ParagraphBlock = ({children, className}) => {
  const styles = {
    default: tw`mr-auto mb-4 max-w-lg font-serif`,
    "2xl": tw`mr-auto mb-4 max-w-2xl font-serif`
  };

  let style = "default";
  if(className && (className.includes("-64-") || className.includes("-80-"))) {
    style = "2xl";
  }

  return (
    <p className={className} css={styles[style]}>
     {children}
    </p>
  )
};

const paragraphProc = {
  name: "paragraph",
  priority: 20,
  test: ({ component }) => component === "p",
  processor: ({ props }) => {
    return {
      component: ParagraphBlock,
      props: {
        className: props.className
      },
    }
  },
}

export default paragraphProc;

