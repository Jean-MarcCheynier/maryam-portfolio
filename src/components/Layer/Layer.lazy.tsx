import React, { lazy, Suspense } from 'react';

const LazyLayer = lazy(() => import('./Layer'));

const Layer = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLayer {...props} />
  </Suspense>
);

export default Layer;
