import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import SideBar from "./SideBar";
import "../dashboard/Styles/Cards.css";

const DisplayCards = () => {
  const [cardDataList, setCardDataList] = useState([]);
  const username = localStorage.getItem("username");
  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await fetch(
          `http://localhost:814/card/getCards/${username}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch card data");
        }
        const data = await response.json();
        setCardDataList(data); // Set the fetched data to state
      } catch (err) {
        console.log(err.message); // Handle any errors
      }
    };

    fetchCardData();
  }, [username]);

  // const shuffleArray = (array) => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  //   }
  //   return array;
  // };

  // const shuffledCardDataList = shuffleArray(cardDataList);
  // console.log(shuffledCardDataList);

  return (
    <div className="cardscontainer">
      <SideBar />
      <Cards cardDataList={cardDataList} />
    </div>
  );
};

export default DisplayCards;
