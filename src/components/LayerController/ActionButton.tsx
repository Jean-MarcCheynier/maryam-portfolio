import { FC, PropsWithChildren } from "react";
import { useLayerActions } from "../LayerContextProvider";

type ActionButtonProps = {
  onClick: () => void;
  layerId: string;
};

export const ActionButton: FC<PropsWithChildren<ActionButtonProps>> = ({
  layerId,
  onClick,
  children,
}) => {
  const { reset, highlight } = useLayerActions();

  const onMouseEnter = () => {
    highlight(layerId);
  };

  return (
    <div>
      <button
        className="bg-transparent hover:bg-opacity-30 hover:bg-green-200 text-green-700 font-semibold hover:text-white py-2 px-4 border-green-100 hover:border-transparent"
        onMouseEnter={onMouseEnter}
        onMouseLeave={reset}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
