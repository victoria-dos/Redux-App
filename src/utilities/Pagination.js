import { React, useState } from 'react';

import { useSelector } from "react-redux";
import { Pagination, PaginationVariant } from '@patternfly/react-core';

export const PaginationBottom = (props) => {
    const posts = useSelector((state) => state.posts)
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(1);
    const perPageOptions = [{title: '1', value: 1}, {title: '2', value: 2}, {title: '3', value: 3}]
    const titles = { items: 'posts', page: 'page', pages: 'pages', itemsPerPage: 'Items per page', perPageSuffix: 'per page', toFirstPage: 'Go to first page', toPreviousPage: 'Go to previous page', toLastPage: 'Go to last page', toNextPage: 'Go to next page', optionsToggle: '', currPage: 'Current page', paginationTitle: 'Pagination', ofWord: 'of' }
    return (
        <Pagination
          perPageComponent="button"
          itemCount={posts.length}
          widgetId="pagination-options-menu-bottom"
          variant={PaginationVariant.bottom}
          onSetPage={(e, pageNumber) => {setPage(pageNumber)}}
          onPerPageSelect={(e, pageNumber) => {setPerPage(pageNumber)}}
          perPage={perPage}
          perPageOptions={perPageOptions}
          titles={titles}
          page={page}
        />
      );
}

  export default PaginationBottom;