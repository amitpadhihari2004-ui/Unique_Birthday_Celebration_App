import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function ZodiacDropdown() {
  const { zodiac, setZodiac } = useContext(UserContext);

  return (
    <select
      value={zodiac}
      onChange={(e) => setZodiac(e.target.value)}
    >
      <option value="">Select Zodiac</option>
      <option>♈ Aries</option>
      <option>♉ Taurus</option>
      <option>♊ Gemini</option>
      <option>♋ Cancer</option>
      <option>♌ Leo</option>
      <option>♍ Virgo</option>
      <option>♎ Libra</option>
      <option>♏ Scorpio</option>
      <option>♐ Sagittarius</option>
      <option>♑ Capricorn</option>
      <option>♒ Aquarius</option>
      <option>♓ Pisces</option>
    </select>
  );
}

export default ZodiacDropdown;