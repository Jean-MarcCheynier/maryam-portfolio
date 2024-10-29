import { FC, PropsWithChildren } from "react";
import { LayerId, useLayerActions } from "../LayerContextProvider";

type ActionButtonProps = {
  onClick: () => void;
  layerId: LayerId;
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
    <div className="group">
      <button
        className="bg-transparent  text-green-700 font-semibold hover:text-green-400 py-2 px-4 rounded"
        onMouseEnter={onMouseEnter}
        onMouseLeave={reset}
        onClick={onClick}
      >
        <span className={`hover:mrym-text-shadow font-sans`}>{children}</span>
      </button>
    </div>
  );
};
