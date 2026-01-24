import Window from "@windows/Window";

const WindowControls = () => {
  return (
    <div id="window-controls">
      <Window.Close>
        <button className="close" aria-label="Close window" />
      </Window.Close>
      <button className="minimize" aria-label="Minimize window" />
      <button className="maximize" aria-label="Maximize window" />
    </div>
  );
};

export default WindowControls;

// TODO:
// 1) Implement the minimize window functionality
// 2) Implement the maximize window functionality
