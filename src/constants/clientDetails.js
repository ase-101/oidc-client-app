const clientDetails =
{
    nonce: "973eieljzng",
    clientId: "HS-01",
    scope: "resident-service openid",
    response_type: "code",
    redirect_uri: "http://localhost:5000/userprofile",
    display: "page",
    prompt: "consent",
    acr_values: "level0",
    claims: "%7B%22userinfo%22%3A%7B%22given_name%22%3A%7B%22essential%22%3Atrue%7D%2C%22nickname%22%3Anull%2C%22email%22%3A%7B%22essential%22%3Atrue%7D%2C%22email_verified%22%3A%7B%22essential%22%3Atrue%7D%2C%22picture%22%3Anull%7D%2C%22id_token%22%3A%7B%22auth_time%22%3A%7B%22essential%22%3Atrue%7D%2C%22acr%22%3A%7B%22values%22%3A%5B%22urn%3Amace%3Aincommon%3Aiap%3Asilver%22%5D%7D%7D%7D",
    grant_type: "authorization_code",
    client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
    client_assertion: "asdfasdf123asdf"
}

export default clientDetails