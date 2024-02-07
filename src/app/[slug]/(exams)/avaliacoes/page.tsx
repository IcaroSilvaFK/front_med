import { Avatar, Card, Chip, Rating, Stack, Typography } from "@mui/material";

import Image from "next/image";
import { CalendarToday } from "@mui/icons-material";

import styles from "../../../../styles/pages/reviews.module.scss";

export default function Page() {
  return (
    <main className={styles.container}>
      <Stack mb={2}>
        <Typography fontSize={18} color="#22242c">
          Avaliações da clinica
        </Typography>
        <Typography variant="body2" color="GrayText">
          Veja as avaliações que seus pacientes estão dando para sua clinica.
        </Typography>
      </Stack>
      <Card
        variant="outlined"
        sx={{
          padding: "24px 12px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: "69px",
        }}
      >
        <Stack>
          <Typography variant="h2">4.9</Typography>
          <Rating value={5} size="large" />
          <Typography variant="body1">Período atual</Typography>
          <Typography variant="body2" color="GrayText">
            06/11/2023 a 03/02/2024
          </Typography>
          <Stack mt={1}>
            <Typography variant="subtitle1">
              1.296 avaliações sobre a clinica
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="space-around" flex={1}>
          <Stack alignItems="center">
            <Image
              src="/assets/min_reviews.png"
              alt="min_reviews"
              width={44}
              height={42}
            />
            <Typography variant="subtitle1" fontWeight="600">
              0
            </Typography>
          </Stack>
          <Stack alignItems="center">
            <Image
              src="/assets/normal_reviews.png"
              alt="normal_reviews"
              width={56}
              height={42}
            />
            <Typography variant="subtitle1" fontWeight="600">
              3
            </Typography>
          </Stack>
          <Stack alignItems="center">
            <Image
              src="/assets/basic_reviews.png"
              alt="normal_reviews"
              width={56}
              height={42}
            />
            <Typography variant="subtitle1" fontWeight="600">
              6
            </Typography>
          </Stack>
          <Stack alignItems="center">
            <Image
              src="/assets/med_reviews.png"
              alt="med_reviews"
              width={80}
              height={42}
            />
            <Typography variant="subtitle1" fontWeight="600">
              752
            </Typography>
          </Stack>
          <Stack alignItems="center">
            <Image
              src="/assets/full_reviews.png"
              alt="full_reviews"
              width={102}
              height={42}
            />
            <Typography variant="subtitle1" fontWeight="600">
              999+
            </Typography>
          </Stack>
        </Stack>
      </Card>
      <Stack mt={1}>
        <Typography fontSize={18} color="#22242c">
          Avaliações da clinica
        </Typography>
        <Typography variant="body2" color="GrayText">
          Veja as avaliações que seus pacientes estão dando para sua clinica.
        </Typography>
      </Stack>
      <div className={styles.grid}>
        <Card variant="outlined" sx={{ padding: "16px 12px" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Chip label="5545 - 2655" size="small" />

            <Stack direction="row" alignItems="center">
              <CalendarToday
                sx={{
                  color: "#1976d2",
                }}
              />
              <Typography variant="body2">19/10/2022</Typography>
            </Stack>
          </Stack>
          <Stack mt={1} direction="row" alignItems="center" gap={1}>
            <Avatar>I</Avatar>
            <Typography fontWeight="600" variant="subtitle1">
              Icaro Vieira
            </Typography>
          </Stack>
          <Stack mt={1} spacing={0.5} direction="row" alignItems="center">
            <Typography fontSize={16} color="GrayText">
              (3)
            </Typography>
            <Rating value={3} size="medium" readOnly />
          </Stack>
        </Card>
      </div>
    </main>
  );
}
