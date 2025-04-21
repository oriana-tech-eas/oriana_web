export interface StorageAdapter {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
}

export const localStorageAdapter: StorageAdapter = {
  getItem: (key: string): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(key);
  },
  setItem: (key: string, value: string): void => {
    if (typeof window === "undefined") return;
    localStorage.setItem(key, value);
  },
};
