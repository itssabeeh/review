import React, { useState } from "react";
import people from "./data.js";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const UserCard = () => {
  const [index, setIndex] = useState(0);
  const { image, name, job, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <section className="review-container">
      <article className="container-body">
        <div className="image-container">
          <img className="image" src={image} alt="failed to load"></img>
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h3>{name}</h3>
        <h3>{job}</h3>
        <p>{text}</p>
      </article>
      <footer className="container-footer">
        <div>
          <button className="btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn" onClick={randomPerson}>
          surprise me
        </button>
      </footer>
    </section>
  );
};

export default UserCard;
