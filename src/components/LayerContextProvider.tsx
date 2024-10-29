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

export type ActionContextProps = Dispatch<Action>;
export const LayerActionContext =
  React.createContext<ActionContextProps | null>(null);

const initialLayerContext: LayerContextMapProps = {
  0: { visible: true },
  1: { visible: false },
  2: { visible: false },
  3: { visible: false },
  4: { visible: false },
  5: { visible: true },
};

export const LayerContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [layerContext, dispatch] = useReducer(reducer, {
    ...initialLayerContext,
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

  if (!dispatch) {
    throw new Error(
      "useLayerActions must be used within a LayerContextProvider"
    );
  }
  //ACTIONS
  const reset = () => {
    dispatch({
      type: ActionTypes.reset,
    });
  };
  const highlight = (id: string) => {
    dispatch({
      type: ActionTypes.highlight,
      id,
    });
  };
  const init = (initialLayerContext: LayerContextMapProps) => {
    console.log("init", initialLayerContext);
    dispatch({ type: ActionTypes.init, payload: initialLayerContext });
  };

  return { highlight, init, reset };
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

enum ActionTypes {
  init = "init",
  reset = "reset",
  highlight = "highlight",
}

type Action =
  | { type: ActionTypes.init; payload: LayerContextMapProps }
  | { type: ActionTypes.highlight; id: string }
  | { type: ActionTypes.reset };

const reducer: Reducer<LayerContextMapProps, Action> = (state, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case ActionTypes.init:
      return { ...action.payload };
    case ActionTypes.reset:
      return { ...initialLayerContext };
    case ActionTypes.highlight:
      state[action.id] = { visible: true };
      return { ...state };

    default:
      return state;
  }
};
