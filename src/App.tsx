import { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import { addReminders, getReminders } from "./services/reminderApi";
import NewReminders from "./components/NewReminders";

// const reminders: Reminder[] = [
//   { id: 1, title: "pouya" },
//   { id: 2, title: "ali" },
// ];

function App() {
  const [count, setCount] = useState(0);
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const data = await getReminders();
    setReminders(data);
  };

  const removeReminder = (id: number) => {
    // console.log(id);
    const newReminders = reminders.filter((reminder) => reminder.id !== id);
    setReminders(newReminders);
  };

  const addReminder = async (title: string) => {
    const addNewReminder = await addReminders(title);
    setReminders([addNewReminder, ...reminders]);
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <button
        className="bg-purple-50 p-2 rounded-md shadow transition-all duration-300 hover:shadow-none hover:bg-purple-100"
        onClick={() => setCount(count + 1)}
      >
        Click Me {count}
      </button>
      <NewReminders onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
