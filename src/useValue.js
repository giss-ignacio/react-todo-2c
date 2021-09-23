import { useState } from 'react';

/**
 * Funcion obtener el valor despues se setear un nuevo valor de forma sincronica.
 * TODO: ver forma mas correcta segun React de hacerlo
 * 
 * @param {*} initialValue 
 * @returns 
 */
export default function useValue(initialValue) {
   const [value, updateValue] = useState(initialValue);

   let current = value;

   const get = () => current;

   const set = newValue => {
      current = newValue;
      updateValue(newValue);
      return current;
   }

   return {
      get,
      set,
   }
}