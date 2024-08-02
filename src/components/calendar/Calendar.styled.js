import { DayPicker } from "react-day-picker";
import styled from "styled-components";
import "react-day-picker/dist/style.css";

export const Calendar = styled.div`
  display: flex;
    width: 168px;
    height: 228px;
    gap: 20px;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const CalendarContainer = styled.div`
  margin-bottom: 35px;
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
  margin-top: 80px;
`;

export const FormatDate = styled.span`
  color: black;
  font-weight: 400;
  line-height: 12px;
`;

export const StyledDayPicker = styled(DayPicker)`
  width: 168px;
  height: 172px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 7px;
  margin-bottom: 15px;

  .rdp-day {
    color: #94a6be;
    font-size: 14px;
    font-weight: 400;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rdp-day_selected {
    background-color: #94a6be;
    color: #fff;
  }

  .rdp-day:hover:not(.rdp-day_selected) {
    background-color: rgba(148, 166, 190, 0.2);
  }

  .rdp-day_outside {
    color: #94a6be;
  }

  .rdp-head {
    display: contents;
    color: #94a6be;
    font-size: 12px;
    text-align: center;
    padding-bottom: 7px;
  }

  .rdp-navigation {
    background-color: #94a6be;
    color: #fff;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }

  .rdp-navigation_prev,
  .rdp-navigation_next {
    line-height: 1;
  }

  .rdp-month {
    color: #94a6be;
  }
`;
