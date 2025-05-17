import { instance } from "@services/axios.custom";
import { ApiResponseDefault } from "@utils/response";

const apiGetUsers = async () => {
  const enpoint: string = "/users";
  try {
    const res: ApiResponseDefault = await instance.get(enpoint);
    if (res.status < 400) {
      return res.data;
    }
  } catch (error) {
    // Optionally handle error, e.g. log or rethrow
    console.error(error);
  }
  return null;
};

export { apiGetUsers };
