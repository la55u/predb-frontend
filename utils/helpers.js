import { makeHeaders } from "../hooks/useFetch";
import { API_BASE } from "./routes";

export const authFetch = async (path, params = {}) => {
  return new Promise((resolve, reject) => {
    fetch(API_BASE + path, {
      headers: makeHeaders(true),
      ...params,
    })
      .then((response) => {
        if (response.ok) {
          const token = response.headers.get("x-token");
          const refreshToken = response.headers.get("x-refresh-token");
          if (token && refreshToken) {
            localStorage.setItem("auth", JSON.stringify({ token, refreshToken }));
          }

          if (response.status === 204) return {};
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((json) => {
        return resolve(json);
      })
      .catch((error) => {
        console.error(error);
        return reject(error);
      });
  });

  //   try {
  //     fetch(API_BASE + path, {
  //       headers: makeHeaders(true),
  //       ...params,
  //     }).then(res=> {

  //     } res.json())
  //     .then(json=>{

  //     })
  //     if (res.ok) {
  //       const token = res.headers.get("x-token");
  //       const refreshToken = res.headers.get("x-refresh-token");
  //       if (token && refreshToken) {
  //         localStorage.setItem("auth", { token, refreshToken });
  //       }
  //       const json = await res.json();
  //       resolve(json);
  //     }
  //   } catch (error) {
  //     reject({ error: JSON.stringify(error) });
  //     console.error("Error during request:", error);
  //   }
};
