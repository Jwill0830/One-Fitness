// NavBar.js
import React from 'react';
import '../index.css';

function NavBar() {
  const links = [
    'Store', 'Nutrition', 'Strength', 'Cardio',
    'Flexibility', 'Classes', 'Coaching', 'Recovery', 'Sustainability', 'Research'
  ];

  const dropdownContents = {
    Store: [
      'Shop the latest', 'Nutrition', 'Strength', 'Cardio', 'Flexibility', 'Classes', 'Coaching', 'Apparel'
    ],
    Nutrition: [
      'Shop all Nutrition', 'Custom Diets Plans', 'Supplements', 'Custom Macros', 'Whole Foods', 'Instacart'
    ],
    Strength: [
      'Shop all Strength', 'Custom Design', 'Dumbells', 'Weight sets', 'Barbells & Weight bars',
      'Weight Plates & Bumper Plates', 'Weight Benches', 'Storage', 'Lifting Accessories', 'Gym Stations',
      'Racks & Cages'
    ],
    Cardio: [
        'Shop all Cardio', 'Treadmills', 'Elliptical Machines', 'Exercise Bikes', 'Rowing', 'Ski Machines',
        'Alternative motion', 'Steppers', 'Workout Mirrors', 'Flooring', 'Cardio Accessories'
      ],
      Flexibility: ['Your Flexbility', 'Pliability', 'Yoga'],
      Classes: ['Group', 'Individual', 'At home', 'Gym', 'Outdoors', 'Create a class'],
      Coaching: [
        'Goals Assessment', 'Beginner', 'Weekend warrior', 'Professional', 'Triathlete', 'Marathon', 'Become a coach'
      ],
      Recovery: [
        'Recovery assessment', 'Cold exposure', 'Sauna', 'Flexibility', 'Pliability', 'Mindfulness', 'Workouts'
      ],
      Sustainability: ['Our pledge', 'Recycle your gear', 'Donate to the cause'],
      Research: ['Our team', 'Read the latest', 'Contribute']
    };

  return (
    <nav>
      <div className="logo">
        OneFitness
      </div>
      <div className="nav-section">
        {links.map((link, index) => (
          <div key={index} className="dropdown">
            <button className="dropbtn">{link}</button>
            <div className="dropdown-content">
              {dropdownContents[link].map((subLink, idx) => (
                <a key={idx} href={`#${subLink.replace(/\s+/g, '-').toLowerCase()}`}>{subLink}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
