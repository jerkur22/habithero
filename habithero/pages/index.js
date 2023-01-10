import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { Habit } from "../components/Habit";
export default function Home() {
  const [habitList, setHabitList] = useState([]);
  const [newHabit, setNewHabit] = useState("");
  const [habitType, setHabitType] = useState("Habit");

  const handleChange = (event) => {
    setNewHabit(event.target.value);
  };

  function resetInputs() {
    setNewHabit("");
    setHabitType("Habit");
  }

  const addHabit = () => {
    const habit = {
      id: habitList.length === 0 ? 1 : habitList[habitList.length - 1].id + 1,
      habitName: newHabit,
      habitType: habitType,
    };
    setHabitList(habit.habitName !== "" ? [...habitList, habit] : habitList);
    resetInputs();
  };

  const deleteHabit = (id) => {
    setHabitList(habitList.filter((habit) => habit.id !== id));
  };

  return (
    <div>
      <Head>
        <title> Habit Hero</title>
      </Head>
      <div>
        <input value={newHabit} onChange={handleChange} />
        <label>Habit Type</label>
        <select
          value={habitType}
          onChange={(e) => setHabitType(e.target.value)}
        >
          <option value="Good">Good Habit</option>
          <option value="Habit">Habit</option>
          <option value="Bad">Bad Habit</option>
        </select>
        <button onClick={addHabit}> Add Habit</button>
      </div>
      <div className="list">
        {habitList.map((habit) => {
          return (
            <Habit
              habitName={habit.habitName}
              habitType={habit.habitType}
              id={habit.id}
              deleteHabit={deleteHabit}
            />
          );
        })}
      </div>
    </div>
  );
}
