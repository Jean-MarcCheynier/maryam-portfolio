"use client";

import React, { FC, PropsWithChildren, useContext } from "react";
import styles from "./LayerManager.module.css";
import {
  Layer,
  LayerProps,
  LayerWithContext,
} from "@/src/components/Layer/Layer";
import {
  LayerActionContext,
  LayerContextProvider,
  useLayerActions,
} from "../LayerContextProvider";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LayerManagerProps {}

export type LayerManagerComposition = {
  Item: typeof LayerWithContext;
};

const LayerManager: FC<PropsWithChildren<LayerManagerProps>> &
  LayerManagerComposition = ({ children }) => {
  const { highlightBio } = useLayerActions();

  return (
    <LayerContextProvider>
      <div
        className={styles.LayerManager}
        data-testid="LayerManager"
        onMouseEnter={highlightBio}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            if (child.type !== Layer) {
              const props = child.props as LayerProps;

              return <LayerWithContext {...props} key={props.id} />;
            }
          }
        })}
      </div>
    </LayerContextProvider>
  );
};

LayerManager.Item = LayerWithContext;

export default LayerManager;
