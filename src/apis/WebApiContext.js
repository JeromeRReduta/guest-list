export default class WebApiContext {
  #url;

  constructor({ url }) {
    this.#url = url ?? "";
  }

  async get(endpoint = "") {
    const response = await fetch(`${this.#url}/${endpoint}`);
    if (!response.ok) {
      throw new Error("Error with GET request");
    }
    return (await response.json()).data;
  }

  /** TODO: add post, delete, put/patch as needed */
}
