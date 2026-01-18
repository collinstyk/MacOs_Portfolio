/* eslint-disable @typescript-eslint/ban-ts-comment */
import { INITIAL_Z_INDEX, WINDOWS_CONFIG } from "@constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export interface WindowState {
  windows: typeof WINDOWS_CONFIG;
  nextZIndex: number;
  openWindow: (windowKey: WindowKey, data?: unknown) => void;
  closeWindow: (windowKey: WindowKey) => void;
  focusWindow: (windowKey: WindowKey) => void;
}

export type WindowKey =
  | "finder"
  | "contact"
  | "resume"
  | "safari"
  | "photos"
  | "terminal"
  | "txtfile"
  | "imgfile";

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
        //@ts-ignore
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
