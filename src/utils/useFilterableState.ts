import { useEffect, useState } from 'react';
import resolve from './resolveProperty';

const useFilterableState = (initialData: Array<any> = [], key: any) => {
  const [data, setData] = useState(initialData);

  const [filter, setFilter] = useState<any>(null);

  useEffect(() => {
    if (filter) {
      setData(initialData.filter((value) => resolve(key, value) === filter));
    } else {
      setData(initialData);
    }
  }, [filter]);

  return { data, setFilter, filter };
};

export default useFilterableState;
