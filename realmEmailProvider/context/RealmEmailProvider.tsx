import React, { PropsWithChildren, createContext } from "react";
const EmailProvider = createContext({});
function RealmEmailProvider({ children }: PropsWithChildren) {
  return <EmailProvider.Provider value={{}}>{children}</EmailProvider.Provider>;
}

export default RealmEmailProvider;
