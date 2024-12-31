import { createContext } from "react";

type ContextType = {
  countOfReservations: number;
  noOfNewReservationRequest: number;
  setCountOfReservations: (count: number) => void;
  countReservations?: () => void;
  countNewReservationRequest?: () => void;
};

const Context = createContext<ContextType>({
  countOfReservations: 0,
  noOfNewReservationRequest: 0,
  countNewReservationRequest: () => {},
  setCountOfReservations: () => {},
});

export default Context;
