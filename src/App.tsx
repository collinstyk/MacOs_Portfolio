/* eslint-disable @typescript-eslint/ban-ts-comment */
import gsap from "gsap";
// @ts-ignore
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome, Dock } from "@components";
import {
  Contact,
  Finder,
  Image,
  Resume,
  Safari,
  Terminal,
  Text,
} from "@windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Finder />
      <Resume />
      <Contact />

      <Text />
      <Image />
    </div>
  );
};

export default App;
