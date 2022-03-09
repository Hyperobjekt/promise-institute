import React from "react";
import tw, { styled, css } from "twin.macro";
import getAttrs from "./../utils/getAttrs";
import ButtonLink from "../components/button-link";

const ButtonBlock = (props) => {
  const { text, url } = getAttrs(props);

  return (
    <ButtonLink href={url} external={true}>
     {text}
    </ButtonLink>
  )
};

const buttonProc = {
  name: "button",
  priority: 20,
  test: ({ props }) => props && props.className && props.className.includes("wp-block-promise-blocks-button"),
  processor: ({ props, parent }) => {
    return {
      component: ButtonBlock,
      props: { ...props, parent },
    }
  },
};

export default buttonProc;

