import "./App.css";
import React from "react";
import { useQuery, gql } from "@apollo/client";
const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      {data.locations.map(({ id, name, description, photo }) => (
        <div
          key={id}
          className='bg-white rounded-lg shadow-md overflow-hidden dark:bg-neutral-700'
        >
          <a href='#!' className='block w-full'>
            <img className='object-cover' src={photo} alt={name} />
          </a>
          <div className='p-4'>
            <h2 className='mb-2 text-lg font-medium text-neutral-800 dark:text-neutral-50'>
              {name}
            </h2>
            <p className='text-base text-neutral-600 dark:text-neutral-200'>
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <React.Fragment>
      <div className='container mx-auto my-10 px-4'>
        <h2 className='text-2xl font-bold text-center mb-6'>
          My First Apollo App 🚀
        </h2>
        <DisplayLocations />
      </div>
    </React.Fragment>
  );
}
