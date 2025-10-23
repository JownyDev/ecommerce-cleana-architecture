import { afterEach, describe, expect, it, vi } from 'vitest';

import { getHealthStatus } from '../../src/shared/health';

describe('health status', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns ok to confirm the setup works', () => {
    const fakeNow = new Date('2024-01-01T00:00:00.000Z');
    vi.useFakeTimers();
    vi.setSystemTime(fakeNow);

    expect(getHealthStatus()).toEqual({
      status: 'ok',
      timestamp: fakeNow.toISOString(),
    });
  });
});
