import Layer from "@/src/components/Layer/Layer";
import LayerManager from "@/src/components/LayerManager/LayerManager";
import Image from "next/image";

export default function Home() {
  return (
    <LayerManager>
      <Layer src="0.png" alt="Layer 0" />
    </LayerManager>
  );
}
