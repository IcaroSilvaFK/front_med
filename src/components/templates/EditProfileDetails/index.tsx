"use client";

import { Button, InputDropFile } from "@/components/atoms";
import { useFileFieldMethods } from "@/hooks";
import { Stack, TextField } from "@mui/material";

import styles from "./styles.module.scss";

export function EditProfileDetails() {
  const { image, onSelectImage, onDropImage } = useFileFieldMethods();

  return (
    <form className={styles.container}>
      <Stack flexDirection="row" flex={1} gap={3} width="100%">
        <Stack flex={1} spacing={2}>
          <TextField label="Nome da clinica" fullWidth />
          <TextField label="Whatsapp da clinica" fullWidth />
          <TextField label="Telefone" fullWidth />
          <TextField label="Telefone" fullWidth />
          <TextField label="Bio da clinica" fullWidth multiline minRows={5} />
          <TextField
            label="ID da clinica"
            fullWidth
            disabled
            value={window.crypto.randomUUID()}
          />
        </Stack>
        <Stack flex={1} maxWidth="400px">
          <InputDropFile
            onDropImage={onDropImage}
            onSelectImage={onSelectImage}
            image={image}
            className={styles.input__file}
            imageHeight={300}
            imageWidth={400}
          />
        </Stack>
      </Stack>
      <div className={styles.grid__form}>
        <TextField label="CEP" fullWidth />
        <TextField label="Cidade e Estado" fullWidth />
        <TextField label="Rua" fullWidth />
        <TextField label="Numero" fullWidth />
        <TextField label="Bairro" fullWidth />
        <TextField label="Complemento" fullWidth />
      </div>

      <footer>
        <Button variant="contained" type="submit" size="large">
          Salvar
        </Button>
      </footer>
    </form>
  );
}
