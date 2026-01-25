// FeaturesSection.jsx - EXACT STRUCTURE MATCH
import React, { useState } from 'react';
import '../style.css';
import FindDoctor from './ChooseDoctor';
import doctors from '../data/doctorsData';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import DoctorTalk from './DoctorTalk';

const FeaturesSection = () => {

  const [showDoctor,setShowDoctor] = useState([])
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const {register,handleSubmit,reset} = useForm()

  // function addData(data){
  //   alert(data)
  //   reset()
  // }

  const redirect = useNavigate()

  function addData(data){
  

    const filterData = doctors.filter((ele)=>{

      return ele.title==="Multi Specialist" || ele.title.toLowerCase() === data.Symptoms_Category.toLowerCase() 
    
    })

    setShowDoctor(filterData)

    // const filterID = doctors.filter((ele)=>ele.id)

  reset()
}

  return (
    <section className="fsct">
      <div className="fsctCont">
        {/* EXACT LEFT WHITE PANEL - Image + Text Side by Side */}
        <div className="fsctLeft">
          <img 
            src="https://blog.practo.com/wp-content/uploads/2020/06/Practo-Insight_Cover-Page_1576x620.jpg" 
            alt="MRI Scan" 
            className="fsctImgMain"
          />
          <div className="fsctTxt">
            <div className="fsctLogo">Medlogo</div>
            <h2 className="fsctTitle">Know About Our:</h2>
            <h3 className="fsctSubTitle">Clinic Management Software</h3>
            <p className="fsctDesc">
              Process essential info in one accessible place. Our software 
              digitally manages prescriptions, bills, and appointments.
            </p>
            <div className="fsctBtns">
              <button type='' className="fsctBtn1" data-bs-toggle="modal" data-bs-target="#symptomsModal">Try Now</button>
              <button className="fsctBtn2">Book Demo</button>
            </div>
          </div>
        </div>


        {/* <!-- Button trigger modal --> */}
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

{/* <!-- Modal --> */}
<div className="modal fade" id="symptomsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form action="" className="modal-body form" onSubmit={handleSubmit(addData)}>
        <label htmlFor="" className='pb-3'>Enter Symptoms</label>
        <input type="text" {...register('Symptoms')} className='form-control'/>
        
        <select name="" {...register('Symptoms_Category')} className='form-select mt-3 mb-3' id="">
          <option value="" selected disabled>Choose Symptoms Category</option>
          <option value="Multi Specialist">General</option>
          <option value="Gastroenterologist">Digestive / Stomach Pain</option>
          <option value="Neurologist">Headache / Migraine</option>
          <option value="Orthopedic">Back Pain / Joint Pain</option>
          <option value="Dermatologist">Skin</option>
          <option value="Psychiatrist/Psychologist">Mental / Emotional</option>
        </select>
        {/* ... */}
      
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#doctorModal">proceed</button>
      </div>

      </form>

    </div>
  </div>
</div>



<div className="modal fade" id="doctorModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div action="" className="modal-body d-flex justify-content-center gap-5 align-items-center">
        
          {
              showDoctor.map((ele)=>(
              <div key={ele.id} className='col-lg-4 p-2'>
              <img src={ele.image} className='w-100' alt="" />
              <h3>{ele.name}</h3>
              <h6>post : {ele.title}</h6>
              <button className="btn btn-primary" onClick={() => setSelectedDoctor(ele)} >Select Me</button>
              
          </div>
            ))
          }

         
   

      </div>

      <div>
         {
  selectedDoctor && (
    <h3 className="text-center text-success w-100">
      Thank you for selecting {selectedDoctor.name}
        {
        <button onClick={()=>redirect(`/DoctorChat/${selectedDoctor.id}`)} data-bs-dismiss="modal" className="btn btn-info">Chat With {selectedDoctor.name}</button>
      }
    </h3>
  )
}
      </div>

    </div>
  </div>
</div>





        {/* EXACT RIGHT 3 SQUARE CARDS - Vertical Stack */}
        <div className="fsctRight">
          <div className="fsctCard">
            <img src="https://ugc.futurelearn.com/uploads/images/2f/73/header_2f73d369-6dae-4b92-8b27-7ddb591856b3.jpg" alt="Syringe" className="fsctCardImg" />
            <div className="fsctCardTxt">
              <h4>We help enhance</h4>
              <p className='pb-5'>hospital operations with</p>
            </div>
          </div>

          <div className="fsctCard">
            <img src="https://86fb6716.delivery.rocketcdn.me/wp-content/uploads/2025/07/Digital-Transformation-Insights-Feature-Image.jpg" alt="Heartbeat" className="fsctCardImg" />
            <div className="fsctCardTxt">
              <h4>AI Heartbeat</h4>
              <p className='pb-5'>Monitor</p>
            </div>
          </div>

          <div className="fsctCard">
            <img src="https://images.stockcake.com/public/0/7/4/0746ef10-9e91-44dc-8ee6-b1b9451b7623_large/virtual-doctor-consultation-stockcake.jpg" alt="Clinic Door" className="fsctCardImg" />
            <div className="fsctCardTxt">
              <h4>Digital</h4>
              <p className='pb-5'>Clinic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
