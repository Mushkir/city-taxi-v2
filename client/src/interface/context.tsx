interface IContext {
  countOfReservations: number;
  setCountOfReservations: React.Dispatch<
    React.SetStateAction<IContext["countOfReservations"]>
  >;
}

export default IContext;
