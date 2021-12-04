import { apiConst, GET, POST, PATCH, DELETE } from "../Helper/ApiConstants";
import makeAPIRequest from "../Helper/Global";

export const addContact = async (data: unknown) =>
  makeAPIRequest({
    method: POST,
    url: apiConst.addContact,
    data,
    params: null,
  });

export const getContactList = async () =>
  makeAPIRequest({
    method: GET,
    url: apiConst.getContact,
    data: null,
    params: null,
  });

export const updateContact = async (data: unknown) =>
  makeAPIRequest({
    method: PATCH,
    url: apiConst.updategetContact,
    data,
    params: null,
  });

export const deleteContact = async (data: unknown) =>
  makeAPIRequest({
    method: DELETE,
    url: apiConst.deleteContact,
    data,
    params: null,
  });

export const getContactImage = async (id: unknown) =>
  makeAPIRequest({
    method: GET,
    url: `${apiConst.getContactImage}/${id}/image`,
    data: null,
    params: null,
  });
