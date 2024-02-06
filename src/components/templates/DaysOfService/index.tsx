"use client";

import { DateTimeUtil } from "@/utils/DateTime.util";
import { faker } from "@faker-js/faker";
import {
  Avatar,
  Card,
  Stack,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";

import styles from "./styles.module.scss";
import { CardScheduling } from "@/components/molecules";
import { Info } from "@mui/icons-material";

const doctor = {
  avatar: faker.image.avatar(),
  name: faker.person.fullName(),
  specialty: faker.person.jobTitle(),
  crm: faker.string.sample(),
};

export function DaysOfService() {
  const weekDays = DateTimeUtil.genDaysOfWeek();

  return (
    <div className={styles.container}>
      <Card variant="outlined" sx={{ px: 1, py: 2 }}>
        <Stack direction="row" spacing={1}>
          <Avatar src={doctor.avatar} />
          <Stack>
            <Typography fontWeight="bold" fontSize={18}>
              {doctor.name}
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography color="GrayText" fontSize={14}>
                {doctor.specialty}
              </Typography>
              <div className={styles.circle__blue} />
              <Typography color="GrayText" fontSize={14}>
                {doctor.crm}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" mt={2}>
          <Switch />
          <Typography mr={1} fontSize={16}>
            Ative essa função para agendamentos por ordem de chegada
          </Typography>
          <Tooltip title="Com essa função ativa seus pacientes não precisarão escolher um horário em específico para serem atendidos eles ficaram ciente que o agendamento foi confirmado e a ordem de atendimento é por chegada.">
            <Info />
          </Tooltip>
        </Stack>
        <Stack direction="row" mt={2} justifyContent="space-between">
          {weekDays.map((day) => (
            <CardScheduling key={day.toISOString()} day={day} />
          ))}
        </Stack>
      </Card>
    </div>
  );
}
