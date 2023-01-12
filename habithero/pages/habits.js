import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { Habit } from "../components/Habit";
import { db, auth } from "../firebaseconfig";
import { getDoc } from "firebase/firestore";
import { addDoc, setDoc, doc, updateDoc } from "firebase/firestore";
import { useEffect } from "react";

export default function Habits() {
  const habitRef = doc(db, "habits", auth.currentUser.uid);
  let requestedHabitList = [];
  const [habitList, setHabitList] = useState(requestedHabitList);
  const [newHabit, setNewHabit] = useState("");
  const [habitType, setHabitType] = useState("Habit");

  useEffect(() => {
    async function fetchHabits() {
      const docSnap = await getDoc(habitRef);
      if (docSnap.exists()) {
        requestedHabitList = docSnap.data().list;
        setHabitList(requestedHabitList);
      }
    }
    fetchHabits();
  }, []);

  const handleChange = (event) => {
    setNewHabit(event.target.value);
  };

  function resetInputs() {
    setNewHabit("");
    setHabitType("Habit");
  }

  // async function sendAddHabit() {
  //   const habitRef = doc(db, "habits", auth.currentUser.uid);
  //   await setDoc(habitRef, { habitList });
  // }

  function addHabit() {
    const habit = {
      id: habitList.length === 0 ? 1 : habitList[habitList.length - 1].id + 1,
      habitName: newHabit,
      habitType: habitType,
    };

    let list = habit.habitName !== "" ? [...habitList, habit] : habitList;
    setHabitList(list);
    setDoc(habitRef, { list }).then(() => {
      console.log("Habit has been added successfully");
    });

    // sendAddHabit();
    resetInputs();
  }

  const deleteHabit = (id) => {
    let list = habitList.filter((habit) => habit.id !== id);
    setHabitList(list);
    setDoc(habitRef, { list }).then(() => {
      console.log("Habit has been added deleted");
    });
  };

  return (
    <div className="w-full items-center">
      <Head>
        <title> Habit Hero</title>
      </Head>
      <div className="flex justify-center items-center border-b-2 border-blue-500 py-4">
        <input
          placeholder="Type habit here..."
          value={newHabit}
          onChange={handleChange}
          className="
          form-control appearance-none block h-1/3 w-1/4 px-3 py-1.5 text-base font-normal bg-clip-padding border-2 border-solid border-blue-300 rounded-lg 
          transition-all ease-in-out m-0 focus: text-gray-800 focus: bg-white focus:border-blue-800 focus: outline-none
          "
        />
        <select
          value={habitType}
          onChange={(e) => setHabitType(e.target.value)}
          className=" h-11 ml-5  text-base rounded-lg  border-blue-300 border-2 border-solid focus:border-blue-800 focus: outline-none block w-1/6 p-2.5"
        >
          <option value="Good">Good Habit</option>
          <option value="Habit">Habit</option>
          <option value="Bad">Bad Habit</option>
        </select>
        <button
          onClick={addHabit}
          className=" h-10 inline-block ml-5 px-7 py-2.5 rounded-lg bg-blue-600 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Add Habit
        </button>
      </div>
      <div className="items-center w-full pt-3 flex flex-col h-auto">
        {habitList.map((habit) => {
          return (
            <Habit
              habitName={habit.habitName}
              habitType={habit.habitType}
              id={habit.id}
              key={habit.id}
              deleteHabit={deleteHabit}
            />
          );
        })}
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const habitRef = doc(db, "habits", auth.currentUser.uid);
//   const docSnap = await getDoc(habitRef);
//   let resHabitList = [];
//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//   }
//   return {
//     props: {},
//   };
// }
