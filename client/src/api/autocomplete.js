import { apiHost } from "../config";

export async function getAutocomplete(queryText) {
  const res = await fetch(
    apiHost + `/autocomplete?query=${queryText}`,
    {
      method: "GET"
    }
  );
  return await handleResponse(res);
}

async function handleResponse(response) {
  if(!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data;
}