import { ChangeEvent, useCallback, useState } from "react";

export function useFileFieldMethods() {

  const [image, setImage] = useState<string | null>(null)

  const onDropImage = (fileList: FileList) => {
    const file = fileList[0];

    readFile(file);
  };

  const onSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const file = files?.length ? files[0] : null;

    if (file) {
      readFile(file);
    }
  };

  const readFile = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  }, []);



  return {
    image,
    onSelectImage,
    onDropImage,
    readFile
  }
}