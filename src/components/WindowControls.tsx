import Window from "@windows/Window";

const WindowControls = () => {
  return (
    <div id="window-controls">
      <button className="maximize" />
      <button className="minimize" />
      <Window.Close>
        <button className="close" />
      </Window.Close>
    </div>
  );
};

export default WindowControls;

// TODO:
// 1) Implement the minimize window functionality
// 1) Implement the maximize window functionality
