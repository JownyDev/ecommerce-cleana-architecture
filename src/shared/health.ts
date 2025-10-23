export type HealthStatus = {
  status: 'ok';
  timestamp: string;
};

export const getHealthStatus = (): HealthStatus => ({
  status: 'ok',
  timestamp: new Date().toISOString(),
});
