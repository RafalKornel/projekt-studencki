export type ServiceType = {
  id: number;
  name: string;
  description: string;
  duration: number;
};


export type AppointmentType = {
  id: number;
  patientId: number;
  doctorId: number;
  service: ServiceType;
  startTime: Date;
  endTime: Date;
  status: string;
  reservationDate: Date;
  confirmationDate?: Date | null;
  completionDate?: Date | null;
  cancellationDate?: Date | null;
}