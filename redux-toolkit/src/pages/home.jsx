import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const listTask = useSelector((state) => state.task.listTask);

  const navigate = useNavigate();
  const handleNavigateto = (id) => {
    navigate(`/${id}`);
  };
  const renderTask = listTask.map((item) => {
    return (
      <div
        style={{ color: item.isCompleted ? "green" : "red" }}
        key={item.id}
        onClick={() => handleNavigateto(item.id)}
      >
        {item.title}
      </div>
    );
  });

  return <div>{renderTask}</div>;
};

export default HomePage;
