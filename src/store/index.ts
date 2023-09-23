import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface State {
  code: string;
  title: string;
  theme: string;
  darkMode: boolean;
  showBackground: boolean;
  language: string;
  autoDetectLanguage: boolean;
  fontSize: number;
  fontStyle: string;
  padding: number;
}

export const initialState: State = {
  code: '',
  title: 'Untitled',
  theme: 'hyper',
  darkMode: true,
  showBackground: true,
  language: 'plaintext',
  autoDetectLanguage: false,
  fontSize: 18,
  fontStyle: 'jetBrainsMono',
  padding: 64,
};

export interface Action {
  setCode: (code: string) => void;
  setTitle: (title: string) => void;
  setTheme: (theme: string) => void;
  setDarkMode: (darkmode: boolean) => void;
  setShowBackgound: (backGround: boolean) => void;
  setLanguage: (language: string) => void;
  setAutoDetectLanguage: (autoDetectLanguage: boolean) => void;
  setFontSize: (fontSize: number) => void;
  setFontStyle: (fontStyle: string) => void;
  setPadding: (padding: number) => void;
}

export const useStore = create<State & Action>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setCode: (code) => set(() => ({ code })),
        setTitle: (title) => set(() => ({ title })),
        setTheme: (theme) => set(() => ({ theme })),
        setDarkMode: (darkMode) => set(() => ({ darkMode })),
        setShowBackgound: (showBackground) => set(() => ({ showBackground })),
        setLanguage: (language) => set(() => ({ language })),
        setAutoDetectLanguage: (autoDetectLanguage) =>
          set(() => ({ autoDetectLanguage })),
        setFontSize: (fontSize) => set(() => ({ fontSize })),
        setFontStyle: (fontStyle) => set(() => ({ fontStyle })),
        setPadding: (padding) => set(() => ({ padding })),
      }),
      { name: 'user-settings' }
    )
  )
);
