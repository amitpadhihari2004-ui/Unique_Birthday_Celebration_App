import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [zodiac, setZodiac] = useState("");

  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0
  });

  const [memory1, setMemory1] = useState("");
  const [memory2, setMemory2] = useState("");
  const [memory3, setMemory3] = useState("");
  const [memory4, setMemory4] = useState("");

  return (
    <UserContext.Provider
      value={{
        name,
        setName,

        photo,
        setPhoto,

        zodiac,
        setZodiac,

        age,
        setAge,

        memory1,
        setMemory1,

        memory2,
        setMemory2,

        memory3,
        setMemory3,

        memory4,
        setMemory4
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;