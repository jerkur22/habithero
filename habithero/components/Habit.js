export const Habit = (props) => {
  return (
    <div>
      <h1>{props.habitName}</h1>
      <h2>{props.habitType}</h2>
      <button onClick={() => props.deleteHabit(props.id)}> Delete </button>
    </div>
  );
};
