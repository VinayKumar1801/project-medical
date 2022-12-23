import React from "react";
import { useConversations } from "../contexts/convsersationsProvider";
import OpenConversation from "./openConversation";
import Sidebar from "./sidebar";

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations();

  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  );
}
