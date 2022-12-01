import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const BannerSlider = () => {
  return (
    <>
      <div
        className="slide-background"
        style={{
          backgroundImage: `url(./assets/images/home-banner-background.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "top right",
        }}
      >
        <div
          className="banner-line"
          style={{
            backgroundImage: `url(./assets/images/banner-line.svg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom left",
          }}
        >
          <div className="container">
            <OwlCarousel
              className="owl-theme"
              loop={true}
              margin={10}
              nav={false}
              autoplay={false}
              items={1}
              dots={false}
              // autoHeightClass={true}
              // autoHeight={true}
              autoplayTimeout={2000}
              smartSpeed={1000}
              style={{
                backgroundImage: `url(./assets/images/home-banner.png)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center right",
              }}
            >
              <div className="item">
                <div className="slider-content">
                  <h2>
                    We Provide <span>Graphics Design</span> for your Business.
                  </h2>
                </div>
              </div>
              <div className="item">
                <div className="slider-content">
                  <h2>
                    We Provide <span>Graphics Design</span> for your Business.
                  </h2>
                </div>
              </div>
              <div className="item">
                <div className="slider-content">
                  <h2>
                    We Provide <span>Graphics Design</span> for your Business.
                  </h2>
                </div>
              </div>
              <div className="item">
                <div className="slider-content">
                  <h2>
                    We Provide <span>Graphics Design</span> for your Business.
                  </h2>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
      <div
        className="slide-background"
        style={{
          backgroundImage: `url(./assets/images/home-banner-background.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "top right",
        }}
      >
        <div className="container">
          <div
            className="banner-line"
            style={{
              backgroundImage: `url(./assets/images/banner-line.svg)`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom left",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default BannerSlider;
