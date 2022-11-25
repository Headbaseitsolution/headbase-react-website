import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counter = () => {
  return (
    <div>
      <div className="mission">
        <div className="mission-box">
          <div className="counter-image">
            <img
              src="https://www.headbase.tech/wp-content/uploads/2021/12/Happy_Clients.svg"
              alt="Happy-Clients"
            />
          </div>
          <div className="counter-block">
            <CountUp end={150}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start}>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <p>Happy Clients</p>
          </div>
        </div>
        <div className="mission-box">
          <div className="counter-image">
            <img
              src="https://www.headbase.tech/wp-content/uploads/2021/12/Project_Complate.svg"
              alt="Project-Complate"
            />
          </div>
          <div className="counter-block">
            <CountUp end={250}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start}>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <p>Project Complete</p>
          </div>
        </div>
        <div className="mission-box">
          <div className="counter-image">
            <img
              src="https://www.headbase.tech/wp-content/uploads/2021/12/Award_Winnings.svg"
              alt="Happy-Clients"
            />
          </div>
          <div className="counter-block">
            <CountUp end={5000}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start}>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <p>Hours of work</p>
          </div>
        </div>
        <div className="mission-box">
          <div className="counter-image">
            <img
              src="https://www.headbase.tech/wp-content/uploads/2021/12/Consultation.svg"
              alt="Happy-Clients"
            />
          </div>
          <div className="counter-block">
            <CountUp end={450}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start}>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <p>Consultation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
