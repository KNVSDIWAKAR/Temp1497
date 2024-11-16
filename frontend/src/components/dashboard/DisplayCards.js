import React from "react";
import Cards from "./Cards";

const DisplayCards = () => {
  const cardDataList = [
    {
      bankName: "Bank of America",
      cardHolder: "John Doe",
      cardType: "Debit Card",
      cardNumber: "1234123412341234",
      expiryDate: "12/25",
      paymentNetwork: "Visa",
    },
    {
      bankName: "HDFC Bank",
      cardHolder: "Alice Smith",
      cardType: "Credit Card",
      cardNumber: "5678567856785678",
      expiryDate: "10/24",
      paymentNetwork: "MasterCard",
    },
    {
      bankName: "SBI",
      cardHolder: "Bob Johnson",
      cardType: "Debit Card",
      cardNumber: "9876987698769876",
      expiryDate: "09/26",
      paymentNetwork: "RuPay",
    },
    {
      bankName: "Axis Bank",
      cardHolder: "Eve Adams",
      cardType: "Credit Card",
      cardNumber: "6543654365436543",
      expiryDate: "01/27",
      paymentNetwork: "Visa",
    },
    {
      bankName: "ICICI Bank",
      cardHolder: "Charlie Brown",
      cardType: "Debit Card",
      cardNumber: "4321432143214321",
      expiryDate: "06/23",
      paymentNetwork: "MasterCard",
    },
    {
      bankName: "HSBC",
      cardHolder: "Daisy White",
      cardType: "Credit Card",
      cardNumber: "2109210921092109",
      expiryDate: "08/28",
      paymentNetwork: "RuPay",
    },
    {
      bankName: "Standard Chartered",
      cardHolder: "Eve Clark",
      cardType: "Credit Card",
      cardNumber: "8765876587658765",
      expiryDate: "05/25",
      paymentNetwork: "Visa",
    },
    {
      bankName: "Kotak Mahindra",
      cardHolder: "Michael Fox",
      cardType: "Debit Card",
      cardNumber: "3546354635463546",
      expiryDate: "07/29",
      paymentNetwork: "MasterCard",
    },
    {
      bankName: "RBL Bank",
      cardHolder: "Sophia Lee",
      cardType: "Credit Card",
      cardNumber: "7654765476547654",
      expiryDate: "11/24",
      paymentNetwork: "RuPay",
    },
    {
      bankName: "Yes Bank",
      cardHolder: "Lucas King",
      cardType: "Debit Card",
      cardNumber: "9812981298129812",
      expiryDate: "02/27",
      paymentNetwork: "Visa",
    },
    {
      bankName: "IndusInd Bank",
      cardHolder: "Olivia Johnson",
      cardType: "Credit Card",
      cardNumber: "6543654365436543",
      expiryDate: "09/28",
      paymentNetwork: "MasterCard",
    },
    {
      bankName: "IndusInd Bank",
      cardHolder: "Olivia Johnson",
      cardType: "Credit Card",
      cardNumber: "6543654365436543",
      expiryDate: "09/28",
      paymentNetwork: "MasterCard",
    },
  ];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  // Shuffle the cardDataList to randomize the order
  const shuffledCardDataList = shuffleArray(cardDataList);
  console.log(shuffledCardDataList);

  return (
    <div style={{ marginTop: "100px" }}>
      <Cards cardDataList={cardDataList} />
    </div>
  );
};

export default DisplayCards;
