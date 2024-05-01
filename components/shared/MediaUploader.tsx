"use client"
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { dataUrl, getImageSize } from "@/lib/utils";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
type MediaUploader = {
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<React.SetStateAction<any>>;
  publicId: string;
  image: any;
  type: string;
};
const MediaUploader = ({
  onValueChange,
  setImage,
  publicId,
  image,
  type,
}: MediaUploader) => {
  const { toast } = useToast();
  const onUploadSuccessHandler = (result: any) => {
    setImage((prevState: any) => ({
      ...prevState,

      publicId: result?.info?.public_id,
      width: result?.info?.width,
      height: result?.info?.height,
      secureUrl: result?.info?.secureUrl,
    }));
    onValueChange(result?.info?.public_id);
    toast({
      title: "image uploaded successfully ",
      description: "1 credit has been used",
      variant: "destructive",
      duration: 5000,
      className: "success-toast",
    });
  };
  const onUploadErrorHandler = () => {
    toast({
      title: "Upload Error",
      description: "Something went wrong",
      variant: "destructive",
      duration: 5000,
      className: "error-toast",
    });
  };
  return (
    <div>
      <CldUploadWidget
        uploadPreset="artisty_ai"
        options={{ multiple: false, resourceType: "image" }}
        onSuccess={onUploadSuccessHandler}
        onError={onUploadErrorHandler}
      >
        {({ open }) => {
          return (
            <div className="flex flex-col gap-4">
              <h3 className="h3-bold text-dark-500">Original</h3>
              {publicId ? (
                <>
                  <div className="cursor-pointer overflow-hidden rounded-[10px]">
                    <CldImage
                      src={publicId}
                      alt="image"
                      width={getImageSize(type, image, "width")}
                      height={getImageSize(type, image, "height")}
                      className="media-uploader_cldImage"
                      sizes="(max-width:767px) 100vw ,50vw"
                      placeholder={dataUrl as PlaceholderValue}
                    />
                  </div>
                </>
              ) : (
                <div className="media-uploader_cta" onClick={() => open()}>
                  {" "}
                  <div className="media-uploader_cta-image">
                    <Image
                      src="/assets/icons/add.svg"
                      alt="add"
                      width={20}
                      height={20}
                    />
                  </div>{" "}
                  <p className="p-14-medium">Click here to upload</p>
                </div>
              )}
            </div>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default MediaUploader;
