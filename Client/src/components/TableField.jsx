import React from 'react';
import { useTable, useSortBy, usePagination, useFilters } from 'react-table';
import { Button, Space, Tooltip } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
} from '@ant-design/icons';
import ButtonGroup from './Button';
import SelectField from './SelectField';

const TableField = ({ columns, data, actions, OnFilter }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { pageIndex, pageSize },
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    gotoPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useFilters,  // Use useFilters before useSortBy
    useSortBy,
    usePagination
  );
  
  return (
    <div className="table-responsive">
      <table {...getTableProps()} className="table table-hover table-striped">
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  key={column.id}
                  scope="col"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <SortDescendingOutlined />
                      ) : (
                        <SortAscendingOutlined />
                      )
                    ) : (
                      ''
                    )}
                  </span>
                  {column.render('Filter')} {/* Include the filter UI */}
                </th>
              ))}
              {actions && <th scope="col">Actions</th>}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr key={rowIndex} {...row.getRowProps()}>
                {row.cells.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell.render('Cell')}</td>
                ))}
                {actions && (
                  <td>
                    <Space>
                      {actions.edit && (
                        <Tooltip title="Edit">
                          <Button
                            icon={<EditOutlined style={{ color: '#FFFDD0' }} />}
                            onClick={() => actions.edit(row.original)}
                            style={{ backgroundColor: '#faad14', border: 'none' }}
                          />
                        </Tooltip>
                      )}
                      {actions.delete && (
                        <Tooltip title="Delete">
                          <Button
                            icon={<DeleteOutlined style={{ color: '#FFFDD0' }} />}
                            onClick={() => actions.delete(row.original)}
                            style={{ backgroundColor: '#f5222d', border: 'none' }}
                          />
                        </Tooltip>
                      )}
                      {actions.view && (
                        <Tooltip title="View">
                          <Button
                            icon={<EyeOutlined style={{ color: '#FFFDD0' }} />}
                            onClick={() => actions.view(row.original)}
                            style={{ backgroundColor: '#52c41a', border: 'none' }}
                          />
                        </Tooltip>
                      )}
                    </Space>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Pagination controls */}
      <div className='d-flex justify-content-center align-items-center gap-3'>
        <div className="di">
          <ButtonGroup onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous Page
          </ButtonGroup>
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {Math.ceil(data.length / pageSize)}
            </strong>{' '}
          </span>
          <ButtonGroup onClick={() => nextPage()} disabled={!canNextPage}>
            Next Page
          </ButtonGroup>
        </div>
        <div className="d-flex">
          <span className='d-flex'>
            <label> Go to page:{' '} </label>
            <input
              type="number"
              value={pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: '50px' }}
            />
          </span>
        </div>
        <div className="div">
          <SelectField
            options={[10, 20, 30, 40, 50].map(pageSize => ({
              label: `Show ${pageSize}`,
              value: pageSize,
            }))}
            placeholder="Select Page Size"
            onChange={e => {
              setPageSize(Number(e));
            }}
            value={pageSize}
            style={{ width: '20%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default TableField;
