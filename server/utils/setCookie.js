const setCookie = async (req, res, token) => {
  res.cookie("token", token, {
    expires: new Date(Date.now() + 86400000), // Cookie expires in 1 day
    secure: true, // Cookie will only be sent over HTTPS
    httpOnly: true, // Cookie cannot be accessed via client-side scripts
  });
};

export default setCookie;
