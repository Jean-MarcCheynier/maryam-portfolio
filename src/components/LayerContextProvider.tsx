import React, {
  Dispatch,
  PropsWithChildren,
  Reducer,
  useContext,
  useReducer,
} from "react";

export type LayerContextProps = { visible: boolean };
export type LayerContextMapProps = Record<string, LayerContextProps>;
export const LayerContext = React.createContext<LayerContextMapProps>({});

export type ActionContextProps = Dispatch<{ type: string; payload: object }>;
export const LayerActionContext =
  React.createContext<ActionContextProps | null>(null);

export const LayerContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [layerContext, dispatch] = useReducer(reducer, {
    0: { visible: true },
    1: { visible: false },
    2: { visible: false },
    3: { visible: false },
    4: { visible: false },
    5: { visible: true },
  });

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
  console.log("dispatch ", dispatch);
  if (!dispatch) {
    console.log("pas de dispatch");
    return {
      init: () => {},
      highlightBio: () => {},
    };
  }
  //ACTIONS
  const highlightBio = () => {
    console.log("coucou");
    dispatch({ type: "bio", payload: { visible: true } });
  };
  const init = (initialLayerContext: LayerContextMapProps) => {
    console.log("init", initialLayerContext);
    dispatch({ type: "init", payload: initialLayerContext });
  };

  return { highlightBio, init };
}
export function useLayerContext(layerId: string): { visible: boolean };
export function useLayerContext(): LayerContextMapProps;
export function useLayerContext(layerId?: unknown) {
  const layerContext = useContext(LayerContext);

  console.log("fullLayerContext", layerContext);

  if (typeof layerId === "string") {
    console.log("plop", layerContext);
    if (!layerContext) return { visible: false };
    return layerContext[layerId] ?? { visible: false };
  }
  return layerContext;
}

const reducer: Reducer<
  LayerContextMapProps,
  { type: string; payload: object }
> = (state, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case "init":
      return { ...action.payload };
    case "bio":
      state["bio"] = { ...state["bio"], ...action.payload };
      console.log("passed");
      return {
        0: { visible: false },
        1: { visible: false },
        2: { visible: false },
        3: { visible: false },
        4: { visible: false },
        5: { visible: false },
      };

    default:
      return state;
  }
};
