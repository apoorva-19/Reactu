import React from "react";
import ReactDom from "react-dom";
/* ReactDom has the render function */

//CSS
import "./index.css";

//setup vars
import { books } from "./books";

import Book8 from "./Book";

const author2 = "Amelia Hepworth";
const title2 = "I Love You to the Moon and Back3";
const img2 =
  "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg";

const firstBook = {
  author: "Amelia Hepworth",
  title: "I Love You to the Moon and Back3",
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
};
const secondBook = {
  author: "Shannon Oslen",
  title: "Our Class is a Family",
  img:
    "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
};

// const books = [
//   {
//     id: 1,
//     author: "Amelia Hepworth",
//     title: "I Love You to the Moon and Back3",
//     img:
//       "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
//   },
//   {
//     id: 2,
//     author: "Shannon Oslen",
//     title: "Our Class is a Family",
//     img:
//       "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
//   },
//   {
//     id: 3,
//     author: "Brit Bennett",
//     title: "The Vanishing Half: A novel",
//     img:
//       "https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg",
//   },
// ];

/*The first letter of the function needs to be capitalised so that 
React knows it is special*/
function Greeting() {
  /* you must return what ever you want to display */
  return <h4>My name is Apoorva and this is my first component.</h4>;

  /* After adding this statement and saving it, NOTHING will be rendered on the webpage.
  This is because this is simply an entry point. This needs to be added to index.html 
  for it to display. Hence import ReactDom. */
}

/*render() looks for two things - what you want to render and where you want to render it. */
// ReactDom.render(<Greeting />, document.getElementById("root"));

/*Just to see how arrow functions and callbacks work */
const GreetingH = () => {
  return React.createElement("h5", {}, "Honeyfur says hello.");
};

/* Uncomment to see how it works */
//ReactDom.render(<GreetingH/>, document.getElementById('root'));

/* This is more readable than the arrow function */
function Greeting2() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

/* Uncomment to see how it works */
// ReactDom.render(<Greeting2 />, document.getElementById("root"));

const GreetingH2 = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Honeyfur says Hello, World!")
  );
};

/* Uncomment to see how it works */
// ReactDom.render(<GreetingH2 />, document.getElementById("root"));

//NESTED COMPONENTS, REACT TOOLS

function Greeting3() {
  return (
    <div>
      {/* <h1>I am Apoorva</h1> */}
      <Person />
      {/* This can be used instead */}
      <h2>This is my message</h2>
    </div>
  );
}

const Person = () => <h1>I am Apoorva</h1>;

// ReactDom.render(<Greeting3 />, document.getElementById("root"));

/*This can be simplified further */
function Simpler_Greeting3() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Message = () => {
  return <h2>Here is another message.</h2>;
};

// ReactDom.render(<Simpler_Greeting3 />, document.getElementById("root"));

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);

const Title = () => <h1>I Love You to the Moon and Back</h1>;
const Author = () => (
  <h3 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Amelia Hepworth
  </h3>
);

// ReactDom.render(<BookList />, document.getElementById("root"));

function BookList2() {
  return (
    <section className="booklist">
      <Book2 />
      <Book2 />
    </section>
  );
}

const author = "Amelia Hepworth";
const Book2 = () => {
  const title = "I Love You to the Moon and Back2";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h3>{author}</h3>
      {/* <p>{let x = 6}</p> */}
      {/* <p>{6+6}</p>  this works and will dipslay 12 */}
    </article>
  );
};

//ReactDom.render(<BookList2 />, document.getElementById("root"));

//PROPS
function BookList3() {
  return (
    <section className="booklist">
      <Book3 job="developer" />
      <Book3 title="Random Title" number={22} />
    </section>
  );
}

const Book3 = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={img2} alt="" />
      <h1>{title2}</h1>
      <h3>{author2}</h3>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};

// ReactDom.render(<BookList3 />, document.getElementById("root"));

function BookList4() {
  return (
    <section className="booklist">
      <Book4
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book4
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book4 = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h3>{props.author}</h3>
    </article>
  );
};

// ReactDom.render(<BookList4 />, document.getElementById("root"));

function BookList5() {
  return (
    <section className="booklist">
      <Book5
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book5_1
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book5 = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h3>{author}</h3>
    </article>
  );
};

const Book5_1 = ({ img, title, author }) => {
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h3>{author}</h3>
    </article>
  );
};

// ReactDom.render(<BookList5 />, document.getElementById("root"));

//PROPS Children
function BookList6() {
  return (
    <section className="booklist">
      <Book6
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </p>
      </Book6>
      <Book6
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book6 = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h3>{author}</h3>
      {children}
    </article>
  );
};

// ReactDom.render(<BookList6 />, document.getElementById("root"));

function BookList7() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book7 book={book}></Book7>;
      })}
    </section>
  );
}

const Book7 = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h3>{author}</h3>
    </article>
  );
};

//ReactDom.render(<BookList7 />, document.getElementById("root"));

function BookList8() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book8 key={book.id} {...book}></Book8>;
      })}
    </section>
  );
}

// const Book8 = (props) => {
//   const { img, title, author } = props;
//   const clickHandler = (e) => {
//     console.log(e);
//     console.log(e.target);
//     alert("Hello world!");
//   };
//   const complexExample = (author) => {
//     console.log(author);
//   };
//   return (
//     <article
//       className="book"
//       onMouseOver={() => {
//         console.log(title);
//       }}
//     >
//       <img src={img} alt="" />
//       <h1 onClick={() => console.log(title)}>{title}</h1>
//       <h3>{author}</h3>
//       <button type="button" onClick={clickHandler}>
//         Reference Example
//       </button>
//       <br></br>
//       <button type="button" onClick={() => complexExample(author)}>
//         More complex example
//       </button>
//     </article>
//   );
// };

ReactDom.render(<BookList8 />, document.getElementById("root"));
