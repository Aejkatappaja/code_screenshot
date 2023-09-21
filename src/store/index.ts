import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface State {
  code: string;
}

interface Action {
  setCode: (code: string) => void;
  remove: () => void;
}

export const useStore = create<State & Action>()(
  devtools(
    persist(
      (set) => ({
        code: "",
        setCode: (code) => set(() => ({ code })),
        remove: () => set(() => ({ code: "" })),
      }),
      { name: "user-settings" }
    )
  )
);
