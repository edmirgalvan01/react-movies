import { ReactNode } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./ListOfCards.css";
interface Props {
  children: ReactNode;
  title?: string;
}

export const ListOfCards = ({ children }: Props) => {
  return <ul className="listOfCards">{children}</ul>;
};

export const ListOfCardsWithTitle = ({ children, title }: Props) => {
  return (
    <section className="listOfCardsWithTitle">
      <div className="listOfCardsWithTitle--options">
        <p>{title}</p>
        <Link to="/">
          <FiChevronRight />
        </Link>
      </div>
      <ListOfCards>{children}</ListOfCards>
    </section>
  );
};
