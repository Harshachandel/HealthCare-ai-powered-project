// doctorsData.js
import {v4 as uuidv4} from 'uuid'

const doctors = [
  {
    name: 'Dr. Aditya Das',
    title: 'Gastroenterologist',
    image: 'https://plus.unsplash.com/premium_photo-1664475450083-5c9eef17a191',
    id:uuidv4(),
    gender: "female"
  },
  {
    name: 'Dr. Bind Kumar',
    title: 'Neurologist',
    image: 'https://freerangestock.com/sample/147805/portrait-of-happy-female-doctor-smiling-in-hospital.jpg',
    id:uuidv4(),
    gender: "female"

  },
  {
    name: 'Dr. Kamal Gupta',
    title: 'Orthopedic',
    image: 'https://images.splitshire.com/full/The-Confident-Doctor_aXwbi.png',
    id:uuidv4(),
    gender: "male"
  },
  {
    name: 'Dr. Kamal Gupta',
    title: 'Psychiatrist/Psychologist',
    image: 'https://www.shutterstock.com/shutterstock/videos/1094481783/thumb/4.jpg',
    id:uuidv4(),
    gender: "female"
  },
  {
    name: 'Dr. Kamal Gupta',
    title: 'Dermatologist',
    image: 'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg',
    id:uuidv4(),
    gender: "male"
  },
  {
    name: 'Dr. Nisha Mehra',
    title: 'Multi Specialist',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg',
    id:uuidv4(),
    gender: "male"
  }
];

export default doctors;
