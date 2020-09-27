import { API_BASE } from "./routes";

async function request(endpoint, params, method, extraOptions = {}) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + getToken(),
    },
    mode: "cors", // no-cors, cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, omit
    redirect: "follow", // manual, follow, error
    referrerPolicy: "no-referrer", // no-referrer, client
    ...extraOptions,
  };

  if (params) {
    if (method === "GET") {
      endpoint += "?" + objectToQueryString(params);
    } else {
      options.body = JSON.stringify(params);
    }
  }

  const response = await fetch(API_BASE + endpoint, options);

  let err = "";

  // checking status code
  if (response.ok) {
    try {
      const jsonresp = await response.json();
      if (jsonresp.error) {
        err = jsonresp.error;
      }
    } catch (e) {
      err = `Unexpected status: ${response.status} ${response.statusText}`;
    } finally {
      throw new Error(err);
    }
  }

  // checking json error message
  const result = await response.json();
  if (!result.success) {
    throw new Error(`${result.error}`);
  }

  return result.data;
}

function objectToQueryString(obj) {
  return Object.keys(obj)
    .map((key) => key + "=" + obj[key])
    .join("&");
}

function get(endpoint, params, extraOptions) {
  return request(endpoint, params, "GET", extraOptions);
}

function post(endpoint, params, extraOptions) {
  return request(endpoint, params, "POST", extraOptions);
}

function put(endpoint, params, extraOptions) {
  return request(endpoint, params, "PUT", extraOptions);
}

function del(endpoint, params, extraOptions) {
  return request(endpoint, params, "DELETE", extraOptions);
}

export default {
  get,
  post,
  del,
  put,
};
