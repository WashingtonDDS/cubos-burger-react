import api from "../services/api";

export const makeRequest = async (
  url: string,
  method: string,
  data?: object
) => {
  try {
    const Response = await api({
      url,
      method,
      data,
    });
    return Response.data;
  } catch (error) {
    alert("Ocorreu um erro, tente mais tarde!");
    console.log(error);
  }
};
