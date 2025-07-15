export default class WebApiDbContext {
  #url;

  constructor({ url }) {
    this.#url = url ?? "";
  }

  async get(endpoint = "") {
    const response = await fetch(`${this.#url}/${endpoint}`);
    console.log("URL IS:", this.#url, endpoint);
    if (!response.ok) {
      throw new Error("Error with GET request");
    }
    return (await response.json()).data;
  }

  /** TODO: add post, delete, put/patch as needed */
}
