import Card from "../card/Card";

const Column = ({ title }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <Card category="Research" title="Найти ту кНигу" date="30.12.24" />
        <Card
          category="Web Design"
          title="Заделать карточкуВБ"
          date="30.12.24"
        />
      </div>
    </div>
  );
};

export default Column;
