import Card from "../card/Card";
import * as S from "./Column.styled";

const Column = ({ title, cardList }) => {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <S.ColumnText>{title}</S.ColumnText>
      </S.ColumnTitle>
      <S.Cards>
        {cardList.map(({ id, title, date, topic }) => {
          return (
            <Card key={id} id={id} topic={topic} title={title} date={date} />
          );
        })}
      </S.Cards>
    </S.MainColumn>
  );
};

export default Column;
