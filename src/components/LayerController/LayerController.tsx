import React, { FC } from "react";
import styles from "./LayerController.module.css";
import { ActionButton } from "./ActionButton";
import { LayerId } from "../LayerContextProvider";

const LayerController: FC = () => (
  <div
    className={`${styles.LayerController} flex flex-row justify-content-center absolute top-3`}
    data-testid="LayerController"
  >
    <ActionButton layerId={LayerId.Biography} onClick={() => {}}>
      Biography
    </ActionButton>
    <ActionButton layerId={LayerId.Contact} onClick={() => {}}>
      Contact
    </ActionButton>
    <ActionButton layerId={LayerId.Kids} onClick={() => {}}>
      Kids
    </ActionButton>
    <ActionButton layerId={LayerId.Projects} onClick={() => {}}>
      Projects
    </ActionButton>
    <ActionButton layerId={LayerId.TextAndDrafts} onClick={() => {}}>
      TextAndDrafts
    </ActionButton>
  </div>
);

export default LayerController;
