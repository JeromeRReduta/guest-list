import { useContext, useEffect } from "react";
import { GuestContext } from "../contexts/GuestContext";
import TrySelectGuest from "../use-cases/TrySelectGuest";

export default function useSelectedGuest({ selectedId }) {
  const { repo, selectedGuest, setSelectedGuest } = useContext(GuestContext);
  useEffect(() => {
    async function loadSelectedGuest() {
      const handler = new TrySelectGuest({ guestRepo: repo });
      const data = await handler.handle({ id: selectedId });
      console.log("DATA TO RETURN IS", data);
      setSelectedGuest(data);
    }
    loadSelectedGuest();
  }, [selectedId, selectedGuest]);
}
