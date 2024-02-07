import { Button } from "@/components/atoms";
import { CalendarMonth, Close } from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import styles from "./styles.module.scss";
import { NumberUtil } from "@/utils/Number.util";
import Image from "next/image";

type Props = {
  sidebarIsOpen: boolean;
  handleCloseSidebar: () => void;
  isPending?: boolean;
};

export function SideBarSchedulingExam(props: Props) {
  const { sidebarIsOpen, handleCloseSidebar, isPending } = props;

  return (
    <Drawer
      open={sidebarIsOpen}
      anchor="right"
      onClose={handleCloseSidebar}
      variant="persistent"
      sx={{
        "& .MuiDrawer-paper": {
          width: "100%",
          maxWidth: "550px",
          p: 2,
        },
      }}
    >
      <Stack alignItems="flex-end">
        <IconButton onClick={handleCloseSidebar}>
          <Close />
        </IconButton>
      </Stack>
      <Stack pt={4} flex={1}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar sx={{ width: 50, height: 50 }}>I</Avatar>
          <Stack ml={1}>
            <Typography fontSize={12} color="GrayText">
              Nome do Paciente
            </Typography>
            <Typography fontWeight="bold" variant="body1">
              Icaro Vieira da Silva
            </Typography>
          </Stack>
        </Stack>
        <div className={styles.grid}>
          <Stack>
            <Typography fontSize={12} color="GrayText">
              CPF
            </Typography>
            <Typography fontWeight="bold" variant="body1">
              999.999.999-99
            </Typography>
          </Stack>
          <Stack>
            <Typography fontSize={12} color="GrayText">
              Data de nascimento
            </Typography>
            <Typography fontWeight="bold" variant="body1">
              05/08/2000
            </Typography>
          </Stack>
          <Stack>
            <Typography fontSize={12} color="GrayText">
              RG
            </Typography>
            <Typography fontWeight="bold" variant="body1">
              9*.***.**
            </Typography>
          </Stack>
          <Stack>
            <Typography fontSize={12} color="GrayText">
              Whatsapp
            </Typography>
            <Typography fontWeight="bold" variant="body1">
              (99) 99999-9999
            </Typography>
          </Stack>
          <Stack>
            <Typography fontSize={12} color="GrayText">
              Email
            </Typography>
            <Typography fontWeight="bold" variant="body1">
              Icaro.vieira@gmail.com{" "}
            </Typography>
          </Stack>
        </div>
        <div className={styles.grid} style={{ marginTop: 36, flex: 1 }}>
          <Stack>
            <Typography fontSize={12} color="GrayText">
              Horário
            </Typography>
            <Typography fontWeight="bold" variant="body1">
              Ordem de chegada
            </Typography>
          </Stack>
          <Stack>
            <Typography fontSize={12} color="GrayText">
              Agendado para
            </Typography>
            <Stack direction="row" spacing={0.5}>
              <CalendarMonth color="primary" />
              <Typography fontWeight="bold" variant="body1">
                01/02/2024
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography fontSize={12} color="GrayText">
              Status
            </Typography>
            <Typography color="primary" fontWeight="bold" variant="body1">
              Agendado
            </Typography>
          </Stack>
          <Stack>
            <Typography fontSize={12} color="GrayText">
              Exame
            </Typography>
            <Typography fontWeight="bold" variant="body1">
              Dentista
            </Typography>
          </Stack>
          <Stack>
            <Typography fontSize={12} color="GrayText">
              Médico
            </Typography>
            <Typography fontWeight="bold" variant="body1">
              Dr. Icaro Vieira
            </Typography>
          </Stack>
          <Stack>
            <Typography fontSize={12} color="GrayText">
              Forma de pagamento
            </Typography>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Image
                src="/assets/unimed-logo.png"
                alt="Unimed"
                width={20}
                height={20}
              />
              <Typography fontWeight="bold" variant="body1">
                Unimed
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography fontSize={12} color="GrayText">
              Total
            </Typography>
            <Typography fontWeight="bold" variant="body1">
              {NumberUtil.formatCurrency(10000)}
            </Typography>
          </Stack>
          <Stack>
            <Typography fontSize={12} color="GrayText">
              Valor já pago
            </Typography>
            <Typography fontWeight="bold" variant="body1">
              {NumberUtil.formatCurrency(100)}
            </Typography>
          </Stack>
          <Stack>
            <Typography fontSize={12} color="GrayText">
              N° do agendamento
            </Typography>
            <Typography fontWeight="bold" variant="body1">
              5489-6625
            </Typography>
          </Stack>
        </div>
        {isPending && (
          <Alert severity="warning" sx={{ mt: 2 }}>
            Você tem 11:59 para aceitar esse agendamento, ou então ele será
            cancelado automaticamente!
          </Alert>
        )}

        <Stack
          direction="row"
          spacing={2}
          mt={2}
          flex={1}
          alignItems="flex-end"
        >
          {isPending && (
            <>
              <Button variant="outlined" color="error" fullWidth>
                Rejeitar
              </Button>
              <Button variant="contained" fullWidth>
                Aceitar
              </Button>
            </>
          )}
          {!isPending && (
            <>
              <Button variant="outlined" color="error" fullWidth>
                Não comparecimento
              </Button>
              <Button variant="contained" fullWidth>
                Consulta realizada
              </Button>
            </>
          )}
        </Stack>
      </Stack>
    </Drawer>
  );
}
