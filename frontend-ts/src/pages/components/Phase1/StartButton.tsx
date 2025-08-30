import { createContext, useReducer, useState } from "react";

export const clickedButton = createContext<boolean>(false);

export function useClickedButton() {
    const myRef = createContext<boolean>(false);
    if (myRef === undefined) {
      throw new Error("useClickedButton must be used within a ClickedButtonProvider");
    }
    return myRef;
  }


export function useClickedButtonProvider(button : boolean) {
    const [b, setB] = useState<boolean>(false);
    return (
        <clickedButton.Provider value={b}>
            
        </clickedButton.Provider>
    )
}
