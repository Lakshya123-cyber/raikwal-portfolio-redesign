import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome, Dock, Home } from "#components";
import {
  Contact,
  Finder,
  Imagefile,
  Resume,
  Safari,
  Terminal,
  Textfile,
} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Textfile />
      <Imagefile />
      <Contact />

      <Home />
    </main>
  );
};

export default App;
