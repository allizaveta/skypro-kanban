import Calendar from "../../calendar/Calendar";
import * as S from "./NewCard.styled";

const NewCardPopup = ({ addCard }) => {
  return (
    <S.PopupContainer className="pop-new-card" id="popNewCard">
      <S.PopupContent className="pop-new-card__container">
        <S.PopupBlock className="pop-new-card__block">
          <S.PopupTitle className="pop-new-card__ttl">
            Создание задачи
          </S.PopupTitle>
          <S.CloseButton href="#" className="pop-new-card__close">
            ✖
          </S.CloseButton>
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
                />
              </S.FormBlock>
            </S.Form>
            <S.CalendarWrapper className="pop-new-card__calendar calendar">
              <p className="calendar__ttl subttl">Даты</p>
              <Calendar />
            </S.CalendarWrapper>
          </div>
          <S.Categories className="pop-new-card__categories categories">
            <p className="categories__p subttl">Категория</p>
            <div className="categories__themes">
              <S.CategoryTheme className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </S.CategoryTheme>
              <S.CategoryTheme className="categories__theme _green">
                <p className="_green">Research</p>
              </S.CategoryTheme>
              <S.CategoryTheme className="categories__theme _purple">
                <p className="_purple">Copywriting</p>
              </S.CategoryTheme>
            </div>
          </S.Categories>
          <S.CreateButton
            onClick={addCard}
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
