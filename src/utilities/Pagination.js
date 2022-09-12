export const defaultSettings = {
  limit: 1,
  offset: 0,
  itemCount: 0,
};

export const calculatePage = (limit = defaultSettings.limit, offset = 0) => Math.floor(offset / limit) + 1;

export const calculateOffset = (page = 1, limit = defaultSettings.limit) => (page - 1) * limit;


export const paginationBuilder = (pagination = {}, fetchData = () => undefined) => ({
  ...pagination,
  perPageComponent: "button",
  itemCount: pagination.count,
  perPage: pagination.limit,
  page: calculatePage(pagination.limit, pagination.offset),
  onSetPage: (e, page) => {
    fetchData({
      ...pagination,
      offset: calculateOffset(page, pagination.limit)
    });
  },
  perPageOptions: [
    {title: '1', value: 1},
    {title: '2', value: 2},
    {title: '3', value: 3}
  ],
  onPerPageSelect: (e, perPage) => {
    fetchData({
      ...pagination,
      offset: 0,
      limit: perPage,
    })
  }
});

export const isOffsetValid = (offset = 0, count = 0) => offset === 0 || count > offset;

export const getLastPageOffset = (count, limit) => count - (count % limit);