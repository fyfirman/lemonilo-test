import { useEffect, useState } from 'react';

const useFilter = (initialData: Array<any> = [], key: any) => {
  const [data, setData] = useState(initialData);

  const [filter, setFilter] = useState(null);

  useEffect(() => {
    if (filter) {
      setData(initialData.filter((value) => value[key] === filter));
    }
  }, [filter]);

  return { data, setFilter };
};

export default useFilter;
