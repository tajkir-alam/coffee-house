import { Link } from 'react-router-dom'
import categoryImg1 from './assets/icons/1.png'
import categoryImg2 from './assets/icons/2.png'
import categoryImg3 from './assets/icons/3.png'
import categoryImg4 from './assets/icons/4.png'
import { FaCoffee } from "react-icons/fa";
import { useEffect, useState } from 'react'
import DisplayCoffees from './components/DisplayCoffees'

function App() {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/coffees')
      .then(res => res.json())
      .then(data => setCoffees(data))
  }, [])

  return (
    <>
      {/* Banner Section */}
      <div className="py-60 bg-banner-img bg-cover">
        <div className="px-2 lg:px-32 w-3/4">
          <h2 className="text-6xl text-white">Would you like a Cup of Delicious Coffee?</h2>
          <p className="secondary-font text-white">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
          <button className="btn bg-[#E3B577] text-[#242222] normal-case tracking-wider">Learn More</button>
        </div>
      </div>

      <div className="bg-[#ECEAE3]">
        <div className="custom-container grid md:grid-cols-2 lg:grid-cols-4 gap-6 py-14">
          <div>
            <img src={categoryImg1} alt="" />
            <h3 className='py-4 font-semibold text-xl'>Awesome Aroma</h3>
            <p className='text-[#1B1A1A] text-md'>You will definitely be a fan of the design & aroma of your coffee</p>
          </div>
          <div>
            <img src={categoryImg2} alt="" />
            <h3 className='py-4 font-semibold text-xl'>High Qyality</h3>
            <p className='text-[#1B1A1A] text-md'>We served the coffee to you maintaining the best quality</p>
          </div>
          <div>
            <img src={categoryImg3} alt="" />
            <h3 className='py-4 font-semibold text-xl'>Pure Grades</h3>
            <p className='text-[#1B1A1A] text-md'>The coffee is made of the green coffee beans which you will love</p>
          </div>
          <div>
            <img src={categoryImg4} alt="" />
            <h3 className='py-4 font-semibold text-xl'>Proper Roasting</h3>
            <p className='text-[#1B1A1A] text-md'>Your coffee is brewed by first roasting the green coffee beans</p>
          </div>
        </div>
      </div>

      <main className='my-20 custom-container bg-section-bg'>
        <div className="text-center">
          <p className='secondary-font'>--Sip & Savor--</p>
          <h2 className='text-5xl my-3'>Our Popular Products</h2>
          <Link to={'/add-coffee'}>
            <button className='btn bg-[#E3B577] gap-4'>
              <span className='shadow-md tracking-widest'>Add Coffee</span>
              <FaCoffee></FaCoffee>
            </button>
          </Link>
        </div>

        <div className='mt-6 grid lg:grid-cols-2 gap-4'>
          {coffees &&
            coffees.map(coffee => <DisplayCoffees key={coffee._id} coffee={coffee}></DisplayCoffees>)
          }
        </div>
      </main>
    </>
  )
}

export default App
