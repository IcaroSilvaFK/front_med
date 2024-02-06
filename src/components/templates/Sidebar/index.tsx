import {
  CreditCard,
  Event,
  ExitToApp,
  FormatListBulleted,
  Help,
  Home,
  MedicalServices,
  NewReleases,
  Person,
  Settings,
  Star,
} from "@mui/icons-material";
import {
  Container,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

import styles from "./styles.module.scss";

export function Sidebar() {
  return (
    <nav className={styles.container}>
      <header>
        <Image src="/assets/logo.png" alt="Logo" width={120} height={26} />
      </header>
      <Stack mt={2}>
        <Stack px={2}>
          <Typography textTransform="uppercase" color="GrayText">
            clinica
          </Typography>
        </Stack>

        <MenuList sx={{ gap: 12 }}>
          <MenuItem>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText>Início</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Event />
            </ListItemIcon>
            <ListItemText>Agendados</ListItemText>
            <NewReleases color="warning" />
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <MedicalServices />
            </ListItemIcon>
            <ListItemText>Médicos</ListItemText>
            <NewReleases color="warning" />
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <FormatListBulleted />
            </ListItemIcon>
            <ListItemText>Exames</ListItemText>
          </MenuItem>
        </MenuList>
      </Stack>
      <Divider />
      <Stack mt={2}>
        <Stack px={2}>
          <Typography textTransform="uppercase" color="GrayText">
            minhas contas
          </Typography>
        </Stack>

        <MenuList sx={{ gap: 12 }}>
          <MenuItem>
            <ListItemIcon>
              <CreditCard />
            </ListItemIcon>
            <ListItemText>Formas de pagamentos</ListItemText>
            <NewReleases color="warning" />
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Star />
            </ListItemIcon>
            <ListItemText>Avaliações</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText>Perfil</ListItemText>
          </MenuItem>
        </MenuList>
      </Stack>
      <Divider />
      <Stack mt={2}>
        <Stack px={2}>
          <Typography textTransform="uppercase" color="GrayText">
            ADM
          </Typography>
        </Stack>

        <MenuList sx={{ gap: 12 }}>
          <MenuItem>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText>Configurações</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Help />
            </ListItemIcon>
            <ListItemText>Ajuda</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText>Sair</ListItemText>
          </MenuItem>
        </MenuList>
      </Stack>
    </nav>
  );
}
