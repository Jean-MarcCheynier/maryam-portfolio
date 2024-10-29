import Layer from "@/src/components/Layer/Layer";
import LayerManager from "@/src/components/LayerManager/LayerManager";

export default function Home() {
  return (
    <LayerManager>
      <Layer id="0" src="/0.png" alt="Layer 0" />
      <Layer id="1" src="/bio.png" alt="Layer 0" />
      <Layer id="2" src="/contact.png" alt="Layer 0" />
      <Layer id="3" src="/kids.png" alt="Layer 0" />
      <Layer id="4" src="/projects.png" alt="Layer 0" />
    </LayerManager>
  );
}
