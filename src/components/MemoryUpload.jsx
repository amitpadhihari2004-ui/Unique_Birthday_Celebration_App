import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function MemoryUpload() {

  const {
    setMemory1,
    setMemory2,
    setMemory3,
    setMemory4
  } = useContext(UserContext);

  return (
    <div className="memory-upload">

      <h1>📸 Upload Your Memories</h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e)=>
          setMemory1(URL.createObjectURL(e.target.files[0]))
        }
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e)=>
          setMemory2(URL.createObjectURL(e.target.files[0]))
        }
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e)=>
          setMemory3(URL.createObjectURL(e.target.files[0]))
        }
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e)=>
          setMemory4(URL.createObjectURL(e.target.files[0]))
        }
      />

    </div>
  );
}

export default MemoryUpload;