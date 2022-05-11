import { Description } from "../types";

export const ModalTextarea: React.FC<Description> = ({
  isCategories,
  description,
  setDescription,
}) => {
  return (
    <div className="modaltextarea-wrapper">
      <label htmlFor="modaltextarea">Описание</label>
      <textarea
        maxLength={isCategories ? 511 : 1535}
        id="modaltextarea"
        className="modaltextarea"
        placeholder="Введите описание задачи"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};
