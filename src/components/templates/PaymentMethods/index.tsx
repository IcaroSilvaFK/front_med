"use client";
import { Info } from "@mui/icons-material";
import {
  Avatar,
  Card,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { forwardRef, useState } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumericFormatCustom = forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
        prefix="R$"
      />
    );
  }
);

export function PaymentMethods() {
  const { palette } = useTheme();
  const [value, setValue] = useState("12312312312");

  return (
    <Stack>
      <Card variant="outlined" sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar sx={{ width: 60, height: 60 }}>I</Avatar>
            <Stack>
              <Typography variant="subtitle1" fontWeight="bold">
                Icaro Vieira
              </Typography>
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <Typography color="GrayText" variant="body2">
                  Teste
                </Typography>
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: palette.primary.main,
                  }}
                />
                <Typography color="GrayText" variant="body2">
                  •••••••
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Card
            variant="outlined"
            sx={{
              borderRadius: `10px`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 1,
              gap: 1,
            }}
          >
            <Typography>Valor do exame</Typography>
            <TextField
              value={value}
              onChange={(e) => setValue(e.target.value)}
              name="numberformat"
              id="formatted-numberformat-input"
              InputProps={{
                inputComponent: NumericFormatCustom as any,
              }}
              variant="standard"
            />
          </Card>
        </Stack>
      </Card>
    </Stack>
  );
}
