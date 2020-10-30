import React from "react";

const Book8 = (props) => {
  const { img, title, author } = props;
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello world!");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h3>{author}</h3>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <br></br>
      <button type="button" onClick={() => complexExample(author)}>
        More complex example
      </button>
    </article>
  );
};

export default Book8;
