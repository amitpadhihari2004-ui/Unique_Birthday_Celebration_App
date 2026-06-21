import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function StartButton({ name, dob }) {
  const navigate = useNavigate();
  const { setName, setAge } = useContext(UserContext);

 function calculateAge(dob) {
  const [day, month, year] = dob.split("-");

  const birth = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day)
  );

  const today = new Date();

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}
 const handleStart = () => {
  console.log("name =", name);
  console.log("dob =", JSON.stringify(dob));

  if (!name || !dob) {
    alert("Please enter your name and date of birth!");
    return;
  }

  const age = calculateAge(dob);

  console.log("age =", age);

  setName(name);
  setAge(age);

  navigate("/celebration");
};
  return (
    <button onClick={handleStart}>
      🎉 Start Celebration
    </button>
  );
}

export default StartButton;