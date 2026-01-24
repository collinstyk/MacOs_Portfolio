import { WindowControls } from "@components";
import Window from "./Window";
import useWindowStore from "@store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const { data } = windows["txtfile"];

  return (
    <Window windowKey="txtfile">
      <Window.Wrapper>
        <div id="window-header">
          <WindowControls />
          <h2>{data?.name}</h2>
        </div>

        <div className="space-y-3 bg-white p-5">
          {data?.image && (
            <div className="w-full">
              <img src={data.image} />
            </div>
          )}

          <article className="space-y-3">
            {data?.subtitle && (
              <h3 className="font-semibold  text-black">{data.subtitle}</h3>
            )}

            {data?.description?.map((item) => (
              <p key={item} className="text-sm">
                {item}
              </p>
            ))}
          </article>
        </div>
      </Window.Wrapper>
    </Window>
  );
};

export default Text;
