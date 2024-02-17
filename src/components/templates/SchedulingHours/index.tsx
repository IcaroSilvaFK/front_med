"use client";

import { CardScheduling } from "@/components/molecules";
import { DateTimeUtil } from "@/utils/DateTime.util";
import { Stack } from "@mui/material";

export function SchedulingHours() {
  const weekDays = DateTimeUtil.genDaysOfWeek();

  return (
    <Stack
      direction="row"
      alignItems="flex-start"
      mt={2}
      justifyContent="space-between"
    >
      {weekDays.map((day) => (
        <CardScheduling key={day.toISOString()} day={day} />
      ))}
    </Stack>
  );
}
