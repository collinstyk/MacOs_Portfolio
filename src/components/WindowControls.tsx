import Window from "@windows/Window";

const WindowControls = () => {
  return (
    <div id="window-controls">
      <button className="maximize" aria-label="Maximize window" />
      <button className="minimize" aria-label="Minimize window" />
      <Window.Close>
        <button className="close" aria-label="Close window" />
      </Window.Close>
    </div>
  );
};

export default WindowControls;

// TODO:
// 1) Implement the minimize window functionality
// 1) Implement the maximize window functionality
