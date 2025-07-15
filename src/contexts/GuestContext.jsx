import { createContext, useEffect, useState } from "react";
import GuestApiRepo from "../repo-implementations/guestApiRepo";
import WebApiDbContext from "../apis/WebApiDbContext";

export const GuestContext = createContext();

export default function GuestProvider({ children }) {
  const apiBase =
    "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2504-ftb-et-web-pt";
  const [guestList, setGuestList] = useState(null);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const api = new WebApiDbContext({ url: apiBase });
  const repo = new GuestApiRepo({ apiContext: api });
  //   function useGuestList() {
  //     useEffect(() => {
  //       async function loadGuestList() {
  //         const data = await repo.getGuests();
  //         setGuestList(data);
  //       }
  //       loadGuestList();
  //     }, []);
  //   }

  //   function useSelectedGuest({ selectedId }) {
  //     useEffect(() => {
  //       async function loadSelectedGuest() {
  //         const oldData = selectedGuest;
  //         const data = await repo.getGuestById(selectedId);
  //         setSelectedGuest(data);
  //         console.log("before: ", oldData, "after: ", data);
  //       }
  //       loadSelectedGuest();
  //     }, [selectedId]);
  //   }

  //   function useGuestId({ selectedId }) {
  //     useEffect(() => {
  //       async function selectGuest(selectedId) {
  //         const guest =
  //           selectedId !== null && selectedId !== undefined
  //             ? await repo.getGuestById(selectedId)
  //             : null;
  //         setSelectedGuest(guest);
  //       }
  //       selectGuest(selectedId);
  //     }, [selectedId]);
  //   }
  return (
    <GuestContext.Provider
      value={{
        guestList,
        setGuestList,
        selectedGuest,
        setSelectedGuest,
        selectedId,
        setSelectedId,
        repo,
      }}
    >
      {children}
    </GuestContext.Provider>
  );
}
