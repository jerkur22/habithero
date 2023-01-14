export const Habit = (props) => {
  function getColor() {
    if (props.habitType === "Bad") {
      return `flex w-3/6 h-3/5 mt-5 text-lg items-center justify-between border-2 rounded bg-red-200`;
    } else if (props.habitType == "Good") {
      return `flex w-3/6 h-3/5 mt-5 text-lg items-center justify-center border-2 rounded bg-green-200`;
    } else {
      return `flex w-3/6 h-3/5 mt-5 text-lg items-center justify-center border-2 rounded bg-white`;
    }
  }
  return (
    <div className={`${getColor()}`}>
      <h1 className="text-lg mr-20">{props.habitName}</h1>
      {props.habitType === "Habit" ? (
        <> </>
      ) : (
        <h1 className="text-lg mr-8">{props.habitType} Habit</h1>
      )}
      <button
        className="text-lg mr-8 m-auto"
        onClick={() => props.deleteHabit(props.id)}
      >
        {" "}
        Delete{" "}
      </button>
    </div>
  );
};
