interface RequestsDetail {
  _id: string;
  passengerId?: { name?: string };
  pickupLocation: string;
  dropLocation: string;
}

export default RequestsDetail;
