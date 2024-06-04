import Card from "../card/Card";

const Column = ({ title, cardList }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList.map(({ id, title, date, theme }) => {
          return (
            <Card key={id} id={id} theme={theme} title={title} date={date} />
          );
        })}
      </div>
    </div>
  );
};

export default Column;
