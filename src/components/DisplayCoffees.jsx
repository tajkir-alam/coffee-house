import React from 'react';
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DisplayCoffees = ({ coffee }) => {
    const { _id, photo, name, chef } = coffee;

    const deleteCoffee = () => {
        fetch(`http://localhost:5000/coffees/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Succsessfully deleted')
        })
    }
    
    return (
        <div className='bg-[#F5F4F1] p-4 pr-8 grid md:grid-cols-4 gap-4 items-center'>
            <div className=''>
                <img src={photo} alt="" className='w-full' />
            </div>
            <div className='col-span-2'>
                <p className='secondary-font'><span className='font-semibold secondary-font'>Name: </span> {name}</p>
                <p className='secondary-font my-2'><span className='font-semibold secondary-font'>Chef: </span> {chef}</p>
                <p className='secondary-font'><span className='font-semibold secondary-font'>Price: </span> 890 tk</p>
            </div>
            <div className='flex md:grid gap-3 justify-end'>
                <div className='bg-[#D2B48C] p-2 rounded'>
                    <FaEye className='text-white'></FaEye>
                </div>
                <Link to={`/updated-coffee/${_id}`} className='bg-[#3C393B] p-2 rounded'>
                    <FaPen className='text-white'></FaPen>
                </Link>
                <div onClick={deleteCoffee} className='bg-[#EA4744] p-2 rounded cursor-pointer'>
                    <FaTrash className='text-white'></FaTrash>
                </div>
            </div>
        </div>
    );
};

export default DisplayCoffees;