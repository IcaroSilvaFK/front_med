"use client";

import { Button, InputPassword } from "@/components/atoms";
import styles from "../styles/pages/home.module.scss";
import Image from "next/image";
import {
  Divider,
  Link as MuiLink,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  return (
    <main className={styles.container}>
      <Image src="/assets/login_image.png" alt="Login image" layout="fill" />
      <div>
        <header>
          <Image src="/assets/logo.png" alt="Logo" width={245} height={54} />
        </header>
        <form>
          <TextField fullWidth label="Email" />

          <InputPassword />
          <footer>
            <MuiLink>Esqueceu a senha?</MuiLink>
          </footer>
          <Button variant="contained" fullWidth type="submit">
            Entrar
          </Button>
          <Stack spacing={2}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Divider sx={{ flex: 1 }} />
              <Typography variant="body2" color="GrayText">
                Ainda não tem cadastro?
              </Typography>
              <Divider sx={{ flex: 1 }} />
            </Stack>
            <Button
              variant="outlined"
              sx={{ borderWidth: 1.5 }}
              fullWidth
              href="/signup"
              component={Link}
            >
              Cadastre-se
            </Button>
          </Stack>
        </form>
      </div>
    </main>
  );
}
