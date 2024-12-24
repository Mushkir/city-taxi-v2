interface Reservation {
  _id: string;
  driverId?: { name?: string; phone?: string };
  pickupLocation: string;
  dropLocation: string;
  status: string;
  createdAt: Date;
}

export default Reservation;
