import { CardDoctor } from "@/components/molecules";
import Link from "next/link";
import { Add, Search } from "@mui/icons-material";
import { InputAdornment, Stack, TextField } from "@mui/material";

import { Button } from "@/components/atoms";

import styles from "../../../../styles/pages/list_doctors.module.scss";

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
            <CardDoctor
              key={idx.toString()}
              crm="5545 - 2655"
              specialty="Cirurgia"
              name={`Icaro ${idx}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
