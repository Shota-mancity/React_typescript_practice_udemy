import { TodoType } from "./types/todo";
import { VFC } from "react";

export const Todo: VFC<Omit<TodoType, "id">> = props => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "[完]" : "[未]";
  return <p>{`${completedMark}${title}(User id:${userId})`}</p>;
};
