import WebApiDbContext from "./apis/WebApiDbContext";
import GuestList from "./components/GuestList";
import GuestProvider from "./contexts/GuestContext";

/**
 * @typedef {Object} Guest
 * @property {Number} id
 * @property {string} name
 * @property {string} email
 * @property {string} phone
 * @property {string} bio
 * @property {string} job
 */

export default function App() {
  return (
    <>
      <GuestProvider>
        <GuestList />
      </GuestProvider>
    </>
  );
}
