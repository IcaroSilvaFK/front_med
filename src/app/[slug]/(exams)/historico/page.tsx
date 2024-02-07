"use client";

import {
  IconButton,
  InputAdornment,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { FilterAlt, Search } from "@mui/icons-material";
import { DateTimeUtil } from "@/utils/DateTime.util";
import { CardSchedulingExam } from "@/components/molecules";
import styles from "../../../../styles/pages/historic.module.scss";

const types = ["success", "primary", "error", "warning"];
export default function Page() {
  return (
    <main className={styles.container}>
      <Stack sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={0}>
          <Tab label="Todos" />
          <Tab label="Agendados" />
          <Tab label="Concluídos" />
          <Tab label="Cancelados" />
        </Tabs>
      </Stack>
      <Stack direction="row" spacing={2} mt={2} alignItems="center">
        <TextField placeholder="ID do agendamento" />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Data"
            sx={{
              svg: {
                color: "#1976d2",
              },
            }}
          />
        </LocalizationProvider>
        <TextField
          placeholder="Todos Exames"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FilterAlt color="primary" />
              </InputAdornment>
            ),
          }}
        />

        <IconButton
          sx={{
            background: "#ebeced",
            width: 48,
            height: 48,
            borderRadius: "10px",
          }}
        >
          <Search />
        </IconButton>
      </Stack>
      <Stack
        flexDirection="row"
        mt={2}
        mb={2}
        alignItems="center"
        gap={0.5}
        py={1}
        px={1.5}
        sx={{
          borderBottom: 1,
          borderTop: 1,
          borderColor: "divider",
        }}
      >
        <Typography
          sx={{ color: "#22242C", fontWeight: "600", fontSize: "18px" }}
        >
          {DateTimeUtil.formatDate(new Date())}
        </Typography>
        <div
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#D9D9D9",
          }}
        />
        <Typography color="GrayText" fontSize={18}>
          12 agendamentos
        </Typography>
      </Stack>
      <div className={styles.grid}>
        {Array.from({ length: 100 }).map((_, idx) => (
          <CardSchedulingExam
            key={idx}
            variant={types[Math.floor(Math.random() * types.length)] as any}
          />
        ))}
      </div>
    </main>
  );
}
