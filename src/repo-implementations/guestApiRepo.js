import { createGuest } from "../types/Guest";

const guestEndpoint = "guests";

export default class GuestApiRepo {
  /** @type {WebApiContext}*/
  #apiContext;

  constructor({ apiContext }) {
    this.#apiContext = apiContext;
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
    const json = await this.#apiContext.get(guestEndpoint);
    return Array.from(json, this.#mapJsonToGuest);
  }

  async getGuestById(id) {
    const json = await this.#apiContext.get(`${guestEndpoint}/${id}`);
    return this.#mapJsonToGuest(json);
  }
}
