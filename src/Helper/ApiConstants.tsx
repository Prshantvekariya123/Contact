const BASE_URL = " https://api-im.chatdaddy.tech/";
const ACCESS_TOKEN_URL = "https://api-teams.chatdaddy.tech/token";

const GET = "get";
const POST = "post";
const PUT = "put";
const DELETE = "delete";
const PATCH = "patch";

const apiConst = {
  getToken: ACCESS_TOKEN_URL,
  getContact: `${BASE_URL}contacts`,
  getContactImage: `${BASE_URL}contacts`,
  deleteContact: `${BASE_URL}contacts`,
  updategetContact: `${BASE_URL}contacts`,
  addContact: `${BASE_URL}contacts/upsert`,
};

const refreshToken = {
  refreshToken: "059c420e-7424-431f-b23b-af0ecabfe7b8",
  teamId: "a001994b-918b-4939-8518-3377732e4e88",
};

export { GET, POST, PUT, DELETE, PATCH, apiConst, refreshToken };
