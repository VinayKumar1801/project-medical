// import { useState } from "react";
import Dashboard from "../components/dashboard";
import Login from "../components/login";
import { ContactsProvider } from "../contexts/contactsProvider";
import { ConversationsProvider } from "../contexts/convsersationsProvider";
import { SocketProvider } from "../contexts/socketProvider";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Home() {
  const [id, setId] = useLocalStorage("id");
  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );

  return <>{id ? dashboard : <Login onIdSubmit={setId} />}</>;
}
