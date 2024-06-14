import Column from "../column/Column";
import { statusList } from "../../data";
import * as S from "./Main.styled";

const Main = ({ cards }) => {
  return (
    <S.Main>
      <S.Container>
        <S.MainBlock>
          <S.MainContent>
            {statusList.map((status) => (
              <Column
                key={status.id}
                title={status}
                cardList={cards.filter((card) => card.status === status)}
              />
            ))}
          </S.MainContent>
        </S.MainBlock>
      </S.Container>
    </S.Main>
  );
};

export default Main;
