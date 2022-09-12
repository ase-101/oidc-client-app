import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import clientDetails from "../constants/clientDetails";
import { generateSignedJwt } from "../services/cryptoService";
import { get_GetUserInfo, post_GetToken } from "../services/oidcService";

export default function UserProfilePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const getSearchParams = async () => {
      let code = searchParams.get("code");
      setError(searchParams.get("error"));
      if (code !== null) {
        callGetToken(code);
      }
    }
    getSearchParams();
  }, [])


  //Handle Login API Integration here
  const callGetToken = async (code) => {
    setError(null)
    setUserInfo(null)

    try {
      let client_id = clientDetails.clientId;
      let redirect_uri = clientDetails.redirect_uri;
      let grant_type = clientDetails.grant_type;
      let client_assertion_type = clientDetails.client_assertion_type;
      let client_assertion = await generateSignedJwt(client_id);

      var tokenResponse = await post_GetToken(code, client_id, redirect_uri, grant_type, client_assertion_type, client_assertion);
      callUserInfo(tokenResponse);
    } catch (errormsg) {
      setError(errormsg.message)
    }
  }

  //Handle Login API Integration here
  const callUserInfo = async (tokens) => {
    setError(null)
    setUserInfo(null)
    try {
      var userInfo = await get_GetUserInfo(tokens.access_token);

      setUserInfo(userInfo)
    } catch (errormsg) {
      setError(errormsg.message)
    }
  }

  let el = (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded bg-opacity-70" >
        <div className="px-4 py-4 flex-auto" >
          <div
            className=" px-4 py-4 flex justify-center">
            <img
              alt="profile picture"
              className="h-30 w-30"
              src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" />
          </div>

          <div className="px-4 py-4">
            <div className="flex justify-center">
              Welcome to Health services
            </div>
            <div className="flex justify-center">
              {userInfo?.given_name}
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div className="flex justify-start">Email Address</div>
            <div className="flex justify-end">{userInfo?.email}</div>
            <div className="flex justify-start">Gender</div>
            <div className="flex justify-end">{userInfo?.gender}</div>
            <div className="flex justify-start">Phone number</div>
            <div className="flex justify-end">{userInfo?.phone}</div>
            <div className="flex justify-start">Birth Date</div>
            <div className="flex justify-end">{userInfo?.birthdate}</div>
          </div>
        </div>
      </div>
      {
        error && (
          <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
            Error: {error}
          </div>
        )
      }
    </>
  )

  return el;
}