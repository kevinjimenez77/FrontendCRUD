import axios from "axios";

export function request(method, url, data = {}, headers = {}, params = {}) {
  return new Promise(async (resolve, reject) => {
    axios({ method, url, data, params, headers })
      .then((response) => resolve(response.data))
      .catch((error) => {
        reject({
          message: "Ocurrio un error",
        });
      });
  });
}
