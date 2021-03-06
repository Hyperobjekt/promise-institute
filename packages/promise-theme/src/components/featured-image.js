import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const FeaturedImage = ({ state, id }) => {
  const media = state.source.attachment[id];

  if (!media) return null;

  const srcset = Object.values(media.media_details.sizes)
    .map((item) => [item.source_url, item.width])
    .reduce((final, current, index, array) => final.concat(
      `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
    ), "") || null;

  return (
    <div>
      <Image
        alt={media.title.rendered}
        src={media.source_url}
        srcSet={srcset}
        width={media?.media_details?.width}
        height={media?.media_details?.height}
      />
    </div>
  );
};

export default connect(FeaturedImage);

// const Container = styled.div`
//   margin-top: 16px;
//   height: 300px;
//   ${({ isAmp }) => isAmp && "position: relative;"};
// `;

// const StyledImage = styled(Image)`
//   display: block;
//   height: 100%;
//   width: 100%;
//   object-fit: cover;
// `;
