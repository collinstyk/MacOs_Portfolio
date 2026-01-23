import { WindowControls } from "@components";
import Window from "./Window";
import useWindowStore from "@store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const { data } = windows["imgfile"];
  return (
    <Window windowKey="imgfile">
      <Window.Wrapper>
        <div id="window-header">
          <WindowControls />
          <p>{data?.name}</p>
        </div>

        <div className="preview">
          <img src={data?.imageUrl} alt={data?.name} />
        </div>
      </Window.Wrapper>
    </Window>
  );
};

export default Image;
