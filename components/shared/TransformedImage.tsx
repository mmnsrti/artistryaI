"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { CldImage, getCldImageUrl } from "next-cloudinary";
import { dataUrl, debounce, download, getImageSize } from "@/lib/utils";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import LoadingComponent from "../loading/LoadingComponent";

const TransformedImage = ({
  image,
  type,
  title,
  isTransforming,
  setIsTransforming,
  transformationConfig,
  hasDownload = true,
}: TransformedImageProps) => {
  const downloadHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    download(
      getCldImageUrl({
        width: image?.width,
        height: image?.height,
        src: image?.publicId,
        ...transformationConfig,
      }),
      title
    );
  };

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
        <div className="relative">
          <CldImage
            src={image?.publicId}
            alt={image.title}
            width={getImageSize(type, image, "width")}
            height={getImageSize(type, image, "height")}
            className="transformed-image"
            sizes="(max-width:767px) 100vw ,50vw"
            placeholder={dataUrl as PlaceholderValue}
            onLoad={() => {
              setIsTransforming && setIsTransforming(false);
            }}
            onError={() => {
              debounce(() => {
                setIsTransforming && setIsTransforming(false);
              }, 8000)();
            }}
            {...transformationConfig}
          />
          {isTransforming && (
            <div className="transforming-loader">
              <LoadingComponent/>
            </div>
          )}
        </div>
      ) : (
        <div className="transformed-placeholder"> Transformed Image</div>
      )}
    </div>
  );
};

export default TransformedImage;
