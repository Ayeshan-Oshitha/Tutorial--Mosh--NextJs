"use client";

import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState<string | null>(null);

  return (
    <>
      {publicId && (
        <CldImage
          width="270"
          height="180"
          crop="fill"
          src={publicId}
          alt="Uploaded Image"
        />
      )}
      <CldUploadWidget
        uploadPreset="next_app_rgt"
        onSuccess={(results) => {
          console.log("Upload successful! Here is the image info: ", results);
          if (results.event !== "success") {
            return;
          }
          const info = results.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => {
          return (
            <button className="btn btn-primary" onClick={() => open()}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
