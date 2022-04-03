import React from "react";
import GoldJwellery from "./gold-jewellery-shopping-odisha-dhenkanal-necklace.jpg"
import LordJagan from "./patachitra-orissa-odisha-india.jpg"

const HeroCarousal = () => {
  return (
    <>
      <section class="home" id="home">
        <div class="row">
          <div class="content">
            <h3>MAKING NON-FUNGIBLE TOYS ONE TOKEN AT A TIME.</h3>
            <p>
              From Toy Faces to Toy Rooms, we love creating tokens of nostalgia
              one at a time.{" "}
            </p>
            <a href="#" class="btn">
              shop now
            </a>
          </div>

          <div class="swiper books-slider">
            <div class="swiper-wrapper">
              <a href="#" class="swiper-slide">
                <img src={GoldJwellery} alt="" />
              </a>
              <a href="#" class="swiper-slide">
                <img src={LordJagan} alt="" />
              </a>
              <a href="#" class="swiper-slide">
                <img src="image/Gandalf_ToyFace.jpg" alt="" />
              </a>
              <a href="#" class="swiper-slide">
                <img src="image/RobotoToyFaceFinal-2.jpg" alt="" />
              </a>
              <a href="#" class="swiper-slide">
                <img src="image/Sherlock+Toy+Face-low.gif" alt="" />
              </a>
              <a href="#" class="swiper-slide">
                <img src="image/Gandalf_ToyFace.jpg" alt="" />
              </a>
            </div>
            <img src="image/stand.png" class="stand" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCarousal;
