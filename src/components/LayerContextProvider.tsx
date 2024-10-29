import React, {
  Dispatch,
  PropsWithChildren,
  Reducer,
  useContext,
  useReducer,
} from "react";

export type LayerContextProps = Record<string, { visible: boolean }>;
export const LayerContext = React.createContext<LayerContextProps>({});

export type ActionContextProps = Dispatch<{ type: string; payload: object }>;
export const LayerActionContext =
  React.createContext<ActionContextProps | null>(null);

export const LayerContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [layerContext, dispatch] = useReducer(reducer, {});

  return (
    <LayerContext.Provider value={layerContext}>
      <LayerActionContext.Provider value={dispatch}>
        {children}
      </LayerActionContext.Provider>
    </LayerContext.Provider>
  );
};

export function useLayerActions() {
  const dispatch = useContext(LayerActionContext);
  if (!dispatch) return;
  //ACTIONS
  const highlightBio = () => {
    dispatch({ type: "bio", payload: { visible: true } });
  };

  return { highlightBio };
}
export function useLayerContext(layerId: string): { visible: boolean };
export function useLayerContext(): LayerContextProps;
export function useLayerContext(layerId?: unknown) {
  const layerContext = useContext(LayerContext);
  if (!layerContext) return;

  if (typeof layerId === "string") {
    return layerContext[layerId];
  }
  return layerContext;
}

const reducer: Reducer<LayerContextProps, { type: string; payload: object }> = (
  state,
  action
) => {
  switch (action.type) {
    case "bio":
      state["bio"] = { ...state["bio"], ...action.payload };
      return state;

    default:
      return state;
  }
};
