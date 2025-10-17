import React from "react";

interface PhotoPageProps {
  params: { id: number; photoId: number };
}

const PhotoPage = async ({ params }: PhotoPageProps) => {
  const { id, photoId } = await params;
  return (
    <div>
      PhotoPage {id} {photoId}
    </div>
  );
};

export default PhotoPage;
