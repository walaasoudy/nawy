'use client';

import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function AddApartment() {
    const [formData, setFormData] = useState({
        unitName: "",
        unitNumber: "",
        project: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        area: "",
        description: "",
        coverImage: "",
        images: [] as string[]
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFormData({ ...formData, images: value.split(',').map(url => url.trim()) });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/apartments", {
                ...formData,
                price: Number(formData.price),
                bedrooms: Number(formData.bedrooms),
                bathrooms: Number(formData.bathrooms),
                area: Number(formData.area)
            });
            toast.success("✅ Apartment added successfully!");
            console.log(res.data);
        } catch (error) {
            console.error("Error adding apartment:", error);
            toast.error("❌ Something went wrong!");
        }
    };

    return (
        <div className="mx-auto p-6 max-w-3xl">
            {/* Toast container for success/error messages */}
            <ToastContainer />

            <h1 className="text-3xl font-bold mb-6 text-center text-red-600">
                Add New Apartment
            </h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg p-6 space-y-4"
            >
                {[
                    { name: 'unitName', placeholder: 'Unit Name' },
                    { name: 'unitNumber', placeholder: 'Unit Number' },
                    { name: 'project', placeholder: 'Project' },
                    { name: 'price', placeholder: 'Price', type: 'number' },
                    { name: 'bedrooms', placeholder: 'Bedrooms', type: 'number' },
                    { name: 'bathrooms', placeholder: 'Bathrooms', type: 'number' },
                    { name: 'area', placeholder: 'Area (sqft)', type: 'number' },
                    { name: 'coverImage', placeholder: 'Cover Image URL' }
                ].map((field) => (
                    <input
                        key={field.name}
                        type={field.type || "text"}
                        name={field.name}
                        placeholder={field.placeholder}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                ))}

                <input
                    type="text"
                    name="images"
                    placeholder="Image URLs (comma separated)"
                    onChange={handleImagesChange}
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    rows={4}
                />

                <button
                    type="submit"
                    className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-700 transition duration-200"
                >
                    Submit Apartment
                </button>
            </form>
        </div>
    );
}
