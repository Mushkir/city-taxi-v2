import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IoCloseSharp } from "react-icons/io5";
import TheReadOnlyLabel from "./TheReadOnlyLabel";
import apiEndPoint from "../common/apiEndPoint";
import TheTextInput from "./TheTextInput";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface TheReservationModalProps {
  onClose: () => void;
}

const TheReservationModal: FunctionComponent<TheReservationModalProps> = ({
  onClose,
}) => {
  const schema = z.object({
    dropLocation: z
      .string()
      .min(4, { message: "Drop location must be at least 04 characters" })
      .max(15, { message: "Drop location must be at least 15 characters" }),
  });

  type ValidationSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(schema),
  });

  const currentUser = useSelector((state: RootState) => state?.user);
  const driverId = useSelector(
    (state: RootState) => state?.reservation?.driverId
  );

  const [driverCityName, setDriverCityName] = useState("");

  const getSelectedDriverDetail = async () => {
    try {
      const response = await fetch(apiEndPoint.getSelectedDriverDetail.url, {
        method: apiEndPoint.getSelectedDriverDetail.method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: driverId }),
      });

      const respData = await response.json();
      if (!respData?.error) {
        setDriverCityName(respData?.data);
      }
      // console.log(respData?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit: SubmitHandler<ValidationSchemaType> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    getSelectedDriverDetail();
  }, [driverId]);

  return (
    <div className="fixed w-full h-full top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-slate-200 bg-opacity-90 p-1">
      <div className="bg-black w-full max-w-lg rounded-md overflow-hidden">
        <div className="p-3 flex justify-between items-center">
          <h3 className="text-lg text-white font-semibold">
            The Taxi Fair Reservation
          </h3>

          <div
            onClick={() => onClose()}
            className="text-white text-lg hover:bg-white hover:text-black rounded-full cursor-pointer transition-all"
          >
            <IoCloseSharp />
          </div>
        </div>

        <form
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          className="mt-1 bg-yellow-600"
        >
          <div className="p-3">
            <TheReadOnlyLabel
              name="name"
              label="Passenger Name"
              value={currentUser?.name}
            />

            {/* Passenger Contact no */}
            <TheReadOnlyLabel
              name="contactNo"
              label="Passenger Contact No:"
              value={currentUser?.phone}
            />

            {/* Pick up Location */}
            <TheReadOnlyLabel
              name="pickUpLocation"
              label="Pick-up Location"
              value={driverCityName}
            />

            <TheTextInput
              label={"Drop Location"}
              id="dropLocation"
              placeholder="Enter your drop location"
              register={register("dropLocation")}
              errors={errors.dropLocation}
              required
            />
          </div>

          <button className=" bg-black text-white w-full p-2 hover:opacity-90 transition-all">
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default TheReservationModal;
