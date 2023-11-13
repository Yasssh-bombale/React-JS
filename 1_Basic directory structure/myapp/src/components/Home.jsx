import React, { useEffect, useState } from "react";
import Coin from "./Product.jsx";
import axios from "axios";
import Loader from "./Loader.jsx";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAllCoins = async () => {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=2000"
      );
      console.log(data);
      setCoins(data);
      setLoading(false);
    };

    fetchAllCoins();
  }, []);

  return (
    <div className="home">
      {loading ? (
        <Loader />
      ) : (
        coins.map((i) => (
          <Coin
            name={i.name}
            symbol={i.symbol}
            imgSrc={i.image}
            price={i.current_price}
            key={i.id}
          />
        ))
      )}
    </div>
  );
};

export default Home;
