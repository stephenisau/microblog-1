import { useState } from 'react';

const useLocalStorage = (key, initial) => {

  const getFromLocalStorage = () => {
    try {
      const storage = window.localStorage.getItem(key);
      if (storage) return JSON.parse(storage)[key];
      return initial;
    } catch (error) {
      console.log("Error: ", error);
      return initial;
    }
  }
  const [storedValue, setStoredValue] = useState(getFromLocalStorage())

  const setValue = (value) => {
    try {
      const valueToStore = typeof value === "function" ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.log(err);
    };
  };

  return [storedValue, setValue]; 
}