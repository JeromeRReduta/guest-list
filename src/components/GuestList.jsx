import { useContext } from "react";
import { GuestContext } from "../contexts/GuestContext";
import useGuestList from "../hooks/useGuestList";
import useSelectedGuest from "../hooks/useSelectedGuest";

import "./guest-list.css";

export default function GuestList() {
  const { guestList, selectedId, setSelectedId } = useContext(GuestContext);
  useGuestList();
  useSelectedGuest({ selectedId });
  const guestListData = guestList?.map((guest) => (
    <tr key={guest.id} onClick={() => setSelectedId(guest.id)}>
      <td>{guest.name}</td>
      <td>{guest.email}</td>
      <td>{guest.phone}</td>
    </tr>
  ));
  return (
    <table>
      <tbody>{guestListData}</tbody>
    </table>
  );
}
