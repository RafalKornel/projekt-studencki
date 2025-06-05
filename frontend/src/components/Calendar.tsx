"use client";

import "react-big-calendar/lib/css/react-big-calendar.css";

import {
  Calendar as CalendarInternal,
  dayjsLocalizer,
} from "react-big-calendar";
import dayjs from "dayjs";
import { AppointmentType } from "@/types";

type Props = {
  events: AppointmentType[];
};

const localizer = dayjsLocalizer(dayjs);

export const Calendar = ({ events }: Props) => (
  <div>
    <CalendarInternal
      localizer={localizer}
      events={events}
      startAccessor="startTime"
      endAccessor="endTime"
      min={new Date("2000-01-01T05:00:00.0000Z")}
      max={new Date("2000-01-01T15:00:00.0000Z")}
      titleAccessor={(a) => a.service.name}
      popup
      popupOffset={100}
      step={60}
      style={{ height: 500 }}
    />
  </div>
);
