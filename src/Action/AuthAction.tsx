import { apiConst, POST, refreshToken } from "../Helper/ApiConstants";
import makeAPIRequest from "../Helper/Global";

export const getAccessToken = async () =>
  makeAPIRequest({
    method: POST,
    url: apiConst.getToken,
    data: refreshToken,
    params: null,
  });
