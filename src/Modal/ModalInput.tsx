import important from "../icons/important.svg";
import { Input } from "../types";

export const ModalInput: React.FC<Input> = ({ name, setName, size }) => {
  return (
    <div
      className={
        size === "large" ? "modalinput-wrapper large" : "modalinput-wrapper"
      }
    >
      <input
        required
        maxLength={254}
        id="modalinput"
        className="modalinput"
        placeholder="Введите имя задачи/категории"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <img src={important} alt="important" className="modalinput-icon" />
      <label htmlFor="modalinput">Имя</label>
    </div>
  );
};
