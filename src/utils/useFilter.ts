import { useEffect, useState } from 'react';
import resolve from './resolveProperty';

const useFilter = (initialData: Array<any> = [], key: any) => {
  const [data, setData] = useState(initialData);

  const [filter, setFilter] = useState(null);

  useEffect(() => {
    if (filter) {
      setData(initialData.filter((value) => resolve(key, value) === filter));
    }
  }, [filter]);

  return { data, setFilter };
};

export default useFilter;