import React, { useState } from "react";

interface NewReminderProp {
  onAddReminder: (title: string) => void;
}

const NewReminders = ({ onAddReminder }: NewReminderProp) => {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddReminder(title);
    setTitle("");
  };

  return (
    <form className="flex gap-4 items-center" onSubmit={submitForm}>
      <label htmlFor="title">Title : </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        className="focus:outline-purple-500 text-purple-300 font-bold text-lg text-center p-2 outline outline-2 outline-purple-300 rounded-md "
      />
      <button
        type="submit"
        className="bg-green-300 p-2 rounded-md shadow transition-all duration-300 hover:shadow-none hover:bg-green-500"
      >
        Add Reminder
      </button>
    </form>
  );
};

export default NewReminders;
