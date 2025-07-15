/**
 * @typedef {Object} Guest
 * @property {Number} id
 * @property {string} name
 * @property {string} email
 * @property {string} phone
 * @property {string} bio
 * @property {string} job
 */

export function createGuest({ id, name, email, phone, bio, job }) {
  return {
    id: id,
    name: name,
    email: email,
    phone: phone,
    bio: bio,
    job: job,
  };
}
