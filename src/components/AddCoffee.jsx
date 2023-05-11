import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const coffeeDetails = { name, chef, supplier, taste, category, details, photo };
        console.log(coffeeDetails);

        fetch('http://localhost:5000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffeeDetails),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Coffee Added')
            form.reset();
        })
    }

    return (
        <div className='bg-addcoffee-img'>
            <div className='custom-container py-10'>
                <Link to={'/'}>
                    <button className='btn bg-transparent text-black gap-2 border-0 hover:bg-[#D2B48C]'>
                        <FaArrowLeft></FaArrowLeft>
                        Back to home
                    </button>
                </Link>
                <div className='bg-[#F4F3F0] mt-8 px-24 py-16'>
                    <div className="text-center">
                        <h1 className='text-5xl'>Add New Coffee</h1>
                        <p className='secondary-font py-8'>
                            It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                        </p>
                    </div>
                    <form onSubmit={handleAddCoffee}>
                        <div className='grid lg:grid-cols-2 gap-4'>
                            <div>
                                <label htmlFor="name" className='block secondary-font pl-1 font-semibold'>Name</label>
                                <input type="text" name='name' placeholder='Enter Coffee Name' className='w-full p-2 rounded-md secondary-font my-3' />
                            </div>
                            <div>
                                <label htmlFor="name" className='block secondary-font pl-1 font-semibold'>Chef</label>
                                <input type="text" name='chef' placeholder='Enter Coffee Chef' className='w-full p-2 rounded-md secondary-font my-3' />
                            </div>
                            <div>
                                <label htmlFor="name" className='block secondary-font pl-1 font-semibold'>Supplier</label>
                                <input type="text" name='supplier' placeholder='Enter Coffee Supplier' className='w-full p-2 rounded-md secondary-font my-3' />
                            </div>
                            <div>
                                <label htmlFor="name" className='block secondary-font pl-1 font-semibold'>Taste</label>
                                <input type="text" name='taste' placeholder='Enter Coffee Taste' className='w-full p-2 rounded-md secondary-font my-3' />
                            </div>
                            <div>
                                <label htmlFor="name" className='block secondary-font pl-1 font-semibold'>Category</label>
                                <input type="text" name='category' placeholder='Enter Coffee Category' className='w-full p-2 rounded-md secondary-font my-3' />
                            </div>
                            <div>
                                <label htmlFor="name" className='block secondary-font pl-1 font-semibold'>Details</label>
                                <input type="text" name='details' placeholder='Enter Coffee Details' className='w-full p-2 rounded-md secondary-font my-3' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className='block secondary-font pl-1 font-semibold'>Photo</label>
                            <input type="text" name='photo' placeholder='Enter Photo URL' className='w-full p-2 rounded-md secondary-font my-3' />
                        </div>
                        <input type="submit" value="Add Coffee" className='btn bg-[#D2B48C] text-[#331A15] tracking-wider w-full mt-3' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;