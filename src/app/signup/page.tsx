"use client";

import {
  Autocomplete,
  Checkbox,
  Container,
  FormControlLabel,
  LinearProgress,
  Stack,
  TextField,
  Tooltip,
  Typography,
  linearProgressClasses,
} from "@mui/material";
import Image from "next/image";

import styles from "../../styles/pages/signup.module.scss";
import { Info } from "@mui/icons-material";
import { Button } from "@/components/atoms";

export default function Page() {
  return (
    <main className={styles.container}>
      <header>
        <Image src="/assets/logo.png" alt="Logo" width={245} height={54} />
        <LinearProgress
          value={50}
          variant="determinate"
          sx={{
            width: "100vw",
            height: 8,
            [`&.${linearProgressClasses.colorPrimary}`]: {
              backgroundColor: "#EAEAEA",
            },
            [`& .${linearProgressClasses.bar}`]: {
              borderRadius: 12,
            },
          }}
        />
      </header>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mt: 17,
        }}
      >
        <Stack direction="row" spacing={5}>
          <Stack direction="row" alignItems="center">
            <FormControlLabel control={<Checkbox />} label="Clincica médica" />
            <Tooltip title="Voltado para clinicas onde vários médicos atuam em diversas especialidades">
              <Info />
            </Tooltip>
          </Stack>
          <Stack direction="row" alignItems="center">
            <FormControlLabel
              control={<Checkbox />}
              label="Clinica odontológica"
            />
            <Tooltip title="Voltado para clinicas odontologia ou dentista liberais">
              <Info />
            </Tooltip>
          </Stack>
          <Stack direction="row" alignItems="center">
            <FormControlLabel control={<Checkbox />} label="Psicólogo" />
            <Tooltip title="Voltado para psicólogos   liberais">
              <Info />
            </Tooltip>
          </Stack>
          <Stack direction="row" alignItems="center">
            <FormControlLabel control={<Checkbox />} label="Medico" />
            <Tooltip title="Voltado para medicos   liberais">
              <Info />
            </Tooltip>
          </Stack>
        </Stack>
        <Stack spacing={3} mt={3}>
          <header>
            <Typography variant="h4">Dados jurídicos</Typography>
            <Typography color="GrayText">
              Preencha todas as informações abaixo
            </Typography>
          </header>
          <Stack spacing={2}>
            <TextField label="CRM" fullWidth />
            <TextField label="CNPJ" fullWidth />
            <TextField label="Inscrição estadual" fullWidth />
          </Stack>
        </Stack>

        <Stack spacing={3} mt={3}>
          <header>
            <Typography variant="h4">Contato</Typography>
            <Typography color="GrayText">
              Preencha todas as informações abaixo
            </Typography>
          </header>
          <Stack spacing={2}>
            <TextField label="Email" fullWidth />
            <TextField label="Whatsapp" fullWidth />
            <TextField label="Telefone (opcional)" fullWidth />
          </Stack>
        </Stack>

        <Stack spacing={3} mt={3}>
          <header>
            <Typography variant="h4">Endereço</Typography>
            <Typography color="GrayText">Onde você atua?</Typography>
          </header>
          <Stack spacing={2}>
            <TextField label="CEP" fullWidth />
            <TextField label="Rua" fullWidth />
            <TextField label="Numero" fullWidth />
            <TextField label="Bairro" fullWidth />
            <TextField label="Complemento" fullWidth />
            <TextField label="Cidade" fullWidth />
          </Stack>
        </Stack>
        <Stack spacing={3} mt={3}>
          <header>
            <Typography variant="h4">Especialidades</Typography>
            <Typography color="GrayText">
              Quais especialidades você atende?
            </Typography>
          </header>
          <Stack spacing={2}>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              defaultValue={[top100Films[13]]}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Especialidades"
                  placeholder="Pesquise as especialidades"
                  fullWidth
                />
              )}
            />
          </Stack>
        </Stack>

        <Stack spacing={3} mt={3}>
          <header>
            <Typography variant="h4">Responsável</Typography>
            <Typography color="GrayText">
              Preencha os dados do responsável legal
            </Typography>
          </header>
          <Stack spacing={2}>
            <TextField label="Nome completo" fullWidth />
            <TextField label="CPF" fullWidth />
            <TextField label="RG" fullWidth />
          </Stack>
        </Stack>

        <Stack mt={6} mb={6} justifyContent="flex-end" direction="row">
          <Button variant="contained" size="large">
            Continuar
          </Button>
        </Stack>
      </Container>
    </main>
  );
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
