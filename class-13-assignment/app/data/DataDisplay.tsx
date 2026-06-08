import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

type Album = {
  userId: number;
  id: number;
  title: string;
};

async function fetchAlbums() {
  const response = await axios.get<Album[]>(
    'https://jsonplaceholder.typicode.com/albums'
  );
  return response.data;
}

export default function DataDisplay() {
  const {
    data: albums = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['albums'],
    queryFn: fetchAlbums,
  });

  return (
    <main className="p-6">
      <h3 className="text-2xl font-bold">My API Data List</h3>
      <br />
      {isLoading && <p>Loading albums...</p>}
      {isError && <p>Unable to load albums.</p>}
      {!isLoading && !isError && (
        <ul className="list-disc pl-6 space-y-2">
          {albums.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </main>
  );
}