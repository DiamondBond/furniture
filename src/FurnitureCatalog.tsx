import React, { HTMLProps, useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Menu, Mail, Phone, X, Info } from "react-feather";
import Modal from "./Components/Modal";
import ScreenHeader from "./Components/ScreenHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #faf9f6;
`; //e7e7e9

const RoomFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const FilterButton = styled.button`
  background-color: #fff;
  border: 1px solid #bebebe;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: background 275ms;
  &:hover {
    background-color: #f5f5f5;
    border-radius: 4px;
    transition: background 125ms;
  }
  &:active {
    transform: scale(1.025);
  }
`;

const Catalog = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 400px;
  margin: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  transition: transform 0.2s;
  &:hover {
    opacity: 1;
    transform: scale(1.025);
  }
`;

const ItemImage = styled.img`
  width: 69%;
  height: 200px;
  opacity: 0.9;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  transition: transform 0.2s;
  &:hover {
    opacity: 1;
    transform: scale(1.025);
  }
`;

const ItemTitle = styled.h3`
  font-size: 18px;
  margin-top: 20px;
`;

const ItemDescription = styled.p`
  font-size: 14px;
  margin: 10px;
  text-align: center;
`;

interface CatalogItem {
  id: number;
  title: string;
  description: string;
  availability: boolean;
  price: string;
  image: string;
  room: string;
  arrivesBy?: String;
}

const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: 1,
    title: "Comfy Chair",
    description: "Cozy chair perfect for reading or relaxing.",
    availability: true,
    price: "99$",
    arrivesBy: "7 days",
    image: "https://i.imgur.com/6417D4j.jpg",
    room: "Living",
  },
  {
    id: 2,
    title: "Stylish Chair",
    description: "Modern chair with clean lines.",
    availability: true,
    price: "95$",
    image: "https://i.imgur.com/vt0rPdb.jpg",
    room: "Living",
  },
  {
    id: 3,
    title: "Elegant Chair",
    description: "Sophisticated set of chairs for a touch of class.",
    availability: true,
    price: "190$",
    image: "https://i.imgur.com/padOTVb.jpg",
    room: "Dining",
  },
  {
    id: 4,
    title: "Rustic Table",
    description: "Charming table with a rustic finish.",
    availability: false,
    price: "300$",
    image: "https://i.imgur.com/YndWaS2.jpg",
    room: "Dining",
  },
  {
    id: 5,
    title: "Modern Table",
    description: "Sleek three piece table with an elegant design.",
    availability: true,
    price: "75$",
    image: "https://i.imgur.com/ixFQ2ML.jpg",
    room: "Living",
  },
  {
    id: 6,
    title: "Crafted Side Table",
    description: "Well crafted side table made of an amalgamation of woods.",
    availability: true,
    price: "150$",
    image: "https://i.imgur.com/7AfdSBQ.jpg",
    room: "Outdoor",
  },
  {
    id: 11,
    title: "Coffee Table",
    description: "Practical table for holding drinks and snacks.",
    availability: true,
    price: "99$",
    image: "https://i.imgur.com/ShR2xOH.jpg",
    room: "Living",
  },
];

const FurnitureCatalog: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<CatalogItem | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterClick = (room: string) => {
    setSelectedRoom(room === selectedRoom ? null : room);
  };

  const handleInquireClick = (item: CatalogItem) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedItem(null);
    setShowModal(false);
  };

  const renderCatalogItems = () => {
    return CATALOG_ITEMS.filter(
      (item) => !selectedRoom || item.room === selectedRoom
    ).map((item) => (
      <Item key={item.id}>
        <ItemImage src={item.image} alt={item.title} />
        <ItemTitle>{item.title}</ItemTitle>
        <ItemDescription>{item.description}</ItemDescription>
        <Button onClick={() => handleInquireClick(item)}>&times;</Button>
      </Item>
    ));
  };

  const handleMail = () => {
    const emailAddress =
      "mailto:umarziham@gmail.com?subject=" +
      encodeURIComponent(selectedItem?.title || "");
    window.location.href = emailAddress;
  };

  const handleCall = () => {
    const telPhone = "tel:1337";
    window.location.href = telPhone;
  };

  const handleWeb = () => {};

  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(document.documentElement.scrollHeight);
  });

  return (
    <div style={{ margin: 15, display: "flex", flexDirection: "column" }}>
      <ScreenHeader title="Elegance Export" desc={`The finest craftsmanship`}>
        <div style={{}}>
          <RoomFilter>
            {isOpen ? null : (
              <FilterButton onClick={() => setIsOpen(!isOpen)}>
                &times;
              </FilterButton>
            )}
            {isOpen && (
              <div style={{ alignContent: "center", alignItems: "center" }}>
                <FilterButton onClick={() => handleFilterClick("Living")}>
                  Living
                </FilterButton>
                <FilterButton onClick={() => handleFilterClick("Dining")}>
                  Dining
                </FilterButton>
                <FilterButton onClick={() => handleFilterClick("Outdoor")}>
                  Outdoor
                </FilterButton>
                <FilterButton onClick={() => handleFilterClick("Interior")}>
                  Interior
                </FilterButton>
                <FilterButton onClick={() => handleFilterClick("")}>
                  All
                </FilterButton>
                <FilterButton onClick={() => setIsOpen(!isOpen)}>
                  &times;
                </FilterButton>
              </div>
            )}
          </RoomFilter>
        </div>
      </ScreenHeader>
      <div style={{ width: "100%", height: "100%", alignSelf: "center" }}>
        <Catalog>{renderCatalogItems()}</Catalog>
      </div>
      {selectedItem && showModal && (
        <Modal visible={showModal} onClose={handleModalClose}>
          <h2>{selectedItem.title}</h2>
          <p>{selectedItem.description}</p>
          <p>
            Availability:{" "}
            {selectedItem.availability ? "In Stock" : "Out of Stock"}
          </p>
          <p>Arrives: {selectedItem.arrivesBy}</p>
          <p>Price: {selectedItem.price}</p>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 0,
            }}
          >
            <IconButton onClick={handleMail}>
              <Mail />
            </IconButton>
            <br></br>
            <IconButton onClick={handleWeb}>
              <Info />
            </IconButton>
            <br></br>
            <IconButton onClick={handleCall}>
              <Phone />
            </IconButton>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default FurnitureCatalog;
