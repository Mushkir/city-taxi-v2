import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const createSecretToken = (id) => {
  return jwt.sign({ userId: id }, process.env.JWT_TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

export default createSecretToken;
