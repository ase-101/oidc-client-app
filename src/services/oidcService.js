import axios from "axios";

const baseUrl = process.env.REACT_APP_IDP_BASE_URL;
const getTokenEndPoint = "/oauth/token";


const post_GetToken = async (
  code,
  client_id,
  redirect_uri,
  grant_type,
  client_assertion_type,
  client_assertion
) => {
  let request = new URLSearchParams({
    code: code,
    client_id: client_id,
    redirect_uri: redirect_uri,
    grant_type: grant_type,
    client_assertion_type: client_assertion_type,
    client_assertion: client_assertion,
  })

  const endpoint = baseUrl + getTokenEndPoint;
  const response = await axios.post(endpoint, request, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return response.data;
};

export { post_GetToken }