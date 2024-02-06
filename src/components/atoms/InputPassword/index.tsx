"use client";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { useState } from "react";

export function InputPassword(props: TextFieldProps) {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  return (
    <TextField
      label="Password"
      type="password"
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setIsVisiblePassword((prev) => !prev)}>
              {isVisiblePassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
}
