import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Our Gym</h1>
      
      <section className="feature">
        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Modern gym equipment" />
        <div className="feature-text">
          <h2>State-of-the-Art Equipment</h2>
          <p>Our gym is equipped with the latest fitness technology. From smart treadmills to AI-powered strength training machines, we ensure you have access to the most effective and efficient workout tools available.</p>
        </div>
      </section>

      <section className="feature">
        <div className="feature-text">
          <h2>One-on-One Personal Training</h2>
          <p>Experience personalized fitness guidance with our expert trainers. Our one-on-one sessions are tailored to your specific goals, whether it's weight loss, muscle gain, or overall fitness improvement. Our certified trainers use a combination of science-based techniques and motivational coaching to help you achieve your best self.</p>
        </div>
        <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Personal trainer with client" />
      </section>

      <section className="feature">
        <img src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Group fitness class" />
        <div className="feature-text">
          <h2>Dynamic Group Classes</h2>
          <p>Join our energizing group fitness classes led by passionate instructors. From high-intensity interval training to yoga and pilates, our diverse class schedule caters to all fitness levels and preferences. Experience the motivation and camaraderie of working out in a group setting.</p>
        </div>
      </section>

      <section className="feature">
        <div className="feature-text">
          <h2>Nutrition Counseling</h2>
          <p>Complement your fitness routine with expert nutrition advice. Our registered dietitians provide personalized meal plans and nutritional guidance to support your fitness goals. Learn how to fuel your body properly for optimal performance and recovery.</p>
        </div>
        <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Healthy meal preparation" />
      </section>
    </div>
  );
}

export default About;