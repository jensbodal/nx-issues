import { cacheBroken } from './cache-broken';

describe('cacheBroken', () => {
  it('should work', () => {
    expect(cacheBroken()).toEqual('cache-broken');
  });
});
