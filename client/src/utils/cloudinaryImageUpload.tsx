const uploadImage = async (files: any) => {
  const formData = new FormData();

  formData.append("file", files);
  formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET_NAME);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const dataResp = await response.json();

  return dataResp;
};

export default uploadImage;
