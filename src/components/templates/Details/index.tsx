"use client";

import { Button } from "@/components/atoms";
import { CardDoctor, CardDoctorSelectable } from "@/components/molecules";
import { MedicalServices, Search } from "@mui/icons-material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  InputAdornment,
  Slide,
  Stack,
  TextField,
} from "@mui/material";
import { faker } from "@faker-js/faker";

import styles from "./styles.module.scss";
import { useBoolean } from "@/hooks";
import { forwardRef, useCallback, useState } from "react";
import { TransitionProps } from "@mui/material/transitions";

const genMock = () => {
  const data = Array.from({ length: 10 }).map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    specialty: faker.person.jobTitle(),
    avatar: faker.image.avatar(),
    rating: faker.string.hexadecimal(),
  }));

  return data;
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const modal = genMock();
const cards = genMock();

export function Details() {
  const [
    isOpenModalAddNewDoctor,
    handleOpenModalAddNewDoctor,
    handleCloseModalAddNewDoctor,
  ] = useBoolean();

  const [items, setItems] = useState<string[]>([]);
  const [doctors, setDoctors] = useState(cards);
  const [search, setSearch] = useState<string>("");

  const filteredDoctors = search
    ? doctors.filter((doc) =>
        doc.name.toLowerCase().includes(search.toLowerCase())
      )
    : doctors;

  const onRequestDelete = useCallback((id: string) => {
    setDoctors((prev) => prev.filter((doc) => doc.id !== id));
  }, []);

  const onSelectNewDoctor = useCallback(
    (id: string) => {
      if (items.includes(id)) {
        setItems((prev) => prev.filter((doc) => doc !== id));
        return;
      }
      setItems((prev) => [...prev, id]);
    },
    [items]
  );

  const onRequestAddDoctor = useCallback(() => {
    const newDoctos = modal.filter((doc) => items.includes(doc.id));

    setDoctors((prev) => [...prev, ...newDoctos]);
    handleCloseModalAddNewDoctor();
  }, [items, handleCloseModalAddNewDoctor]);

  return (
    <Stack mt={2}>
      <TextField
        fullWidth
        placeholder="Pesquise o tipo de exame"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ maxWidth: "700px" }}
      />

      <section className={styles.container}>
        <Button
          variant="outlined"
          size="large"
          startIcon={<MedicalServices />}
          sx={{ py: 2, px: 4 }}
          onClick={handleOpenModalAddNewDoctor}
        >
          Vincular profissionais
        </Button>
        {filteredDoctors.map((doc) => (
          <CardDoctor
            key={doc.id}
            name={doc.name}
            specialty={doc.specialty}
            avatar={doc.avatar}
            crm={doc.rating}
            hasButtonDelete
            onRequestDelete={() => onRequestDelete(doc.id)}
          />
        ))}
      </section>

      <Dialog
        open={isOpenModalAddNewDoctor}
        onClose={handleCloseModalAddNewDoctor}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth="md"
      >
        <DialogContent>
          <TextField placeholder="Buscar profissionais" fullWidth />
          <section className={styles.grid__modal}>
            {modal.map((doc) => (
              <CardDoctorSelectable
                key={doc.id}
                name={doc.name}
                specialty={doc.specialty}
                avatar={doc.avatar}
                crm={doc.rating}
                onClick={() => onSelectNewDoctor(doc.id)}
                isActive={items.includes(doc.id)}
              />
            ))}
          </section>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onRequestAddDoctor}
            variant="contained"
            size="large"
            disabled={!items.length}
          >
            {items.length} Selecionados
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
