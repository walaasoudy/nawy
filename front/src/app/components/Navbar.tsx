'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
            <h1 className="text-2xl font-bold text-red-600">Apartments App</h1>
            <div className="space-x-4">
                <Link
                    href="/"
                    className={`font-medium ${isActive('/') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'}`}
                >
                    Home
                </Link>
                <Link
                    href="/add-apartment"
                    className={`font-medium ${isActive('/add-apartment') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'}`}
                >
                    Add Apartment
                </Link>
            </div>
        </nav>
    );
}
