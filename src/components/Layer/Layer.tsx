"use client";

import React, { FC } from "react";
import styles from "./Layer.module.scss";
import Image from "next/image";
import { useLayerContext } from "../LayerContextProvider";

export interface LayerProps {
  id: string;
  src: string;
  alt: string;
  visible?: boolean;
}

export const Layer: FC<LayerProps> = ({ src, alt, visible, id }) => (
  <div id={id} className={styles.Layer} data-testid="Layer">
    <Image
      src={src}
      alt={alt}
      className={visible ? "visible" : "invisible"}
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

export default Layer;

type LayerWithContextProps = Omit<LayerProps, "visible">;

export const LayerWithContext: FC<LayerWithContextProps> = ({
  id,
  ...rest
}) => {
  const { visible } = useLayerContext(id);
  return <Layer id={id} visible={visible} {...rest} />;
};
