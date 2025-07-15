import { useContext } from "react";
import GuestList from "./components/GuestList";
import { GuestContext } from "./contexts/GuestContext";
import GuestDetails from "./components/GuestDetails";

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
  const { selectedGuest } = useContext(GuestContext);
  return selectedGuest ? <GuestDetails /> : <GuestList />;
}
