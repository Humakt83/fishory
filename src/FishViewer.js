import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Table } from 'reactstrap';

export const GET_FISHES = gql`
  query GetFishes {
    fishes {
      id
      name
      size
    }
  }
`;

export default () => (
  <Query query={GET_FISHES}>
    {({ loading, data }) => !loading && (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {console.log(data)}
          {data.fishes.map(fish => (
            <tr key={fish.id}>
              <td>{fish.name}</td>
              <td>{fish.size}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )}
  </Query>
);