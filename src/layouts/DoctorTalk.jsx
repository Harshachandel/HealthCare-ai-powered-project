import React, { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import doctors from "../data/doctorsData";

const DoctorTalk = () => {

    const {id} = useParams()

    const [DoctorId,setDoctorId] = useState(null)

    // console.log(DoctorId.name)
    
    useEffect(() => {
    const foundDoctor = doctors.find(
      (ele) => ele.id === id
    );
    setDoctorId(foundDoctor);
  }, [id]);


   if (!DoctorId) return <h2>Doctor not found</h2>;



  const startCall = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.lang = "en-IN";
  recognition.start();

  recognition.onresult = (event) => {
    const userVoice = event.results[0][0].transcript;
    console.log("User:", userVoice);

    doctorReply(userVoice);
  };
};

const doctorReply = (userText) => {
  let reply = "Please tell me your symptoms";

  if (userText.toLowerCase().includes("stomach")) {
    reply = "I understand. Since you have stomach issues, avoid spicy food.";
  }

  const speech = new SpeechSynthesisUtterance(reply);
  speech.lang = "en-IN";
  window.speechSynthesis.speak(speech);
};





  return (
    <div className="doctor-talk-wrapper">
      <div className="doctor-talk-card">
        {/* Top Bar */}
        <div className="doctor-talk-header">
          <div className="status">
            <span className="status-dot" />
            {/* <span className="status-text">Not Connected {DoctorId}</span> */}
          </div>
          <div className="timer">00:00</div>
        </div>

        {/* Center Content */}
        
        <div className="doctor-talk-content">
  <img
    src={DoctorId.image}
    alt="Doctor"
    className="doctor-avatar"
  />

  <h3 className="doctor-name">{DoctorId.name}</h3>
  <p className="doctor-subtitle">{DoctorId.title}</p>

  <button onClick={startCall} className="start-call-btn">
    <span className="call-icon">📞</span>
    Start Call
  </button>
  {/* <button >Start Call</button> */}
</div>


      </div>
    </div>
  );
};

export default DoctorTalk;

