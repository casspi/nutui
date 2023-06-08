/**
 * 防抖
 * @param fn
 * @param delay
 */
export function debounce(fn: () => void, delay: number): () => void {
  let timer: null | number = null;

  return function () {
    if (timer) clearTimeout(timer);

    timer = window.setTimeout(fn, delay);
  };
}

/**
 * 节流
 * @param fn
 * @param delay
 */
export function throttle(fn: () => void, delay: number): () => void {
  let timer: number | null = null;
  let startTime = Date.now();

  return function (...args) {
    const now = Date.now();
    const remaining = delay - (now - startTime);
    if (timer) clearTimeout(timer);
    if (remaining <= 0) {
      fn.apply(null, ...args);
      startTime = Date.now();
    } else {
      timer = window.setTimeout(fn, remaining);
    }
  };
}
