import { useParams } from "react-router-dom";

const ViewCardPage = () => {
  let { id } = useParams();
  return <div>Карточка пользователя с ID: {id}</div>;
};

export default ViewCardPage;
