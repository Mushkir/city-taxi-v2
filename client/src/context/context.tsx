import { createContext } from "react";

type ContextType = {
  countOfReservations: number;
  setCountOfReservations: (count: number) => void;
  countReservations?: () => void;
};

const Context = createContext<ContextType>({
  countOfReservations: 0,
  setCountOfReservations: () => {},
});

export default Context;
