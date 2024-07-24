import Calendar from "../../calendar/Calendar";
import { Link, useParams, useNavigate } from "react-router-dom";
import RoutesPath from "../../../RoutesPath";
import * as S from "./Browse.styled";
import { useUser } from "../../hooks/useUser";
import { useTasks } from "../../hooks/useTasks";
import { useState, useEffect } from "react";
import { deleteTask, updateTask } from "../../../api";

const BrowsePopup = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();
  const { tasks, setTasks } = useTasks();
  const [selected, setSelected] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: "",
    topic: "",
    status: "",
    description: "",
    date: "",
  });
  useEffect(() => {
    if (tasks) {
      const task = tasks.find((task) => task._id === id);
      if (!task) {
        navigate(RoutesPath.HOME);
      } else {
        setEditedTask({
          title: task.title,
          topic: task.topic,
          status: task.status,
          description: task.description,
          date: task.date,
        });
        setSelected(task.date);
      }
    }
  }, [id, tasks, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({
      ...editedTask,
      [name]: value,
    });
  };

  const editCard = async (e) => {
    e.preventDefault();

    const taskData = {
      ...editedTask,
      date: selected,
      token: user.token,
      id: id,
    };

    try {
      const data = await updateTask(taskData);
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === id ? { ...task, ...taskData } : task
        )
      );
      navigate(RoutesPath.HOME);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCard = async (e) => {
    e.preventDefault();

    await deleteTask({
      id,
      token: user.token,
    })
      .then((data) => {
        setTasks(data.user);
        navigate(RoutesPath.HOME);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (!tasks) {
    return null;
  }

  return (
    <S.PopBrowse id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <div className="pop-browse__content">
            <S.PopBrowseTopBLock>
              <S.PopBrowseTtl>{editedTask.title}</S.PopBrowseTtl>
              <S.CategoriesTheme className="theme-top _orange _active-category">
                <p className="_orange">{editedTask.topic}</p>
              </S.CategoriesTheme>
            </S.PopBrowseTopBLock>
            <S.Status>
              <S.StatusP className="subttl">Статус</S.StatusP>
              {isEdit && (
                <S.StatusThemes>
                  <S.StatusTheme className="status__theme">
                    <p>Без статуса</p>
                  </S.StatusTheme>
                  <S.StatusTheme className="status__theme _gray">
                    <p className="_gray">Нужно сделать</p>
                  </S.StatusTheme>
                  <S.StatusTheme className=" status__theme">
                    <p>В работе</p>
                  </S.StatusTheme>
                  <S.StatusTheme className="status__theme">
                    <p>Тестирование</p>
                  </S.StatusTheme>
                  <S.StatusTheme className="status__theme">
                    <p>Готово</p>
                  </S.StatusTheme>
                </S.StatusThemes>
              )}
            </S.Status>
            <S.PopBrowseWrap>
              <S.PopBrowseForm
                className="form-browse"
                id="formBrowseCard"
                action="#"
              >
                <S.FormBrowseBlock>
                  <label
                    htmlFor="textArea01"
                    className="subttl"
                    name="description"
                    id="textArea01"
                    placeholder="Enter task description..."
                    onChange={handleInputChange}
                  >
                    Описание задачи
                  </label>
                  <S.FormBrowseArea
                    className="form-browse__area"
                    name="description"
                    id="textArea01"
                    placeholder="Введите описание задачи..."
                    readOnly={!isEdit}
                    value={editedTask.description}
                    onChange={handleInputChange}
                  />
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar selected={selected} setSelected={setSelected} />
            </S.PopBrowseWrap>
            <div className="theme-down__categories theme-down">
              <S.CategoriesP className="subttl">Категория</S.CategoriesP>
              <S.CategoriesTheme className="_orange _active-category">
                <p className="_orange">{editedTask.topic}</p>
              </S.CategoriesTheme>
            </div>
            <div className="pop-browse__btn-browse">
              {!isEdit ? (
                <div className="btn-group">
                  <button
                    className="btn-browse__edit _btn-bor _hover03"
                    onClick={() => setIsEdit(true)}
                  >
                    Редактировать задачу
                  </button>
                  <button
                    className="btn-browse__delete _btn-bor _hover03"
                    onClick={deleteCard}
                  >
                    <a href="#">Удалить задачу</a>
                  </button>
                </div>
              ) : (
                <div className="pop-browse__btn-edit">
                  <div className="btn-group">
                    <button
                      className="btn-edit__edit _btn-bg _hover01"
                      onClick={editCard}
                    >
                      Сохранить
                    </button>
                    <button
                      className="btn-edit__edit _btn-bor _hover03"
                      onClick={() => setIsEdit(false)}
                    >
                      Отменить
                    </button>
                    <button
                      className="btn-edit__delete _btn-bor _hover03"
                      id="btnDelete"
                      onClick={deleteCard}
                    >
                      Удалить задачу
                    </button>
                  </div>
                  <button
                    className="btn-edit__close _btn-bg _hover01"
                    onClick={() => setIsEdit(false)}
                  >
                    Закрыть
                  </button>
                </div>
              )}
              <button className="btn-browse__close _btn-bg _hover01">
                <Link to={RoutesPath.HOME}>Закрыть</Link>
              </button>
            </div>
          </div>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
};

export default BrowsePopup;
