import React from "react";
import { UserConsumer } from "./UserContext";

function F() {
  return (
    <div>
      <h4>Component F</h4>
      <UserConsumer>
        {username => <p>Hello {username}</p>}
      </UserConsumer>
    </div>
  );
}

export default F;
