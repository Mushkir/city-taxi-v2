const sendEmail = async (
  userEmail: any,
  userName: any,
  driverName?: any,
  taxiNumber?: any,
  driverContactNo?: any
) => {
  let data = {};

  if (driverName && taxiNumber && driverContactNo) {
    data = {
      service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      user_id: import.meta.env.VITE_EMAILJS_USER_PUBLIC_KEY,
      template_params: {
        to_email: userEmail,
        from_email: import.meta.env.VITE_SENDER_GMAIL_ADDRESS,
        message: `Dear ${userName}! Your request has been accepted. Here the details of the Driver:
        Name: ${driverName}
        Contact No: ${driverContactNo}
        Taxi Number: ${taxiNumber}
        `,
      },
    };
  } else {
    data = {
      service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      user_id: import.meta.env.VITE_EMAILJS_USER_PUBLIC_KEY,
      template_params: {
        to_email: userEmail,
        from_email: import.meta.env.VITE_SENDER_GMAIL_ADDRESS,
        message: `Dear ${userName}! Unfortunately your request has been rejected by driver due to unavailability. Please try another driver. Thank you!`,
      },
    };
  }

  try {
    const response = await fetch(import.meta.env.VITE_EMAILJS_RESOURCE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
// For further info for config & setup Email service: https://www.emailjs.com/docs/rest-api/send/
