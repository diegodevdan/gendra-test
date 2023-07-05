import { createContext } from "react";

export const TendersContext = createContext({
    tenders: [],
    addTenders: () => {},
});

export const TendersProvider = TendersContext.Provider;