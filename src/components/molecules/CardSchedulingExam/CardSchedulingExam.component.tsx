import {
  Avatar,
  Card,
  CardActionArea,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { CalendarMonth } from "@mui/icons-material";
import Image from "next/image";

import styles from "./styles.module.scss";

type Props = {
  variant: "success" | "primary" | "error" | "warning";
  onRequestOpen?: () => void;
};

export function CardSchedulingExam(props: Props) {
  const { variant, onRequestOpen } = props;

  return (
    <Card variant="outlined" sx={{ maxWidth: 300 }}>
      <CardActionArea sx={{ p: 1 }} onClick={onRequestOpen}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row">
            <CalendarMonth color="primary" />
            <Typography variant="body1">01/02/2024</Typography>
          </Stack>
          <Chip
            label="Agendado"
            size="small"
            color={variant}
            variant="filled"
          />
        </Stack>
        <Stack direction="row" mt={1} alignItems="center">
          <Avatar>I</Avatar>
          <Stack ml={1} flex={1}>
            <Typography>Icaro Vieira da Silva</Typography>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Typography color="GrayText" variant="body2">
                Endoscopia
              </Typography>
              <div className={styles.container} />
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <Image
                  src="/assets/unimed-logo.png"
                  alt="Unimed"
                  width={24}
                  height={24}
                />
                <Typography color="GrayText" variant="body2">
                  Unimed
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </CardActionArea>
    </Card>
  );
}
