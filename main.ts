import { getHealthStatus, type HealthStatus } from './src/shared/health.js';

export const main = (): HealthStatus => {
  const status = getHealthStatus();

  console.log(`status: ${status.status}`);
  console.log(`timestamp: ${status.timestamp}`);
  return status;
};

main();
