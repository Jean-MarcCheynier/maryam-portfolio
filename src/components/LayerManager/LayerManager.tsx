"use client";

import React, { FC, PropsWithChildren } from "react";
import styles from "./LayerManager.module.scss";
import {
  Layer,
  LayerProps,
  LayerWithContext,
} from "@/src/components/Layer/Layer";
import { LayerContextProvider } from "../LayerContextProvider";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LayerManagerProps {}

const LayerManager: FC<PropsWithChildren<LayerManagerProps>> = ({
  children,
}) => {
  return (
    <LayerContextProvider>
      <div className={styles.LayerManager} data-testid="LayerManager">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            if (child.type !== Layer) {
              const props = child.props as LayerProps;
              console.log(props);
              return <Layer {...props} key={props.id} />;
            }
          }
        })}
      </div>
    </LayerContextProvider>
  );
};

export default LayerManager;

LayerManager.Layer = LayerWithContext;
