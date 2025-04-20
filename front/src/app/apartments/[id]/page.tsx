import Image from "next/image";
import Link from "next/link";

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
    images: string[];
}

export default async function ApartmentDetails({ params }: { params: { id: string } }) {
    const { id } = await params;

    const res = await fetch(`http://backend:5000/api/apartments/${id}`, {
        cache: 'no-store',
    });
    
    // const res = await fetch(`http://localhost:5000/api/apartments/${id}`, {
    //     cache: 'no-store',
    // });

    const data = await res.json();
    const apt: Apartment = data.data.apartment;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="relative w-full h-96 mb-8">
                <Image
                    src={apt.coverImage}
                    alt={apt.unitName}
                    fill
                    className="object-cover rounded-md shadow-md hover:scale-105 transition-transform"
                />
            </div>

            <div className="mb-6">
                <h1 className="text-4xl font-semibold text-gray-800 mb-2">
                    {apt.unitName} ({apt.unitNumber})
                </h1>
                <p className="text-xl text-gray-600 mb-4"><strong>Project:</strong> {apt.project}</p>
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <p className="text-lg"><strong>Price:</strong> <span className="text-yellow-300">$</span>{apt.price}</p>
                    <p className="text-lg"><strong>Bedrooms:</strong> {apt.bedrooms}</p>
                    <p className="text-lg"><strong>Bathrooms:</strong> {apt.bathrooms}</p>
                    <p className="text-lg"><strong>Area:</strong> {apt.area} sqft</p>
                </div>
                <p className="text-gray-700">{apt.description}</p>
            </div>

            <div className="mt-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Additional Images</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {apt.images.map((image, index) => (
                        <div key={index} className="relative w-full h-60">
                            <Image
                                src={image}
                                alt={`Apartment image ${index + 1}`}
                                fill
                                className="object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 flex justify-center">
                <Link href="/">
                    <button className="px-6 py-3 bg-red-600 text-white text-lg rounded-full shadow-lg hover:bg-red-700 transition ease-in-out duration-200">
                        Back to Listings
                    </button>
                </Link>
            </div>
        </div>
    );
}
