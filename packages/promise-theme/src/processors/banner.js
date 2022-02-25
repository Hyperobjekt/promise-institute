import React from "react";
import tw, { styled, css } from "twin.macro";

const BannerBlock = (props) => {
  const media = props["data-media"] ? JSON.parse(props["data-media"]) : null;
  
  return (
    <div
      css={tw`pb-[60%] -mx-6 lg:-mx-layout bg-cover bg-center`}
      style={{
        backgroundImage: media ? `url(${media.sizes.full.url})` : null
      }}>
    </div>
  )
};

const bannerProc = {
  name: "banner",
  priority: 20,
  test: ({ props }) => props && props.className && props.className.includes("wp-block-promise-blocks-banner"),
  processor: ({ props }) => {
    return {
      component: BannerBlock,
      props: props,
    }
  },
};

export default bannerProc;

