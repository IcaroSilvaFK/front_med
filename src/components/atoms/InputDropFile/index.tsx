"use client";

import { AddPhotoAlternate } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Image from "next/image";
import { ChangeEvent, useEffect, useId } from "react";

type Props = {
  image: string | null;
  onSelectImage: (event: ChangeEvent<HTMLInputElement>) => void;
  onDropImage: (files: FileList) => void;
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export function InputDropFile(props: Props) {
  const {
    image,
    onDropImage,
    onSelectImage,
    className,
    imageWidth,
    imageHeight,
  } = props;

  const inputFileId = useId();

  useEffect(() => {
    window.addEventListener(
      "drop",
      (e) => {
        e.stopPropagation();
        e.preventDefault();
      },
      false
    );
    window.addEventListener(
      "dragover",
      (e) => {
        e.stopPropagation();
        e.preventDefault();
      },
      false
    );

    return () => {
      window.removeEventListener(
        "drop",
        (e) => {
          e.stopPropagation();
          e.preventDefault();
        },
        false
      );
      window.removeEventListener(
        "dragover",
        (e) => {
          e.stopPropagation();
          e.preventDefault();
        },
        false
      );
    };
  }, []);

  return (
    <label
      htmlFor={inputFileId}
      className={className}
      onDrop={(data) => onDropImage(data.dataTransfer.files)}
    >
      {!image && (
        <div>
          <AddPhotoAlternate fontSize="large" />
          <Typography variant="body1" textAlign="center">
            <Typography
              variant="body1"
              component="span"
              fontWeight="bold"
              color="primary.main"
            >
              Faça o upload de uma imagem
            </Typography>{" "}
            ou arraste e solte PNG, JPG de até 10MB
          </Typography>
        </div>
      )}
      {image && (
        <Image
          src={image}
          alt="Uploaded image"
          width={imageWidth || 350}
          height={imageHeight || 272}
          objectFit="contain"
        />
      )}
      <input
        type="file"
        name="file"
        id={inputFileId}
        onChange={onSelectImage}
      />
    </label>
  );
}
