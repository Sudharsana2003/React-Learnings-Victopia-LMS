import React from "react";

// Create the context
const UserContext = React.createContext();

// Export provider and consumer for easier usage
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;
