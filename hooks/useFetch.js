import { useEffect, useState } from "react";
import { API_BASE } from "../utils/routes";

// const useFetch = (initialUrl, initialParams = {}, auth = false) => {
//   const [url, updateUrl] = useState(initialUrl);
//   const [params, updateParams] = useState(initialParams);
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [hasError, setHasError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const queryString = Object.keys(params)
//     .map((p) => encodeURIComponent(p) + "=" + encodeURIComponent(params[p]))
//     .join("&");

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetch(`${API_BASE}${url}${queryString}`, {
//           headers: makeHeaders(auth),
//         });
//         const result = await response.json();
//         if (response.ok) {
//           setData(result);
//           const token = response.headers.get("x-token");
//           const refreshToken = response.headers.get("x-refresh-token");
//           if (token && refreshToken) {
//             localStorage.setItem("auth", { token, refreshToken });
//           }
//         } else {
//           setHasError(true);
//           setErrorMessage(result);
//         }
//       } catch (err) {
//         setHasError(true);
//         setErrorMessage(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, [url, params]);

//   return {
//     data,
//     isLoading,
//     hasError,
//     errorMessage,
//     updateUrl,
//     updateParams,
//   };
// };

export const makeHeaders = (auth = false) => {
  if (!auth) {
    // normal header
    return { "Content-Type": "application/json" };
  }
  try {
    // include tokens in header
    const t = JSON.parse(localStorage.getItem("auth"));
    return {
      "Content-Type": "application/json",
      "x-token": t.token,
      "x-refresh-token": t.refreshToken,
    };
  } catch (error) {
    console.error(error);
    return {};
  }
};

// export default useFetch;
