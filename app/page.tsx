"use client";

import Layer from "@/src/components/LayerManager/LayerManager";

export default function Home() {
  return (
    <Layer>
      <Layer.Item id="0" priority src="/0.png" alt="Layer 0" />
      <Layer.Item id="1" src="/bio.png" alt="Layer 0" />
      <Layer.Item id="2" src="/contact.png" alt="Layer 0" />
      <Layer.Item id="3" src="/kids.png" alt="Layer 0" />
      <Layer.Item id="4" src="/projects.png" alt="Layer 0" />
    </Layer>
  );
}
