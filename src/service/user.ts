import axios from "axios";

interface LoginParam {
  Username: string
  Password: string
}

export async function Login(param: LoginParam) {
  return axios.post("login", param);
}

interface RegisterParam {
  Username: string
  Password: string
}

export async function Register(param: RegisterParam) {
  return null;
}