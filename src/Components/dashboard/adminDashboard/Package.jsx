import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';

const Package = () => {

const [packages, setPackages] = useState([])
const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
const [isAddModalOpen, setIsAddModalOpen] = useState(false);
const [currentPackage, setCurrentPackage] = useState(null);
const API_URL = 'http://localhost:5000/packages';
    const fetchPackages = async () => {
        try {
          const { data } = await axios.get(API_URL);
          setPackages(data);
        } catch (error) {
          console.error('Error fetching packages:', error);
        }
      };

      useEffect(() => {
        fetchPackages();
      }, []);

      console.log(packages);


      const handleDeletePackage = async (id) => {
        Swal.fire({
          title: 'Are you sure?',
          text: 'Do you want to delete this package? This action cannot be undone.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Yes, delete it!',
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              await axios.delete(`${API_URL}/${id}`);
              fetchPackages();
              Swal.fire('Deleted!', 'The package has been deleted.', 'success');
            } catch (error) {
              console.error('Error deleting package:', error);
              Swal.fire('Error!', 'Something went wrong. Please try again.', 'error');
            }
          }
        });
      };

  const handleUpdateClick = (pkg) => {
    setCurrentPackage(pkg);
    setIsUpdateModalOpen(true);
  };

  const handleAddPackage = async(e) => {
    e.preventDefault();
    const newPackage = {
      id: Date.now(),
      name: e.target.name.value,
      destination: e.target.destination.value,
      date: e.target.date.value,
      img: e.target.img.value,
    };
    try {
       const result = await axios.post(API_URL, newPackage);

       console.log(result.status, 'hey');

       if(result?.status === 201){
        setIsAddModalOpen(false);
        toast.success('Package added successfully')
        fetchPackages()
    
        
       
       }

      } catch (error) {
        console.error('Error adding package:', error);
        toast.error(error?.message)
        setIsAddModalOpen(false);
      }
 
  };

  const handleUpdatePackage = async (e) => {
    e.preventDefault();
    const updatedPackage = {
      name: e.target.name.value,
      destination: e.target.destination.value,
      date: e.target.date.value,
      img: e.target.img.value,
    };
    try {
     const result =  await axios.put(`${API_URL}/${currentPackage.id}`, updatedPackage);
      fetchPackages();
      console.log(result, "ki abosta mona");
      setIsUpdateModalOpen(false);
      if(result.status === 200){
        toast.success('Update successfully')
      }
    } catch (error) {
    toast.error('Something went wrong please try again later')
    }
  };


  return (
    <div className="text-center bg-blue-900 min-h-screen">
      {/* Header Section */}
      <Toaster/>
      <div className="md:flex px-6 py-8 items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Package Management</h1>
        <div className="text-white">
          <ul className="p-4 rounded mt-2 bg-black flex flex-row gap-8 justify-center">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="list-disc">
              <a href="/admin">Overview</a>
            </li>
            <li className="list-disc">
              <a href="/admin/booking">Booking</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Add Package Button */}
      <div className="flex justify-end px-6">
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-[#2095ae] text-white py-2 px-4 rounded flex items-center gap-2"
        >
          <span>+ Add Package</span>
        </button>
      </div>

      {/* Table Section */}
      <div className="px-6 mt-6 overflow-x-scroll  ">
        <table className=" w-full  bg-white text-left rounded shadow-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Package Name</th>
              <th className="px-4 py-2">Destination</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg) => (
              <tr key={pkg.id} className="border-t">
                <td className="px-4 py-2">{pkg.name}</td>
                <td className="px-4 py-2">{pkg.destination}</td>
                <td className="px-4 py-2">{pkg.date}</td>
                <td className="px-4 py-2">
                  <img src={pkg.img} alt={pkg.name} className="w-16 h-16 rounded" />
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleUpdateClick(pkg)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Update
                  </button>
                  <button
                      onClick={() => handleDeletePackage(pkg.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      {isUpdateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h2 className="text-xl font-bold mb-4">Update Package</h2>
            <form onSubmit={handleUpdatePackage}>
              <div className="mb-4">
                <label className="block mb-1">Package Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={currentPackage?.name}
                  className="border rounded px-4 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Destination</label>
                <input
                  type="text"
                  name="destination"
                  defaultValue={currentPackage?.destination}
                  className="border rounded px-4 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  defaultValue={currentPackage?.date}
                  className="border rounded px-4 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Image URL</label>
                <input
                  type="text"
                  name="img"
                  defaultValue={currentPackage?.img}
                  className="border rounded px-4 py-2 w-full"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsUpdateModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Package Modal */}
      {isAddModalOpen && (
        <div className="fixed w-full inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg lg:w-1/2  w-full max-h-svh overflow-y-scroll mx-auto">
            <h2 className="text-xl font-bold mb-4">Add Package</h2>
            <form onSubmit={handleAddPackage}>
              <div className="mb-4">
                <label className="block mb-1">Package Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Package Name"
                  className="border rounded px-4 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Destination</label>
                <input
                  type="text"
                  name="destination"
                  placeholder="Destination"
                  className="border rounded px-4 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  className="border rounded px-4 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Image URL</label>
                <input
                  type="text"
                  name="img"
                  placeholder="Image URL"
                  className="border rounded px-4 py-2 w-full"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#2095ae] text-white px-4 py-2 rounded"
                >
                  Add Package
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Package;
