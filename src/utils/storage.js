const storage = {
  setItem: (key, value) => {
    try {
      const v = JSON.stringify(value);
      localStorage.setItem(key, v);
    } catch (err) {
      console.error(`storage.setItem error for key=${key}`, err);
    }
  },

  getItem: (key) => {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : null;
    } catch (err) {
      console.error(`storage.getItem error for key=${key}`, err);
      return null;
    }
  },

  removeItem: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.error(`storage.removeItem error for key=${key}`, err);
    }
  },

  clear: () => {
    try {
      localStorage.clear();
    } catch (err) {
      console.error('storage.clear error', err);
    }
  },
};

export default storage;
