import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { locations } from "@constants";

export type Location = {
  id: number;
  type: string;
  name: string;
  icon: string;
  kind: string;
  children: {
    id: number;
    name: string;
    icon: string;
    kind: string;
    position: string;
    windowPosition: string;
    children: (
      | {
          id: number;
          name: string;
          icon: string;
          kind: string;
          fileType: string;
          position: string;
          description: string[];
          href?: undefined;
          imageUrl?: undefined;
        }
      | {
          id: number;
          name: string;
          icon: string;
          kind: string;
          fileType: string;
          href: string;
          position: string;
          description?: undefined;
          imageUrl?: undefined;
        }
      | {
          id: number;
          name: string;
          icon: string;
          kind: string;
          fileType: string;
          position: string;
          imageUrl: string;
          description?: undefined;
          href?: undefined;
        }
    )[];
  }[];
};

type LocationState = {
  activeLocation: Location | null;
  setActiveLocation: (location: Location) => void;
  resetActiveLocation: () => void;
};

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create<LocationState>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location: Location) =>
      set((state) => {
        if (!location) return;
        state.activeLocation = location;
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = null;
      }),
  })),
);

export default useLocationStore;
