import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import clientDetails from "../constants/clientDetails";
import { generateSignedJwt } from "../services/cryptoService";
import { post_GetToken } from "../services/oidcService";

export default function UserProfilePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [code, setCode] = useState(null);
  const [error, setError] = useState(null);
  const [tokens, setTokens] = useState(null);

  const handleGetToken = (e) => {
    e.preventDefault();
    callGetToken();
  }

  useEffect(() => {
    const getSearchParams = async () => {
      setCode(searchParams.get("code"));
      setError(searchParams.get("error"));
    }

    getSearchParams();
  }, [])


  //Handle Login API Integration here
  const callGetToken = async () => {
    try {
      let client_id = clientDetails.clientId;
      let redirect_uri = clientDetails.redirect_uri;
      let grant_type = clientDetails.grant_type;
      let client_assertion_type = clientDetails.client_assertion_type;
      let client_assertion = await generateSignedJwt(client_id);

      console.log(client_assertion);

      var tokenResponse = await post_GetToken(code, client_id, redirect_uri, grant_type, client_assertion_type, client_assertion);

      setError(null)
      setTokens(tokenResponse)

    } catch (errormsg) {
      setError(errormsg)
    }
  }

  let el = (
    <>
      <div>
        <span>Authurization Code = {code}</span>
        <button className="flex justify-center w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={handleGetToken}
        >
          Get Tokens
        </button>
      </div>
      {
        tokens && (
          <ul>
            <li><b>id_token : </b>{tokens.id_token}</li>
            <li><b>token_type : </b>{tokens.token_type}</li>
            <li><b>access_token : </b>{tokens.access_token}</li>
            <li><b>expires_in : </b>{tokens.expires_in}</li>
          </ul>
        )
      }
      {
        error && (
          <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
            Error: {error?.message}
          </div>
        )
      }

    </>
  )

  return el;
}