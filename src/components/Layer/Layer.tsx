"use client";

import React, { FC } from "react";
import styles from "./Layer.module.css";
import Image from "next/image";
import {
  LayerContextProps,
  LayerId,
  useLayerContext,
} from "../LayerContextProvider";

export type LayerProps = {
  id: LayerId;
  src: string;
  alt: string;
  priority?: boolean;
};

export const Layer: FC<LayerProps & LayerContextProps> = ({
  src,
  alt,
  visible,
  id,
  priority = false,
}) => {
  return (
    <div id={id} className={`${styles.Layer} `} data-testid="Layer">
      <Image
        src={src}
        alt={alt}
        priority={priority}
        className={`transition-opacity  ${
          visible ? "duration-700 opacity-100" : "duration-200 opacity-0"
        }`}
        style={{
          width: "auto",
          height: "100%",
        }}
        sizes="100vh"
        width={900}
        height={900}
      />
    </div>
  );
};

export default Layer;

export const LayerWithContext: FC<LayerProps> = ({ id, ...rest }) => {
  const { visible } = useLayerContext(id);

  return <Layer id={id} visible={visible ?? true} {...rest} />;
};
