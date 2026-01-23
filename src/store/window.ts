/* eslint-disable @typescript-eslint/ban-ts-comment */
import { INITIAL_Z_INDEX, WINDOWS_CONFIG } from "@constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type FileData = {
  id: number;
  name: string;
  icon: string;
  kind: string;
  fileType: string;
  href: string;
  position: string;
  subtitle: string;
  image: string;
  imageUrl: string;
  description: string[];
};

export type WindowData = FileData & {
  children: FileData[];
};

type WindowType = {
  isOpen: boolean;
  zIndex: number;
  data: WindowData | null;
};

export type WindowKey =
  | "finder"
  | "contact"
  | "resume"
  | "safari"
  | "photos"
  | "terminal"
  | "txtfile"
  | "imgfile";

type WindowsType = Record<WindowKey, WindowType>;

export interface WindowState {
  windows: WindowsType;
  nextZIndex: number;
  openWindow: (windowKey: WindowKey, data?: WindowData | null) => void;
  closeWindow: (windowKey: WindowKey) => void;
  focusWindow: (windowKey: WindowKey) => void;
}

const useWindowStore = create<WindowState>()(
  immer((set) => ({
    windows: WINDOWS_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey: WindowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
      }),
    closeWindow: (windowKey: WindowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),
    focusWindow: (windowKey: WindowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.zIndex = state.nextZIndex++;
      }),
  })),
);

export default useWindowStore;
