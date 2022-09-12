import { useState } from 'react';
import clientDetails from '../constants/clientDetails';
import { pinFields } from "../constants/formFields";
import Header from './Header';
import Input from "./Input";

const uibaseUrl = process.env.REACT_APP_IDP_UI_BASE_URL;
const authorizeEndpoint = "/authorize";

const fields = pinFields;
let fieldsState = {};
fields.forEach(field => fieldsState["Pin" + field.id] = '');


export default function LoginBackup() {
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
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div class="grid grid-cols-2 gap-4">
            <div class="col-span-2">
              <Header
                heading="Health Services"
              />
            </div>
            <div className="flex justify-center">
              <img
                alt=""
                src="images/util_illustrations.png" />
            </div>
            <div>
              <form className="mt-8 space-y-6">
                <div className="-space-y-px">
                  {
                    fields.map(field =>
                      <Input
                        key={"Pin_" + field.id}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={"Pin_" + field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                      />

                    )
                  }
                </div>

                <div className="flex items-center justify-between ">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                {
                  error && (
                    <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                      {error}
                    </div>
                  )
                }

                <div>
                  <button className="flex justify-center w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
              </form>

              <div>
                <a href={uri_idp_UI} className="font-medium text-blue-600 hover:text-blue-500">
                  <button className="w-full bg-purple-600 hover:bg-blue-700 text-white font-bold hover:text-white py-2 px-4 border border-blue-700 hover:bg-purple-700 rounded">
                    Login with MOSIP
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}