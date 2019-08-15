import React from "react";

export default function Features() {
  return (
    <section id="features-container">
      <section class="features">
        <div class="features-intro">
          <h2>
            The world's
            <br />
            biggest healthcare platform
          </h2>
          <p>
            We work from 6 offices all over the world, bringing Docplanner Group
            to life in almost 20 countries.
          </p>
          <img
            src="https://www.docplanner.com/img/logo.png"
            alt="logo docplanner"
          />
        </div>

        <div class="features-cards">
          <div class="cards-column" id="column1">
            <div class="feature-card">
              <img
                src="https://www.docplanner.com/img/flag.png"
                alt="flag
                  icon"
              />
              <h2>
                Leader in <br />
                10 countries
              </h2>
              <p>
                Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil,
                Colombia, Argentina and Chile
              </p>
            </div>
            <div class="feature-card">
              <img
                src="https://www.docplanner.com/img/patients.png"
                alt="people icon"
              />
              <h2>30 million unique patients</h2>
              <p>visit us every month</p>
            </div>
          </div>

          <div class="cards-column" id="column2">
            <div class="feature-card">
              <img
                src="https://www.docplanner.com/img/visits.png"
                alt="visits icon"
              />
              <h2>1.5 million appointments</h2>
              <p>booked last month</p>
            </div>
            <div class="feature-card">
              <img
                src="https://www.docplanner.com/img/doctors.png"
                alt="doctors icon"
              />
              <h2>2 million active doctors</h2>
              <p>trust in our solutions</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
