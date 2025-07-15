import { useContext, useEffect } from "react";
import { GuestContext } from "../contexts/GuestContext";

export default function useGuestList() {
  const { repo, setGuestList } = useContext(GuestContext);
  useEffect(() => {
    async function loadGuestList() {
      const data = await repo.getGuests();
      setGuestList(data);
    }
    loadGuestList();
  }, []);
}
