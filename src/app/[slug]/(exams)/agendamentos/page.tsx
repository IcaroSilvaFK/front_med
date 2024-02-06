"use client";
import {
  Alert,
  Avatar,
  Drawer,
  IconButton,
  InputAdornment,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";

import styles from "../../../../styles/pages/appointments.module.scss";
import { Search, Close, CalendarMonth } from "@mui/icons-material";
import {
  CardSchedulingExam,
  SideBarSchedulingExam,
} from "@/components/molecules";
import { useBoolean } from "@/hooks";
import { Button } from "@/components/atoms";
import { NumberUtil } from "@/utils/Number.util";

export default function Page() {
  const [sidebarIsOpen, handleOpenSidebar, handleCloseSidebar] = useBoolean();

  return (
    <div className={styles.container}>
      <Stack
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs value={0}>
          <Tab label="Todos" />
          <Tab label="Pendentes" />
          <Tab label="Agendados" />
          <Tab label="Concluídos" />
          <Tab label="Cancelados" />
        </Tabs>
      </Stack>
      <Stack mt={2}>
        <TextField
          label="Pesquisar"
          placeholder="Buscar agendamentos..."
          sx={{
            maxWidth: "320px",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <div className={styles.grid}>
        <CardSchedulingExam variant="error" onRequestOpen={handleOpenSidebar} />
        <CardSchedulingExam
          variant="warning"
          onRequestOpen={handleOpenSidebar}
        />
        <CardSchedulingExam
          variant="success"
          onRequestOpen={handleOpenSidebar}
        />
        <CardSchedulingExam
          variant="primary"
          onRequestOpen={handleOpenSidebar}
        />
      </div>

      <SideBarSchedulingExam
        sidebarIsOpen={sidebarIsOpen}
        handleCloseSidebar={handleCloseSidebar}
        isPending={Boolean(Math.round(Math.random() * 10))}
      />
    </div>
  );
}
