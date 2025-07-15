import { useContext } from "react";
import { GuestContext } from "../contexts/GuestContext";
import TryDeselectGuest from "../use-cases/TryDeselectGuest";

function handleClick({ handler }) {}

export default function GuestDetails() {
  const { selectedGuest, setSelectedId, setSelectedGuest } =
    useContext(GuestContext);
  const handler = new TryDeselectGuest();

  return (
    <>
      <div className="guest-details">
        <p>
          <strong>{selectedGuest.name}</strong> ({selectedGuest.job})
        </p>
        <p>Phone Number: {selectedGuest.phone}</p>
        <p>E-mail: {selectedGuest.email}</p>
        <p>{selectedGuest.bio}</p>
      </div>
      <button
        onClick={() => {
          const deselected = handler.handle();
          setSelectedId(deselected);
          setSelectedGuest(deselected);
        }}
      >
        Go back
      </button>
    </>
  );
}

/**

- If a guest is selected, the app renders details about the selected guest.
- If a guest is selected, a "back" button is rendered underneath the details. When
  clicked, this button will unselect the guest.
- If a guest is not selected, the app renders the list of guests.
*/
