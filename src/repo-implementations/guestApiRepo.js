const guestEndpoint = "guests";

export default class GuestApiRepo {
  /** @type {WebApiContext}*/
  #apiBase;

  constructor({ api }) {
    this.#apiBase = api;
  }

  async getGuests() {
    const response = await this.#apiBase.get(guestEndpoint);
  }

  async getGuestById(id) {
    return await this.#apiBase.getGuestById(`${guestEndpoint}/${id}`);
  }
}
