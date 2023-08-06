import React from "react";
import Image from "next/image";

interface BreadCrumbAtomProps extends React.ComponentProps<typeof Image> {}

export const BreadCrumbAtom: React.FC<BreadCrumbAtomProps> = ({
  src,
  ...props
}) => {
  return (
    <Image
      src={src}
      {...props}
      alt=""
      style={{ width: "80%", height: "80%" }}
    />
  );
};
