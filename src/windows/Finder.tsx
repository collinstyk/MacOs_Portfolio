/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Window } from "@windows";
import { WindowControls } from "@components";
import { Search } from "lucide-react";
import { locations } from "@constants";
import useLocationStore, { type Location } from "@store/location";
import clsx from "clsx";
import useWindowStore, { type WindowData } from "@store/window";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item: WindowData) => {
    if (item.fileType === "pdf") return openWindow("resume");

    // @ts-ignore
    if (item.kind === "folder") return setActiveLocation(item);

    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}` as "txtfile" | "imgfile", item);
  };

  const renderList = (
    name: string,
    list: { id: number; icon: string; name: string }[],
  ) => {
    return (
      <div>
        <h3>{name}</h3>
        <ul>
          {list.map((item) => (
            <li
              key={item.id}
              onClick={() => setActiveLocation(item as Location)}
              className={clsx(
                item.id === activeLocation?.id ? "active" : "not-active",
              )}
            >
              <img src={item.icon} className="w-4" alt={item.name} />
              <p className="text-sm font-medium  truncate">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <Window windowKey="finder">
      <Window.Wrapper>
        <div id="window-header">
          <WindowControls />
          <Search className="icon" />
        </div>

        <div className="bg-white flex h-full">
          <div className="sidebar">
            {renderList("Favorites", Object.values(locations))}
            {renderList("My Works", locations.work.children)}
          </div>

          <ul className="content">
            {activeLocation?.children.map((item) => (
              <li
                key={item.id}
                className={item.position}
                onClick={() =>
                  // @ts-ignore
                  openItem(item)
                }
              >
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </Window.Wrapper>
    </Window>
  );
};

export default Finder;
