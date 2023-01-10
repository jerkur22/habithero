export const Habit = (props) => {
  return (
    <div className="flex w-2/5 h-3/5 mt-5 text-lg items-center justify-center">
      <h1>{props.habitName}</h1>
      <h1>{props.habitType}</h1>
      <button onClick={() => props.deleteHabit(props.id)}> Delete </button>
    </div>
  );
};
