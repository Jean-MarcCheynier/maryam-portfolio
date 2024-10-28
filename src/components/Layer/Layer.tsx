import React, { FC } from "react";
import styles from "./Layer.module.scss";

export interface LayerProps {
  src: string;
  alt: string;
}

const Layer: FC<LayerProps> = ({ src, alt }) => (
  <div className={styles.Layer} data-testid="Layer">
    <img src={src} alt={alt} />
  </div>
);

export default Layer;
