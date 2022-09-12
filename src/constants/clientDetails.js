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
    claims: {
        "userinfo": {
            "given_name": {
                "essential": true
            },
            "nickname": null,
            "email": {
                "essential": true
            },
            "email_verified": {
                "essential": true
            },
            "picture": {
                "essential": false
            },
            "gender": {
                "essential": false
            },
            "http://example.info/claims/groups": null
        },
        "id_token": {
            "auth_time": {
                "essential": true
            },
            "acr": {
                "values": [
                    "urn:mace:incommon:iap:silver"
                ]
            }
        }
    },
    grant_type: "authorization_code",
    client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer"
}

export default clientDetails