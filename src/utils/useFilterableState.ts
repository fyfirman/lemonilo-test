import { useEffect, useState } from 'react';
import resolve from './resolveProperty';

const useFilterableState = (initialData: Array<any> = [], key: any) => {
  const [data, setData] = useState(initialData);
  const [filter, setFilter] = useState<any>(null);

  useEffect(() => {
    let updatedData = initialData;
    if (filter) {
      updatedData = initialData.filter((value) => resolve(key, value) === filter);
    }

    setData(updatedData);
  }, [filter]);

  return { data, setFilter, filter };
};

export default useFilterableState;
