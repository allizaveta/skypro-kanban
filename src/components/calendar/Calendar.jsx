import * as S from "./Calendar.styled";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

const Calendar = ({ selected, setSelected, isEdit }) => {
  return (
    <>
      <S.Calendar>
        <S.CalendarTitle>Даты</S.CalendarTitle>
        <S.StyledDayPicker
          mode="single"
          selected={selected}
          onSelect={isEdit ? setSelected : undefined}
          locale={ru}
          disabled={!isEdit}
        />
        {!selected && (
          <S.CalendarTitleBottom>
            Выберите срок исполнения
          </S.CalendarTitleBottom>
        )}
        {selected && (
          <S.CalendarTitleBottom>
            Срок исполнения:
            <S.FormatDate>
              {format(selected, "dd.MM.yy", { locale: ru })}
            </S.FormatDate>
          </S.CalendarTitleBottom>
        )}
      </S.Calendar>
    </>
  );
};

export default Calendar;
