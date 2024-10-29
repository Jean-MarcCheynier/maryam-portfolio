import React, { FC } from "react";
import styles from "./LayerController.module.css";
import { ActionButton } from "./ActionButton";

const LayerController: FC = () => (
  <div
    className={`${styles.LayerController} flex flex-row justify-content-center absolute top-3`}
    data-testid="LayerController"
  >
    <ActionButton layerId="1" onClick={() => {}}>
      Bio
    </ActionButton>
    <ActionButton layerId="2" onClick={() => {}}>
      Bio
    </ActionButton>
    <ActionButton layerId="3" onClick={() => {}}>
      Bio
    </ActionButton>
    <ActionButton layerId="4" onClick={() => {}}>
      Bio
    </ActionButton>
  </div>
);

export default LayerController;
