import { useState, useCallback } from 'react';

function useInput(initValue = '', validator) {
  const [value, setValue] = useState(initValue);

  const onChange = useCallback(e => {
    const value = e.currentTarget.value;
    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  }, []);

  return { value, setValue, onChange };
}

export default useInput;
