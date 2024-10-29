import React, { lazy, Suspense } from 'react';

const LazyLayerController = lazy(() => import('./LayerController'));

const LayerController = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLayerController {...props} />
  </Suspense>
);

export default LayerController;
