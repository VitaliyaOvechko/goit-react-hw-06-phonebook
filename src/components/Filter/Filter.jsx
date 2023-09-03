import PropTypes from 'prop-types';
import { FilterInput, FilterLable } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/actions';

export const Filter = () => {
  const { searchQuery } = useSelector(state => state.filters);
  const dispatch = useDispatch();

  // const onChange = e => {
  //   dispatch(changeFilter(e.target.value));
  // };

  return (
    <FilterLable>
      Find contacts by name
      <FilterInput
        type="text"
        value={searchQuery}
        // onChange={onChange}
        onChange={event => dispatch(changeFilter(event.currentTarget.value))}
      ></FilterInput>
    </FilterLable>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
