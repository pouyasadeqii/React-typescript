import axios from "axios";
import Reminder from "../models/reminder";

const baseURL: string = "https://jsonplaceholder.typicode.com/todos";

export const getReminders = async () => {
  const response = await axios.get<Reminder[]>(baseURL);
  console.log(response.data); 
  return response.data;
};

export const addReminders = async (title: string) => {
  const newTodo = await axios.post<Reminder>(baseURL, {
    title: title,
    id: new Date(),
  });

  return newTodo.data;
};

export const removeReminder = async (id: number) => {
  const removeTodo = await axios.delete<Reminder>(`${baseURL}/${id}`);

  return removeTodo.data;
};
