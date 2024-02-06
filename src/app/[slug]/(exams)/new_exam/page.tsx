"use client";
import { Button } from "@/components/atoms";
import { KeyboardArrowLeft } from "@mui/icons-material";

import styles from "../../../../styles/pages/new_exam.module.scss";
import { Stack, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { DaysOfService, Details } from "@/components/templates";

const screens = {
  0: <Details />,
  1: <DaysOfService />,
};

export default function Page() {
  const [tab, setTab] = useState(0);

  return (
    <div className={styles.container}>
      <header>
        <Button startIcon={<KeyboardArrowLeft />} variant="outlined">
          Voltar
        </Button>
      </header>
      <Stack mt={2} sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tab} onChange={(_, newTab) => setTab(newTab)}>
          <Tab label="Detalhes" />
          <Tab label="Dias de Atendimento" />
          {/* <Tab label="Formas de Pagamento" /> */}
        </Tabs>
      </Stack>
      <div>{screens[tab as keyof typeof screens]}</div>
    </div>
  );
}
