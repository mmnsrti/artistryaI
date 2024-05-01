import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const TransformedImage = ({
  image,
  type,
  title,
  isTransforming,
  setIsTransforming,
  transformationConfig,
  hasDownload = true,
}: TransformedImageProps) => {
  const downloadHandler = (e: any) => {};
  return (
    <div className="flex flex-col gap-4">
      <div className="flex-between">
        <h3 className="h3-bold text-dark-500">Transformed</h3>
        {hasDownload && (
          <Button className="download-btn" onClick={(e) => downloadHandler(e)}>
            <Image
              src="/assets/icons/download.svg"
              alt="download"
              width={20}
              height={20}
              className="pb-[6px]"
            />
          </Button>
        )}
      </div>
      {image?.publicId && transformationConfig ? (
        <div className="relative"></div>
      ) : (
        <div className="transformed-placeholder"> Transformed Image</div>
      )}
    </div>
  );
};

export default TransformedImage;
