import { createContext } from "react";

interface AllReservation {
  _id: string;
  driverId?: { _id: string };
  dropLocation: string;
  passengerId: string;
  status: string;
}

type ContextType = {
  countOfReservations: number;
  noOfNewReservationRequest: number;
  allReservationData: Array<AllReservation>;
  setCountOfReservations: (count: number) => void;
  countReservations?: () => void;
  countNewReservationRequest?: () => void;
  getAllReservationDetails?: () => void;
};

const Context = createContext<ContextType>({
  countOfReservations: 0,
  noOfNewReservationRequest: 0,
  allReservationData: [],
  countNewReservationRequest: () => {},
  setCountOfReservations: () => {},
  getAllReservationDetails: () => {},
});

export default Context;
