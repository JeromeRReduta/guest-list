import WebApiContext from "./apis/WebApiContext";

/**
 * @typedef {Object} Guest
 * @property {Number} id
 * @property {string} name
 * @property {string} email
 * @property {string} phone
 * @property {string} bio
 * @property {string} job
 */

const apiBase =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2504-ftb-et-web-pt";

export default function App() {
  const func = async () => {
    await test();
  };
  func();
  return (
    <>
      <div>aah</div>
    </>
  );
}

async function test() {
  const api = new WebApiContext({ url: apiBase });
  console.log(await api.get("guests"));
  console.log(await api.get("guests/4829"));
}
