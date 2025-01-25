"use client";

import React from "react";
import type { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./LayerManager.module.css";
import type { LayerProps } from "@/src/components/Layer/Layer/Layer";
import { LayerWithContext } from "@/src/components/Layer/Layer/Layer";
import { LayerId, useLayerContext } from "../LayerContextProvider";
import type { LayerContextMapProps } from "../LayerContextProvider";
import NavBar from "../../NavBar/NavBar";

export type LayerManagerComposition = {
  Item: typeof LayerWithContext;
  Controller: typeof NavBar;
};

const getActiveLayer = (layerContext: LayerContextMapProps) => {
  return Object.entries(layerContext).find(([, { active }]) => active)?.[0];
};

const baseAnimation =
  "transition transform ease-linear duration-1000 motion-reduce:transition-none";
const classFirstLayer = `${baseAnimation} translate-y-20 -translate-x-20 `;
const classSecondLayer = `${baseAnimation} translate-y-10 -translate-x-14`;
const classThirdLayer = `${baseAnimation} translate-y-0 translate-x-1`;
const classFourthLayer = `${baseAnimation} translate-y-10 translate-x-14`;
const classFifthLayer = `${baseAnimation} translate-y-20 translate-x-20`;

export const LayerManager: FC<PropsWithChildren> & LayerManagerComposition = ({
  children,
}) => {
  const layerContext = useLayerContext();
  const activeLayer = getActiveLayer(layerContext);

  console.log("layerContext", layerContext);
  console.log("activeLayer", activeLayer);

  const layers: ReactNode[] = [];
  const layerControl: ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === LayerWithContext) {
        const props = child.props as LayerProps;

        layers.push(<LayerWithContext {...props} key={props.id} />);
      }
      if (child.type === NavBar) {
        layerControl.push(child);
      }
    }
  });

  return (
    <>
      <div className="width-full flex justify-center justify-items-center">
        {layerControl}
      </div>
      <div
        className={`${styles.LayerManager} 
        ${activeLayer === LayerId.Biography && classFirstLayer}
        ${activeLayer === LayerId.Contact && classSecondLayer}
        ${activeLayer === LayerId.Kids && classThirdLayer}
        ${activeLayer === LayerId.Projects && classFourthLayer}
        ${activeLayer === LayerId.TextAndDrafts && classFifthLayer}
        `}
        data-testid="LayerManager"
      >
        {layers}
      </div>
    </>
  );
};

LayerManager.Item = LayerWithContext;
LayerManager.Controller = NavBar;
