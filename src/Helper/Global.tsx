import axios from "axios";

export type Method =
  | "get"
  | "GET"
  | "delete"
  | "DELETE"
  | "head"
  | "HEAD"
  | "options"
  | "OPTIONS"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH"
  | "purge"
  | "PURGE"
  | "link"
  | "LINK"
  | "unlink"
  | "UNLINK";

const refreshToken = localStorage.getItem("tokenId");

interface ApiProps {
  method: Method;
  url: string;
  data: any;
  params: any;
  headers: { Authorization: string; "Content-Type": string };
}

async function makeAPIRequest({
  method,
  url,
  data,
  params,
}: {
  method: Method;
  url: string;
  data: any;
  params: any;
}): Promise<any> {
  return new Promise(async (resolve, reject) => {
    const options: ApiProps = {
      method,
      url,
      data,
      headers: {
        Authorization: `Bearer ${refreshToken}`,
        "Content-Type": "application/json",
      },
      params,
    };

    axios(options)
      .then(async (response: any) => {
        if (response?.status === 200 || response?.status === 201) {
          resolve(response);
        }
        reject(response);
      })
      .catch(async (error: any) => {
        reject(error);
      });
    return null;
  });
}

export default makeAPIRequest;
