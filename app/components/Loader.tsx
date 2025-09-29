import React from "react";

interface LoaderProps {
  height?: number;
  width?: number;
  marginInline?: string;
  marginTop: number;
}
const Loader = ({
  height = 32,
  width = 32,
  marginInline,
  marginTop,
}: LoaderProps) => {
  return (
    <div
      className="rounded-full border-2 border-pink-600 border-t-transparent animate-spin"
      style={{
        height: `${height}px`,
        width: `${width}px`,
        marginInline: marginInline,
        marginTop: `${marginTop}px`,
      }}
    ></div>
  );
};

export default Loader;
