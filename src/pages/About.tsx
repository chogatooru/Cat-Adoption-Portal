import React from 'react';
import './About.css';

export function About() {
    return (
        <div className="container about-container">
            <div className="row">
                <div className="col-md-8">
                    <h1>About Us</h1>
                    <p>Welcome to our Cat Adoption and Donation Website!</p>
                    <p>We are a dedicated team of animal lovers on a mission to find loving homes for stray and abandoned cats. Our goal is to ensure that every cat receives the care, attention, and love they deserve. Your support through donations and adoptions helps us provide food, shelter, and medical care for these wonderful animals.</p>
                    <p>Our organization was founded with the belief that every cat deserves a second chance. We work tirelessly to rescue cats from difficult situations and place them in safe and nurturing environments. Our volunteers and staff are passionate about animal welfare and are committed to making a positive impact in the lives of these cats.</p>
                </div>
                <div className="col-md-4">
                    <h3>Our Mission</h3>
                    <p>Our mission is to rescue, rehabilitate, and rehome stray and abandoned cats. We strive to provide a safe haven for cats in need and to educate the community about responsible pet ownership. Through our efforts, we hope to reduce the number of homeless cats and promote a culture of compassion and care for all animals.</p>
                </div>
            </div>

            <div className="row mt-4 team-section">
                <div className="col-md-12">
                    <h2>Meet Our Team</h2>
                    <div className="row">
                        <div className="col-md-3 team-member">
                            <img src="team-member1.jpg" alt="Team Member 1" className="img-fluid rounded-circle"/>
                            <h4>Jane Doe</h4>
                            <p>Founder & CEO</p>
                        </div>
                        <div className="col-md-3 team-member">
                            <img src="team-member2.jpg" alt="Team Member 2" className="img-fluid rounded-circle"/>
                            <h4>John Smith</h4>
                            <p>Veterinarian</p>
                        </div>
                        <div className="col-md-3 team-member">
                            <img src="team-member3.jpg" alt="Team Member 3" className="img-fluid rounded-circle"/>
                            <h4>Emily Johnson</h4>
                            <p>Adoption Coordinator</p>
                        </div>
                        <div className="col-md-3 team-member">
                            <img src="team-member4.jpg" alt="Team Member 4" className="img-fluid rounded-circle"/>
                            <h4>Michael Brown</h4>
                            <p>Volunteer Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
