const clientDetails =
{
    nonce: "973eieljzng",
    clientId: "healthservicev1",
    scope: "openid",
    response_type: "code",
    redirect_uri: "http://localhost:5000/userprofile",
    display: "page",
    prompt: "consent",
    acr_values: "mosip:idp:acr:static-code",
    claims: {
        "userinfo": {
            "given_name": {
                "essential": true
            },
            "phone": null,
            "email": {
                "essential": true
            },
            "picture": {
                "essential": false
            },
            "gender": {
                "essential": false
            }
        },
        "id_token": {
        }
    },
    grant_type: "authorization_code",
    client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer"
}
export default clientDetails