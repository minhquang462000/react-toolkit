import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailTask } from "../store/task";
import {updateStatusTask} from "../store/task"
const UpdateTask = () => {
  const dispath = useDispatch();
  const param = useParams();
  const task = useSelector((state) => state.task.task);

  useEffect(() => {
    dispath(getDetailTask(param.id));
  }, [param.id]);
  if (!task) {
    return <div>Loading...</div>;
  }

  const handleClickComplete =()=>{
    dispath(updateStatusTask(param.id))
  }
  return (
    <div>
      Update Task
      <br />
      {task.id}
      <br />
      {task.title}
      <br />
      {String(task.isCompleted)}
      <br />
      <button onClick={handleClickComplete}>Update status</button>
    </div>
  );
};

export default UpdateTask;
