import useFilterableState from '@utils/useFilterableState';
import React from 'react';
import styled from 'styled-components/native';
import FilterButton from '../FilterButton/FilterButton';
import { HighlightItemData } from '../HighlightItem/HighlightItem';
import HighlightSwiper from '../HighlightSwiper/HighlightSwiper';

interface FilterableSwiperProps {
  data: HighlightItemData[];
  filterBy: string;
  filterOptions: { key: any; label: string }[];
  onPress: (item: HighlightItemData) => any;
}

const FilterContainer = styled.ScrollView`
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  padding-left: ${({ theme }) => theme.spacing(2)}px;
`;

const FilterableSwiper = ({ data, filterOptions, filterBy, onPress }: FilterableSwiperProps) => {
  const filterableState = useFilterableState(data, filterBy);

  const handleFilter = (key?: number) => {
    filterableState.setFilter(key);
  };

  const renderFilterButtons = () =>
    filterOptions.map((value, index) => (
      <FilterButton
        key={index}
        onPress={() => handleFilter(value.key)}
        title={value.label}
        active={filterableState.filter === value.key}
      />
    ));

  return (
    <>
      <FilterContainer horizontal showsHorizontalScrollIndicator={false}>
        <FilterButton onPress={() => handleFilter()} title="All" active={!filterableState.filter} />
        {renderFilterButtons()}
      </FilterContainer>
      <HighlightSwiper
        heading="Vacation"
        description=""
        data={filterableState.data}
        onPress={onPress}
      />
    </>
  );
};

export default FilterableSwiper;
