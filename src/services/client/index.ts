import { ICreateCliente, ICreateClientePost } from "../../types/createCliente";
import { ILogin } from "../../types/login";
import { ISignUp } from "../../types/signup";
import { api } from "../api";

export async function createClient(
  data: ICreateClientePost,
  token: string
): Promise<any> {
  return await api.post("/api/client", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getAllClients(data: ILogin): Promise<any> {
  return await api.post("/auth/login", data);
}
