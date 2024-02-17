"use client";

import styles from "../../../../styles/pages/profile.module.scss";
import { Box, Tab, Tabs } from "@mui/material";
import { EditProfileDetails, SchedulingHours } from "@/components/templates";
import { useState } from "react";

const screens = {
  0: <EditProfileDetails />,
  1: <SchedulingHours />,
};

export default function Page() {
  const [tab, setTab] = useState(0);

  return (
    <main className={styles.container}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tab} onChange={(_, newTab) => setTab(newTab)}>
          <Tab label="Informações" value={0} />
          <Tab label="Horário de atendimentos" />
        </Tabs>
      </Box>

      {screens[tab as keyof typeof screens]}
    </main>
  );
}
