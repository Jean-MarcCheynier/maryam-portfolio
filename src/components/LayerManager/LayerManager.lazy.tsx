import React, { lazy, Suspense } from 'react';

const LazyLayerManager = lazy(() => import('./LayerManager'));

const LayerManager = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLayerManager {...props} />
  </Suspense>
);

export default LayerManager;
