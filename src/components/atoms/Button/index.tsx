import { Button as MUIButton, ButtonProps } from "@mui/material";

type Props = ButtonProps;

export function Button(props: Props) {
  const { children, ...rest } = props;

  return (
    <MUIButton {...rest} disableElevation>
      {children}
    </MUIButton>
  );
}
