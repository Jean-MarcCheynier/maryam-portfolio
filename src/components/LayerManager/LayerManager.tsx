import React, { FC } from 'react';
import styles from './LayerManager.module.scss';

interface LayerManagerProps {}

const LayerManager: FC<LayerManagerProps> = () => (
  <div className={styles.LayerManager} data-testid="LayerManager">
    LayerManager Component
  </div>
);

export default LayerManager;
