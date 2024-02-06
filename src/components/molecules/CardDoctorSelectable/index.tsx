import { Avatar, Card, CardActionArea, Stack, Typography } from "@mui/material";

type Props = {
  onClick?: () => void;
  name: string;
  specialty: string;
  crm: string;
  avatar?: string;
  isActive?: boolean;
};

export function CardDoctorSelectable(props: Props) {
  const { onClick, name, specialty, crm, avatar, isActive } = props;

  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: isActive ? "#00C1B9" : "divider",
      }}
    >
      <CardActionArea
        onClick={onClick}
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
      </CardActionArea>
    </Card>
  );
}
