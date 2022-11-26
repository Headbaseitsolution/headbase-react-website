import React from "react";
import Counter from "../components/Counter";

const OurMission = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="counters">
            <div className="counter-header">
              <h2>
                Our <span>Mission</span>
              </h2>
              <p>
                Our principal is to provide high standard and qualitative IT
                solutions with 100% satisfactory for our client's business.
              </p>
            </div>
            <Counter />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
