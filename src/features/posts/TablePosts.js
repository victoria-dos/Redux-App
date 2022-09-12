import React from 'react';
import {TableComposable, Caption, Thead, Tr, Th, Tbody, Td} from '@patternfly/react-table';


export const TablePosts = ({ data, columns }) => (
    <TableComposable aria-label="Simple table" variant="compact">
        <Caption>Simple table using composable components</Caption>
        <Thead>
          <Tr>
            <Th>{columns.title}</Th>
            <Th>{columns.author}</Th>
            <Th>{columns.date}</Th>
            <Th>{columns.content}</Th>
            <Th>{columns.viewLink}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map(post => <Tr key={post.id}>
              <Td dataLabel={columns.title}>{post.title}</Td>
              <Td dataLabel={columns.author}>{post.user}</Td>
              <Td dataLabel={columns.date}>{post.date}</Td>
              <Td dataLabel={columns.content}>{post.content}</Td>
              <Td dataLabel={columns.viewLink}>{post.id}</Td>
            </Tr>)}
        </Tbody>
      </TableComposable>
)