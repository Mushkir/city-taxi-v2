interface RequestsDetail {
  _id: string;
  passengerId?: { name?: string; email?: string };
  pickupLocation: string;
  dropLocation: string;
}

export default RequestsDetail;
