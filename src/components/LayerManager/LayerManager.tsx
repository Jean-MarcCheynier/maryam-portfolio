"use client";

import React, { FC, PropsWithChildren } from "react";
import styles from "./LayerManager.module.css";
import { LayerProps, LayerWithContext } from "@/src/components/Layer/Layer";
import { LayerContextProvider } from "../LayerContextProvider";
import LayerController from "../LayerController/LayerController";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LayerManagerProps {}

export type LayerManagerComposition = {
  Item: typeof LayerWithContext;
  Controller: typeof LayerController;
};

export const LayerManager: FC<PropsWithChildren<LayerManagerProps>> &
  LayerManagerComposition = ({ children }) => {
  return (
    <LayerContextProvider>
      <div className={styles.LayerManager} data-testid="LayerManager">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            if (child.type === LayerWithContext) {
              const props = child.props as LayerProps;

              return <LayerWithContext {...props} key={props.id} />;
            }
            if (child.type === LayerController) {
              return child;
            }
          }
        })}
      </div>
    </LayerContextProvider>
  );
};

LayerManager.Item = LayerWithContext;
LayerManager.Controller = LayerController;
