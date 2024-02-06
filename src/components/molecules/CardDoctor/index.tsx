"use client";
import { Delete } from "@mui/icons-material";
import { Avatar, Card, IconButton, Stack, Typography } from "@mui/material";

type Props = {
  hasButtonDelete?: boolean;
  onRequestDelete?: () => Promise<void> | void;
  name: string;
  specialty: string;
  crm: string;
  avatar?: string;
};

export function CardDoctor(props: Props) {
  const { hasButtonDelete, onRequestDelete, name, specialty, crm, avatar } =
    props;

  return (
    <Card
      variant="outlined"
      sx={{
        p: 2,
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Avatar src={avatar}>{name}</Avatar>
      <Stack flex={1}>
        <Typography fontWeight="bold" fontSize={18}>
          {name}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="body2" color="GrayText">
            {specialty}
          </Typography>
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#00C1B9",
            }}
          />
          <Typography variant="body2" color="GrayText">
            {crm}
          </Typography>
        </Stack>
      </Stack>
      {hasButtonDelete && (
        <IconButton onClick={onRequestDelete}>
          <Delete color="error" />
        </IconButton>
      )}
    </Card>
  );
}
