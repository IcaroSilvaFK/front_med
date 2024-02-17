"use client";
import { DateTimeUtil } from "@/utils/DateTime.util";
import { StringUtil } from "@/utils/String.util";
import { Chip, Divider, Stack, Typography } from "@mui/material";
import { LocalizationProvider, MobileTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Button } from "@/components/atoms";
import { Add } from "@mui/icons-material";
import { useBoolean } from "@/hooks";
import { ptBR } from "@mui/x-date-pickers/locales";

type Props = {
  day: Date;
};

const ptBRLocationText =
  ptBR.components.MuiLocalizationProvider.defaultProps.localeText;

export function CardScheduling(props: Props) {
  const { day } = props;

  const [addMore, handleOpenAddMode, handleCloseAddMore] = useBoolean();
  const [isOpenScheduling, , , handleToggleScheduling] = useBoolean();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack justifyContent="center" alignItems="center">
        <Chip
          key={day.getTime()}
          label={StringUtil.capitalize(DateTimeUtil.formatDayOfWeek(day))}
          size="medium"
          variant="outlined"
          sx={{
            fonSize: 16,
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            fontSize: "1rem",
            ".MuiChip-label": {
              padding: 0,
            },
          }}
          onClick={handleToggleScheduling}
        />

        <Stack py={2} px={2}>
          {isOpenScheduling && (
            <>
              <Stack spacing={2}>
                <MobileTimePicker
                  label="De"
                  sx={{ maxWidth: "120px" }}
                  defaultValue={dayjs(day)}
                  localeText={ptBRLocationText}
                />
                <MobileTimePicker
                  label="Até"
                  sx={{ maxWidth: "120px" }}
                  defaultValue={dayjs(day)}
                  localeText={ptBRLocationText}
                />
              </Stack>
              {!addMore && (
                <Button
                  sx={{ mt: 2, padding: 0 }}
                  variant="text"
                  startIcon={<Add />}
                  onClick={handleOpenAddMode}
                >
                  Horários
                </Button>
              )}
              {addMore && (
                <>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Divider sx={{ flex: 1 }} />
                    <Typography color="GrayText" fontSize="18px">
                      e
                    </Typography>
                    <Divider sx={{ flex: 1 }} />
                  </Stack>
                  <Stack spacing={2}>
                    <MobileTimePicker
                      label="De"
                      sx={{ maxWidth: "120px" }}
                      defaultValue={dayjs(day)}
                      localeText={ptBRLocationText}
                    />
                    <MobileTimePicker
                      label="Até"
                      sx={{ maxWidth: "120px" }}
                      defaultValue={dayjs(day)}
                      localeText={ptBRLocationText}
                    />
                  </Stack>
                </>
              )}
            </>
          )}
        </Stack>
      </Stack>
    </LocalizationProvider>
  );
}
