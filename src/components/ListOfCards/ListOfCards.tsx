import { ReactNode } from "react";
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
      <h2>{title}</h2>
      <ListOfCards>{children}</ListOfCards>
    </section>
  );
};
