import { useState } from 'react';
import clientDetails from '../constants/clientDetails';
import { pinFields } from "../constants/formFields";

const uibaseUrl = process.env.REACT_APP_IDP_UI_BASE_URL;
const authorizeEndpoint = "/authorize";

const fields = pinFields;
let fieldsState = {};
fields.forEach(field => fieldsState["Pin" + field.id] = '');


export default function Login() {
  const [error, setError] = useState(null)

  const handleLogin = (e) => {
    e.preventDefault();
    setError("Authentication failed! Try login with MOSIP")
  }

  let nonce = clientDetails.nonce;
  let clientId = clientDetails.clientId;
  let scope = clientDetails.scope;
  let response_type = clientDetails.response_type;
  let redirect_uri = clientDetails.redirect_uri;
  let display = clientDetails.display;
  let prompt = clientDetails.prompt;
  let acr_values = clientDetails.acr_values;
  let encodedClaims = encodeURI(JSON.stringify(clientDetails.claims));


  let uri_idp_UI = uibaseUrl + authorizeEndpoint
    + "?nonce=" + nonce
    + "&client_id=" + clientId
    + "&scope=" + scope
    + "&response_type=" + response_type
    + "&redirect_uri=" + redirect_uri
    + "&display=" + display
    + "&prompt=" + prompt
    + "&acr_values=" + acr_values
    + "&claims=" + encodedClaims


  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-40 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="util" src="images/util_illustrations.png" />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <img class="mb-8" src='images/Util logo.png' />
            <h1 class="title-font sm:text-4xl text-3xl mb-8 font-medium text-gray-900">Sign in to Util</h1>

            <div class="flex mb-6">
              <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 light:bg-gray-600 light:text-gray-400 light:border-gray-600">
                <img src='images/username_icon.png' />
              </span>
              <input type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder="Username" />
            </div>
            <div class="flex mb-6">
              <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 light:bg-gray-600 light:text-gray-400 light:border-gray-600">
                <img src='images/password_icon.png' />
              </span>
              <input type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder="Password" />
            </div>

            <a href={uri_idp_UI} className="font-medium text-blue-600 hover:text-blue-500">
              <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center light:focus:ring-gray-500 light:hover:bg-[#050708]/30 mr-2 mb-2">
                <img class="mr-2 -ml-1 w-4 h-4" src='images/login_with_mosip_icon.png' />
                Sign in with MOSIP
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}