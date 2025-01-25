"use client";

import type { FC } from "react";
import styles from "./Layer.module.css";
import Image from "next/image";
import {
  useLayerContext,
  type LayerContextProps,
  type LayerId,
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
  active,
  id,
  priority = false,
}) => {
  console.log("Layer", id, visible, active);
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
  const { visible, active } = useLayerContext(id);

  return <Layer id={id} visible={visible} active={active} {...rest} />;
};
