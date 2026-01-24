import { WindowControls } from "@components";
import Window from "./Window";
import { SOCIALS } from "@constants";

const Contact = () => {
  return (
    <Window windowKey="contact">
      <Window.Wrapper>
        <div id="window-header">
          <WindowControls />
          <h2>Contact Me</h2>
        </div>

        <div className="p-5 space-y-5 bg-white">
          <img
            src="/images/adrian.jpg"
            alt="Collins"
            className="w-20 rounded-full"
          />

          <h3>Let's Connect</h3>
          <p>
            Have an idea, a challenge to solve, a bug to fix, or just want to
            talk tech? I’m all ears.
          </p>
          <a href="mailto:mattycollins803@gmail.com" className="block">
            mattycollins803@gmail.com
          </a>

          <ul>
            {SOCIALS.map(({ id, bg, link, icon, text }) => (
              <li key={id} style={{ backgroundColor: bg }}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={text}
                >
                  <img src={icon} alt={text} className="size-5" />
                  <p>{text}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Window.Wrapper>
    </Window>
  );
};

export default Contact;
