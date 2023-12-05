//import 'dotenv/config'
import User from "../models/user.model.js";
import { createAccessToken } from "../libs/jwt.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (userFound) return res.status(400).json(["correo ya usado"]);
    //cifrado de contraseña
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({
      id: userSaved._id,
    });
    /*
    res.writeHead(201,{
      "Authorization":`Bearer ${token}`, 
      "id":userSaved._id,
      "username":userSaved.username,
      "email":userSaved.email 
    })
  */

    res.body({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      token: token,
    });

    /*
    res.json({
    ,
    });*/
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  res.end();
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (!userFound)
      return res.status(400).json({ message: "Usuario no encontrado" });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Credenciales Incorrectas" });

    const token = await createAccessToken({
      id: userFound._id,
    });

    /*

    res.writeHead(201,{
      "Authorization":`Bearer ${token}`,
      "id":userFound._id,
      "username":userFound.username,
      "email":userFound.email 
    })*/

    res.status(200).json({
      id: userFound._id,
      username: userFound.username,
      Authorization: token,
      email: userFound.email,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  res.end();
};

export const logout = (req, res) => {
  return res.sendStatus(204);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound)
    return res.status(400).json({ message: "Credenciales invalidas" });
  return res.status(200).json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
  });
};

export const verifyToken = async (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  // console.log(`TOKEN VERIFICADO:${token}`)
  if (!token) return res.status(401).json({ message: "No autorizado " });

  jwt.verify(token, process.env.VITE_JWT_SECRET_KEY, async (err, user) => {
    if (err) return res.status(401).json({ message: "No autorizado " });

    const userFound = await User.findById(user.id);
    if (!userFound) return res.status(401).json({ message: "No autorizado " });

    return res.status(200).json({
      token: token,
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};
