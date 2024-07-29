import { DayPicker } from "react-day-picker";
import styled from "styled-components";
import "react-day-picker/dist/style.css";

export const Calendar = styled.div`
  margin-bottom: 20px;
`;

export const CalendarTitle = styled.p`
  margin-bottom: 14px;
  padding-left: 21px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CalendarTitleBottom = styled.p`
  color: #94a6be;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  padding-left: 21px;
`;

export const FormatDate = styled.span`
  color: black;
  font-weight: 400;
  line-height: 12px;
`;

export const StyledDayPicker = styled(DayPicker)`
  .rdp-day {
    color: #94a6be;
    font-size: 14px;
    font-weight: 400;
  }

  .rdp-day_selected {
    background-color: #94a6be;
    color: #fff;
    border-radius: 50%;
  }

  .rdp-day:hover:not(.rdp-day_selected) {
    background-color: rgba(148, 166, 190, 0.2);
  }

  .rdp-day_outside {
    color: #94a6be;
    
  }
`;