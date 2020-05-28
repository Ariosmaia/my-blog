import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'gatsby';

import * as S from './styles';

function Pagination({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) {
  return (
    <S.PaginationWrapper>
      {!isFirst && <Link to={prevPage}>← página anterior</Link>}
      <p>
        {currentPage} de {numPages}
      </p>
      {!isLast && <Link to={nextPage}>proxima página →</Link>}
    </S.PaginationWrapper>
  );
}

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
};

Pagination.defaultProps = {
  prevPage: '',
  nextPage: '',
};

export default Pagination;
