import { Button } from "@/components/atoms";
import { Add, Search } from "@mui/icons-material";
import { InputAdornment, Stack, TextField, Typography } from "@mui/material";

import styles from "@/styles/pages/exams.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className={styles.container}>
      <header />

      <section>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <TextField
            placeholder="Buscar exames..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
            fullWidth
            sx={{ maxWidth: "320px" }}
          />

          <Button
            startIcon={<Add />}
            size="large"
            variant="contained"
            component={Link}
            href="/nome_da_empresa/new_exam"
          >
            Novo Exame
          </Button>
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ flex: 1 }}
          spacing={2}
        >
          <Image
            src="/assets/exams_empty.svg"
            width={150}
            height={150}
            alt="Exames vazios"
          />
          <Stack>
            <Typography textAlign="center" variant="h6">
              Nenhum tipo de exame cadastrado!
            </Typography>
            <Typography textAlign="center" variant="body2" color="GrayText">
              Clique em + novo exame parada cadastrar um novo
            </Typography>
          </Stack>
        </Stack>
      </section>
    </div>
  );
}
