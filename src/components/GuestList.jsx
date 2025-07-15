import { useContext } from "react";
import { GuestContext } from "../contexts/GuestContext";

export default function GuestList() {
  const { guestList, useGuestList, useSelectedGuest, setSelectedId } =
    useContext(GuestContext);
  useGuestList();
  useSelectedGuest({ selectedId: null });
  const guestListData = guestList?.map((guest) => (
    <tr key={guest.id} onClick={() => setSelectedId(guest.id)}>
      <td>{guest.name}</td>
      <td>{guest.id}</td>
      <td>{guest.job}</td>
    </tr>
  ));
  return (
    <table>
      <tbody>{guestListData}</tbody>
    </table>
  );
}
