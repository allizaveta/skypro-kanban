import styled from "styled-components";

export const PopBrowse = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  :target {
    display: block;
    @media screen and (max-width: 660px) {
      top: 70px;
    }
  }
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 730px;
  width: 100%;
  padding: 40px 30px 90px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
  @media screen and (max-width: 495px) {
    display: block;
    margin-bottom: 20px;
  }
`;

export const PopBrowseTopBLock = styled.div`
  display: flex;
    gap: 30px;
    flex-wrap: nowrap;
    flex-direction: row;
    margin-bottom: 18px;
    justify-content: space-between;
`;

export const PopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap:30px;
  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const PopBrowseForm = styled.div`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const ActiveCategory = styled.div`
  opacity: 1 !important;
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

export const Categories = styled.div`
  margin-bottom: 20px;
`;

export const CategoriesP = styled.p`
  margin-bottom: 14px;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export const StatusP = styled.p`
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: ${(props) => (props.$active ? "#FFFFFF" : "#94A6BE")};
  background-color: ${(props) => (props.$active ? "#94A6BE" : "#FFFFFF")};
  padding: 10px 17px;
  margin-right: 7px;
  margin-bottom: 7px;
  max-width: 136px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    text-align: center;
  }
`;