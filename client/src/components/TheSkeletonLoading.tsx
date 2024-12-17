import React, { FunctionComponent } from "react";

interface TheSkeletonLoadingProps {
  listsToRender?: number;
  content: any;
}

const TheSkeletonLoading: FunctionComponent<TheSkeletonLoadingProps> = ({
  listsToRender = 1,
  content,
}) => {
  return (
    <>
      {Array(listsToRender)
        .fill(1)
        .map((card, index) => (
          // render your skeleton here
          <div key={index}>{content}</div>
        ))}
    </>
  );
};

export default TheSkeletonLoading;
