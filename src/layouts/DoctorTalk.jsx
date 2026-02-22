import React, { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import doctors from "../data/doctorsData";

const DoctorTalk = () => {
  const { id } = useParams();

  const [DoctorId, setDoctorId] = useState(null);
  const [voicesReady, setVoicesReady] = useState(false);
  const [voiceCache, setVoiceCache] = useState({});
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]); // Store conversation

  // 🔍 Get Doctor
  useEffect(() => {
    const foundDoctor = doctors.find((ele) => ele.id === id);
    setDoctorId(foundDoctor);
  }, [id]);

  // 🎤 Load Voices
  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices.length) return;

      const maleVoice =
        voices.find((v) => v.name.toLowerCase().includes("david")) ||
        voices.find((v) => v.lang === "en-IN");

      const femaleVoice =
        voices.find((v) => v.name.toLowerCase().includes("zira")) ||
        voices.find((v) => v.name.toLowerCase().includes("samantha"));

      setVoiceCache({ male: maleVoice, female: femaleVoice });
      setVoicesReady(true);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  if (!DoctorId) return <h2>Doctor not found</h2>;

  // 🔊 Speak Function
  const speak = (text) => {
    if (!voicesReady) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN";

    if (DoctorId.gender === "male" && voiceCache.male) {
      utterance.voice = voiceCache.male;
    }

    if (DoctorId.gender === "female" && voiceCache.female) {
      utterance.voice = voiceCache.female;
    }

    window.speechSynthesis.speak(utterance);
  };

  // 🧠 Doctor Reply Logic
  const doctorReply = (text) => {
    const userText = text.toLowerCase();
    let reply =
      "I could not understand clearly. Please explain your symptoms.";

    if (/stomach|abdomen|belly|gas/i.test(userText)) {
      reply =
        "It seems like you have stomach pain. Avoid spicy food and drink warm water.";
    } else if (/headache|migraine|head pain/i.test(userText)) {
      reply =
        "Headache may be due to stress or dehydration. Please take rest and drink water.";
    } else if (/fever|temperature/i.test(userText)) {
      reply =
        "Fever indicates infection. Check your temperature and consult a doctor if high.";
    } else if (/cough|cold|throat/i.test(userText)) {
      reply =
        "Do you have dry cough or mucus? It may be a throat infection.";
    }

    // Update chat history
    setChatHistory((prev) => [...prev, { from: "doctor", text: reply }]);

    speak(reply);
  };

  // 🔹 Handle user submitting problem
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Add user input to chat
    setChatHistory((prev) => [...prev, { from: "user", text: userInput }]);

    doctorReply(userInput); // doctor answers
    setUserInput(""); // clear input
  };

  return (
    <div className="doctor-talk-wrapper">
      <div className="doctor-talk-card">
        <div className="doctor-talk-content">
          <img
            src={DoctorId.image}
            alt="Doctor"
            className="doctor-avatar"
          />

          <h3 className="doctor-name">{DoctorId.name}</h3>
          <p className="doctor-subtitle">{DoctorId.title}</p>

          {/* Chat Area */}
          <div className="chat-history">
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                className={msg.from === "user" ? "chat-user" : "chat-doctor"}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="user-input-form">
            <input
              type="text"
              placeholder="Describe your problem..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="user-input-field"
            />
            <button type="submit" className="submit-btn">
              Ask Doctor
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorTalk;