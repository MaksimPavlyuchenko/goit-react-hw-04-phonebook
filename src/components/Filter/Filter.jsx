import PropTypes from 'prop-types';

import { Label, Input } from './Filter.styled';

const Filter = ({ filterData, filterHandler }) => {
  return (
    <Label>
      Find contact by name
      <Input type="text" value={filterData} onChange={filterHandler} />
    </Label>
  );
};
export default Filter;

Filter.propTypes = {
  filterData: PropTypes.string.isRequired,
  filterHandler: PropTypes.func.isRequired,
};
