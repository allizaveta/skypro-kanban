import Column from "../column/Column";
import { statusList } from "../../data";
import * as S from "./Main.styled";
import { useTasks } from "../hooks/useTaskContext";

const Main = () => {
  const { tasks } = useTasks();
  return (
    <S.Main>
      <S.Container>
        <S.MainBlock>
          <S.MainContent>
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={tasks.filter((card) => card.status === status)}
              />
            ))}
          </S.MainContent>
        </S.MainBlock>
      </S.Container>
    </S.Main>
  );
};

export default Main;
