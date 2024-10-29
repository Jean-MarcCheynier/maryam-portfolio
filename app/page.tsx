"use client";

import { LayerId } from "@/src/components/LayerContextProvider";
import { LayerManager } from "@/src/components/LayerManager/LayerManager";

export default function Home() {
  return (
    <LayerManager>
      <LayerManager.Item
        id={LayerId.Background}
        priority
        src="/background.png"
        alt="Background layer"
      />
      <LayerManager.Item
        id={LayerId.Biography}
        src="/bio.png"
        alt="biography layer"
      />
      <LayerManager.Item
        id={LayerId.Contact}
        src="/contact.png"
        alt="contact layer"
      />
      <LayerManager.Item id={LayerId.Kids} src="/kids.png" alt="kids layer" />
      <LayerManager.Item
        id={LayerId.Projects}
        src="/projects.png"
        alt="projects layer"
      />
      <LayerManager.Item
        id={LayerId.TextAndDrafts}
        src="/textAndDrafts.png"
        alt="text and draft layer"
      />
      <LayerManager.Controller />
    </LayerManager>
  );
}
