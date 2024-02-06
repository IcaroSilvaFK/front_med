import { CardDoctor } from "@/components/molecules";

import styles from "../../../../styles/pages/list_doctors.module.scss";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { Add, Search } from "@mui/icons-material";
import { Button } from "@/components/atoms";
import Link from "next/link";

export default function List() {
  return (
    <main className={styles.container}>
      <header />
      <section>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <TextField
            placeholder="Buscar profissionais..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{ width: "100%", maxWidth: "320px" }}
          />

          <Button
            variant="contained"
            startIcon={<Add />}
            size="large"
            component={Link}
            href="/nome_da_empresa/doctor"
          >
            Novo Profissional
          </Button>
        </Stack>
        <div className={styles.grid}>
          {Array.from({ length: 100 }).map((_, idx) => (
            <CardDoctor key={idx} />
          ))}
        </div>
      </section>
    </main>
  );
}
