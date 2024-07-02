import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import * as S from "./NewCard.styled";
import { addNewCard } from "../../../api";
import RoutesPath from "../../../RoutesPath";
import Calendar from "../../calendar/Calendar";
import { useUser } from "../../hooks/useUserContext";
import { useTasks } from "../../hooks/useTaskContext";

const NewCardPopup = () => {
  const { userData } = useUser();
  const { setTasks } = useTasks();
  const navigate = useNavigate();

  const [activeTheme, setActiveTheme] = useState("Research");

  const handleThemeClick = (theme, topic) => {
    setActiveTheme(theme);
    setTask({ ...task, topic: topic });
  };

  const [task, setTask] = useState({
    title: "",
    topic: "Research",
    status: "Без статуса",
    description: "",
    date: null,
  });

  const [error, setError] = useState(null);

  const createTask = async (event) => {
    event.preventDefault();

    if (!task.title || !task.description || !task.date) {
      setError("Заполните все поля!");
      return;
    }

    try {
      const response = await addNewCard({
        token: userData.token,
        title: task.title,
        topic: task.topic,
        description: task.description,
        status: task.status,
        date: task.date,
      });

      setTasks(response.tasks);
      navigate(RoutesPath.HOME);
    } catch (error) {
      console.log(error.message);
      setError("Что-то пошло не так. Попробуйте еще раз!");
    }
  };

  return (
    <S.PopupContainer className="pop-new-card" id="popNewCard">
      <S.PopupContent className="pop-new-card__container">
        <S.PopupBlock className="pop-new-card__block">
          <S.PopupTitle className="pop-new-card__ttl">
            Создание задачи
          </S.PopupTitle>
          <Link to={RoutesPath.HOME}>
            {/* <S.CloseButton href="#" className="pop-new-card__close"> */}✖
            {/* </S.CloseButton> */}
          </Link>
          <div className="pop-new-card__wrap">
            <S.Form
              className="pop-new-card__form form-new"
              id="formNewCard"
              action="#"
            >
              <S.FormBlock className="form-new__block">
                <label htmlFor="formTitle" className="subttl">
                  Название задачи
                </label>
                <S.Input
                  className="form-new__input"
                  type="text"
                  name="name"
                  id="formTitle"
                  placeholder="Введите название задачи..."
                  autoFocus
                  onChange={(e) => setTask({ ...task, title: e.target.value })}
                />
              </S.FormBlock>
              <S.FormBlock className="form-new__block">
                <label htmlFor="textArea" className="subttl">
                  Описание задачи
                </label>
                <S.TextArea
                  className="form-new__area"
                  name="text"
                  id="textArea"
                  placeholder="Введите описание задачи..."
                  defaultValue=""
                  onChange={(e) =>
                    setTask({ ...task, description: e.target.value })
                  }
                />
              </S.FormBlock>
            </S.Form>
            <S.CalendarWrapper className="pop-new-card__calendar calendar">
              <p className="calendar__ttl subttl">Даты</p>
              <Calendar
                selected={task.date}
                setSelected={(date) => setTask({ ...task, date })}
              />
            </S.CalendarWrapper>
          </div>
          <S.Categories>
            <S.CategoriesThemeText>Категория</S.CategoriesThemeText>
            <S.CategoriesThemes>
              <S.CategoriesTheme
                $theme={"orange"}
                $isActive={activeTheme === "orange"}
                onClick={() => handleThemeClick("orange", "Web Design")}
              >
                <S.CategoriesThemeText $theme={"orange"}>
                  Web Design
                </S.CategoriesThemeText>
              </S.CategoriesTheme>
              <S.CategoriesTheme
                $theme={"green"}
                $isActive={activeTheme === "green"}
                onClick={() => handleThemeClick("green", "Research")}
              >
                <S.CategoriesThemeText $theme={"green"}>
                  Research
                </S.CategoriesThemeText>
              </S.CategoriesTheme>
              <S.CategoriesTheme
                $theme={"purple"}
                $isActive={activeTheme === "purple"}
                onClick={() => handleThemeClick("purple", "Copywriting")}
              >
                <S.CategoriesThemeText $theme={"purple"}>
                  Copywriting
                </S.CategoriesThemeText>
              </S.CategoriesTheme>
            </S.CategoriesThemes>
          </S.Categories>
          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
          <S.CreateButton
            onClick={createTask}
            className="form-new__create _hover01"
            id="btnCreate"
          >
            Создать задачу
          </S.CreateButton>
        </S.PopupBlock>
      </S.PopupContent>
    </S.PopupContainer>
  );
};

export default NewCardPopup;
