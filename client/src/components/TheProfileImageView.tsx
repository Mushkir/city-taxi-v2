import React, { FunctionComponent } from "react";

interface TheProfileImageViewProps {
  image?: string;
}

const TheProfileImageView: FunctionComponent<TheProfileImageViewProps> = ({
  image,
}) => {
  console.log(image);

  return (
    <>
      <img
        className="w-full h-full object-cover rounded-full"
        src={
          image ||
          "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
        }
        alt="Driver's image"
      />
    </>
  );
};

export default TheProfileImageView;
