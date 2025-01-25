"use client";

import React, {
  type Dispatch,
  type PropsWithChildren,
  type Reducer,
  useContext,
  useReducer,
} from "react";

export enum LayerId {
  Background = "background",
  Biography = "bio",
  Contact = "contact",
  Kids = "kids",
  Projects = "project",
  TextAndDrafts = "textAndDraft",
}

export type LayerContextMapProps = Record<LayerId, LayerContextProps>;

const initialLayerContext: LayerContextMapProps = {
  [LayerId.Background]: { visible: true, active: false },
  [LayerId.Biography]: { visible: false, active: false },
  [LayerId.Contact]: { visible: false, active: false },
  [LayerId.Kids]: { visible: false, active: false },
  [LayerId.Projects]: { visible: false, active: false },
  [LayerId.TextAndDrafts]: { visible: false, active: false },
} as const;

export type LayerContextProps = { visible: boolean; active: boolean };

export const LayerContext =
  React.createContext<LayerContextMapProps>(initialLayerContext);

export type ActionContextProps = Dispatch<Action>;
export const LayerActionContext =
  React.createContext<ActionContextProps | null>(null);

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
      "useLayerActions must be used within a LayerContextProvider",
    );
  }
  //ACTIONS
  const reset = () => {
    dispatch({
      type: ActionTypes.reset,
    });
  };
  const highlight = (id: LayerId) => {
    dispatch({
      type: ActionTypes.highlight,
      id,
    });
  };
  const activate = (id: LayerId) => {
    dispatch({
      type: ActionTypes.activate,
      id,
    });
  };
  const init = (initialLayerContext: LayerContextMapProps) => {
    dispatch({ type: ActionTypes.init, payload: initialLayerContext });
  };

  return { highlight, init, reset, activate };
}
export function useLayerContext(layerId: LayerId): LayerContextProps;
export function useLayerContext(): LayerContextMapProps;
export function useLayerContext(layerId?: LayerId) {
  const layerContext = useContext(LayerContext);

  if (layerId) {
    if (!layerContext) return { visible: false };
    return layerContext[layerId] ?? { visible: false };
  }
  return layerContext;
}

enum ActionTypes {
  init = "init",
  reset = "reset",
  highlight = "highlight",
  activate = "activate",
}

type Action =
  | { type: ActionTypes.init; payload: LayerContextMapProps }
  | { type: ActionTypes.highlight; id: LayerId }
  | { type: ActionTypes.activate; id: LayerId }
  | { type: ActionTypes.reset };

const reducer: Reducer<LayerContextMapProps, Action> = (state, action) => {
  switch (action.type) {
    case ActionTypes.init:
      return { ...action.payload };
    case ActionTypes.reset:
      for (const key of Object.keys(state) as LayerId[]) {
        state[key] = {
          ...state[key],
          visible: initialLayerContext[key].visible || state[key].active,
        };
      }
      return { ...state };
    case ActionTypes.highlight:
      for (const key of Object.keys(state) as LayerId[]) {
        state[key] = {
          ...state[key],
          visible: initialLayerContext[key].visible,
        };
      }
      state[action.id] = { ...state[action.id], visible: true };
      return { ...state };
    case ActionTypes.activate:
      for (const key of Object.keys(state) as LayerId[]) {
        state[key].active = false;
      }
      state[action.id] = { visible: true, active: true };
      return { ...state };

    default:
      return state;
  }
};
