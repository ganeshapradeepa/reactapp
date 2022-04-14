import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img 
            className="home__image"
                src="https://cdn.pixabay.com/photo/2016/02/14/09/45/diamond-1199183_1280.jpg" 
                 alt="" 
                 />

                <div className="home__row">
                  <Product
                  id="51"
                  title="GANESHA GOLD LOCKET Jewellers 
                  On trend Ear Drops set in 14/18KT Gold with Diamonds"
                  price={85000}
                   image="./assets/images/b1.png"
                 
                  rating={5}
                  />
                  <Product 
                 id="52"
                 title="Combo Jewellaries 22k/24k pure gold"
                 price={45000}
                 image="./assets/images/b4.png" 
                 rating={5}
                  />

                </div>
                <div className="home__row">
                <Product
                id="53"
                title="Gold kalasha 24k/ "
                price={1200}
                image="./assets/images/b5.png" 
                rating={5}
                />
                <Product
                id="54"
                title="Neckles & Bangles 24k/ pure gold"
                price={15000}
                image="./assets/images/b2.png" 
                rating={5}
                />
                <Product
                id="55"
                title="Gold 24k with trendy Diamond ring"
                price={20000}
                image="./assets/images/b3.png" 
                rating={5}
                />

                </div>
                <div className="home__row">
                  
                <Product
                id="56"
                title="Jewellary Best Collection"
                price={10000}
                image="./assets/images/im.png" 
                rating={5}
                />
                

                </div>
        </div>
    </div>
  );
}

export default Home;