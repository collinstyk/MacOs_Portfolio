import { TECH_STACKS } from "@constants";
import { Window } from "@windows";
import { Check, Flag } from "lucide-react";
import { WindowControls } from "@components";

const Terminal = () => {
  return (
    <Window windowKey="terminal">
      <Window.Wrapper>
        <div id="window-header">
          <WindowControls />
          <h2>Tech Stack</h2>
        </div>

        <div className="tech-stack">
          <p>
            <span className="font-bold">@collins % </span>
            show tech stack
          </p>

          <div className="label">
            <p className="w-32">Category</p>
            <p>Technologies</p>
          </div>

          <ul className="content">
            {TECH_STACKS.map(({ category, items }) => (
              <li key={category} className="flex items-center">
                <Check className="check" size={20} />
                <h3>{category}</h3>

                <ul>
                  {items.map((item, i) => (
                    <li key={item}>
                      {item}
                      {i < items.length - 1 ? "," : "."}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="footnote">
            <p>
              <Check size={20} /> 5 of 5 stacks loaded succesfully.
            </p>

            <p className="text-black">
              <Flag size={15} fill="black" />
              Render time: 6ms
            </p>
          </div>
        </div>
      </Window.Wrapper>
    </Window>
  );
};

export default Terminal;

// TODO:
// Add a beeping cursor - if macOs terminal contains a beeping cursor
// Implement dark mode for the terminal.
