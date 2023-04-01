import React from "react";
import Reminder from "../models/reminder";

interface ReminderListProp {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

const ReminderList = ({ items, onRemoveReminder }: ReminderListProp) => {
  return (
    <ul className="bg-blue-50 text-center p-4 flex flex-col justify-center items-center gap-2">
      {items.map((item) => {
        return (
          <li
            className="py-3 px-2 transition-all duration-300 hover:bg-purple-100 hover:text-purple-900 rounded-md bg-purple-50 w-fit"
            key={item.id}
          >
            {item.id}-{item.title}
            <button
              onClick={() => onRemoveReminder(item.id)}
              className="bg-red-50 text-black p-2 rounded-md shadow transition-all duration-300 hover:shadow-none hover:bg-red-500 hover:text-white ml-4"
            >
              Remove Item
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ReminderList;
