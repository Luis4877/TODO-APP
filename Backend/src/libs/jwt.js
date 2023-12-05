//import 'dotenv/config'
import jwt from "jsonwebtoken";
export async function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.VITE_JWT_SECRET_KEY,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) reject(err);

        resolve(token);
      }
    );
  });
}
