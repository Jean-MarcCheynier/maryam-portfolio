import type { FC, PropsWithChildren } from "react";
import type { LayerId } from "../LayerContextProvider";
import { useLayerActions, useLayerContext } from "../LayerContextProvider";

type ActionButtonProps = {
  onClick: () => void;
  layerId: LayerId;
};

export const ActionButton: FC<PropsWithChildren<ActionButtonProps>> = ({
  layerId,
  onClick,
  children,
}) => {
  const { reset, highlight, activate } = useLayerActions();
  const layer = useLayerContext(layerId);

  const onMouseEnter = () => {
    highlight(layerId);
  };

  const handleOnClick = () => {
    activate(layerId);
    onClick();
  };

  return (
    <button
      type="button"
      className={`bg-transparent  text-green-700 font-semibold hover:text-green-400  py-2 px-4 rounded ${
        layer.active && "text-green-500"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={reset}
      onClick={handleOnClick}
    >
      <span
        className={`hover:mrym-text-shadow font-sans ${
          layer.active && "text-green-500"
        } `}
      >
        {children}
      </span>
    </button>
  );
};
