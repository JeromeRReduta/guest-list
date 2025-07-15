const guestEndpoint = "guests";

export default class GuestApiRepo {
  /** @type {WebApiContext}*/
  #api;

  constructor({ api }) {
    this.#api = api;
  }

  async getGuests() {
    return await this.#api.get(guestEndpoint);
  }

  async getGuestById(id) {
    return await this.#api.get(`${guestEndpoint}/${id}`);
  }
}
