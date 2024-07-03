import { DayPicker } from "react-day-picker";
import styled from "styled-components";

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

export const StyledDayPicker = styled(DayPicker)`
  /* .rdp {
    width: 168px;
  }

  .rdp-day {
    width: 24px; 
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  } */
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