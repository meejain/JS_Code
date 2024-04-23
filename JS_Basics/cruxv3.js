// Copyright 2020 Google LLC.
// SPDX-License-Identifier: Apache-2.0

const CrUXApiUtil = {};
// Get your CrUX API key at https://goo.gle/crux-api-key.
CrUXApiUtil.API_KEY = 'AIzaSyCvoXFk31F4fCScVaoDoZiZ-J2pKU7fTHw';
console.log(CrUXApiUtil.API_KEY)
CrUXApiUtil.API_HOST = 'https://chromeuxreport.googleapis.com';
CrUXApiUtil.API_ENDPOINT_PATH = `/v1/records:queryRecord?key=${CrUXApiUtil.API_KEY}`;
CrUXApiUtil.API_ENDPOINT = `${CrUXApiUtil.API_HOST}${CrUXApiUtil.API_ENDPOINT_PATH}`;
console.log(CrUXApiUtil.API_ENDPOINT);


CrUXApiUtil.query = async function (requestBody) {
  if (CrUXApiUtil.API_KEY == '[YOUR_API_KEY]') {
    throw 'Replace YOUR_API_KEY with your private CrUX API key. Get a key ';
  }
  return fetch(CrUXApiUtil.API_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(requestBody)
  }).then(response => response.json()).then(response => {
    if (response.error) {
      return Promise.reject(response);
    }
    return response;
  });
};

CrUXApiUtil.query({
  url: 'https://web.dev'
}).then(response => {
  console.log(JSON.stringify(response));
}).catch(response => {
  console.error(response);
});


