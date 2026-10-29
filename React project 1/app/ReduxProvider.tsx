import { useEffect, useState, type ReactNode } from "react";
import { Provider } from "react-redux";
import { createAppStore } from "../src/Store";
import { loadPastes } from "../src/redux/PasteSlice";

type StoredPaste = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

function isStoredPaste(value: unknown): value is StoredPaste {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const paste = value as Record<string, unknown>;

  return (
    typeof paste.id === "string" &&
    typeof paste.title === "string" &&
    typeof paste.content === "string" &&
    typeof paste.createdAt === "string" &&
    typeof paste.updatedAt === "string"
  );
}

function readStoredPastes(): StoredPaste[] {
  const storedValue = window.localStorage.getItem("pastes");

  if (storedValue === null) {
    return [];
  }

  const parsedValue: unknown = JSON.parse(storedValue);

  if (!Array.isArray(parsedValue) || !parsedValue.every(isStoredPaste)) {
    throw new Error("Saved pastes have an invalid format.");
  }

  return parsedValue;
}

export default function ReduxProvider({ children }: { children: ReactNode }) {
  const [store] = useState(createAppStore);

  useEffect(() => {
    let storedPastes: StoredPaste[];

    try {
      storedPastes = readStoredPastes();
    } catch (error) {
      console.error("Could not load saved pastes from local storage.", error);
      storedPastes = [];
    }

    store.dispatch(loadPastes(storedPastes));

    return store.subscribe(() => {
      try {
        window.localStorage.setItem(
          "pastes",
          JSON.stringify(store.getState().paste.items),
        );
      } catch (error) {
        console.error("Could not save pastes to local storage.", error);
      }
    });
  }, [store]);

  return <Provider store={store}>{children}</Provider>;
}
