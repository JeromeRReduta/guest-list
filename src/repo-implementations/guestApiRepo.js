import { createGuest } from "../types/Guest";

const guestEndpoint = "guests";

export default class GuestApiRepo {
  /** @type {WebApiContext}*/
  #api;

  constructor({ api }) {
    this.#api = api;
  }

  #mapJsonToGuest(json) {
    return createGuest({
      id: json.id,
      name: json.name,
      email: json.email,
      phone: json.phone,
      bio: json.bio,
      job: json.job,
    });
  }

  async getGuests() {
    const json = await this.#api.get(guestEndpoint);
    return Array.from(json, this.#mapJsonToGuest);
  }

  async getGuestById(id) {
    const json = await this.#api.get(`${guestEndpoint}/${id}`);
    return this.#mapJsonToGuest(json);
  }
}
