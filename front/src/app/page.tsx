'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface Apartment {
  _id: string;
  unitName: string;
  unitNumber: string;
  project: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  coverImage: string;
  images?: string[];
}

export default function Home() {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    async function fetchApartments() {
      try {
        const res = await axios.get('http://localhost:5000/api/apartments');
        setApartments(res.data.data.response);
      } catch (error) {
        setError('Error fetching apartments. Please try again later.'); 
        console.error('Error fetching apartments:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchApartments();
  }, []);


  const filteredApartments = apartments.filter((apt) => {
    const searchText = searchQuery.toLowerCase();
    return (
      apt.unitName.toLowerCase().includes(searchText) ||
      apt.unitNumber.toLowerCase().includes(searchText) ||
      apt.project.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="mx-auto p-4 sm:p-6 max-w-7xl">

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by unit name, number, or project"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <h1 className="text-3xl font-bold mb-8 text-center text-red-600">Apartment Listings</h1>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <i className="fas fa-spinner fa-spin text-4xl text-gray-500"></i>
        </div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div> 
      ) : (
        <>
          {filteredApartments.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApartments.map((apt) => (
                <div
                  key={apt._id}
                  className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden flex flex-col transition-transform hover:shadow-lg hover:scale-[1.02]"
                >
                  <img
                    src={apt.coverImage || '/placeholder.jpg'}
                    alt={apt.unitName}
                    className="w-full h-64 object-cover"
                    onError={(e) => (e.currentTarget.src = '/placeholder.jpg')}
                  />
                  <div className="p-4 flex-grow flex flex-col">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">
                      {apt.unitName}{' '}
                      <span className="text-sm text-gray-500">
                        ({apt.unitNumber})
                      </span>
                    </h2>
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Price:</strong>{' '}
                      <span className="text-yellow-300">$</span>
                      {apt.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Bedrooms:</strong> {apt.bedrooms},{' '}
                      <strong>Bathrooms:</strong> {apt.bathrooms}
                    </p>
                    <Link href={`/apartments/${apt._id}`}>
                      <button className="mt-auto p-3 rounded bg-red-500 text-white hover:bg-red-600 text-sm w-full">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 col-span-3">No apartments available.</p>
          )}
        </>
      )}
    </div>
  );
}
