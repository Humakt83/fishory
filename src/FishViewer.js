import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Table } from 'reactstrap';

export const GET_FISHES = gql`
  query {
    fishes {
      id
      name
      size
      minimum_aquarium_size
    }
  }
`;

export const SEARCH_FISH = gql`
  query SearchFish($name: String) {
    searchFish(name: $name) {
      id
      name
      size
      minimum_aquarium_size
    }
  }
`;

export default ({search, minimumTankSize}) => {
  const queryToUse = search && search.trim().length > 2 ? SEARCH_FISH : GET_FISHES;
  return (<Query query={queryToUse} variables={{name: search}}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;
      const fishes = data.searchFish || data.fishes || [];
      return (
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Size</th>
              <th>Minimum Tank Size</th>
            </tr>
          </thead>
          <tbody>
            {fishes
              .filter(fish => !minimumTankSize || minimumTankSize <= fish.minimum_aquarium_size)
              .map(fish => (
              <tr key={fish.id}>
                <td>{fish.name}</td>
                <td>{fish.size}</td>
                <td>{fish.minimum_aquarium_size}</td>
              </tr>
            ))}
          </tbody>
        </Table>
    )}}
    </Query>)
};