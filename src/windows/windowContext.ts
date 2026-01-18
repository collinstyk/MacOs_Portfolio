import type { WindowKey, WindowState } from "@store/window";
import { createContext } from "react";

const WindowContext = createContext<{
  state: WindowState;
  windowKey: WindowKey;
} | null>(null);

export default WindowContext;
