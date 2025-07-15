export default class TrySelectGuest {
  #guestRepo;
  constructor({ guestRepo }) {
    this.#guestRepo = guestRepo;
  }

  async handle({ id }) {
    try {
      const result = await this.#guestRepo.getGuestById(id);
      return result;
    } catch (e) {
      console.error(`Error finding guest w/ id ${id}`);
      return null;
    }
  }
}
