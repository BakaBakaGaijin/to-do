export interface Item {
  // categoriesSlice.ts
  id: string;
  name: string;
  description: string;
}

export interface Task extends Item {
  // tasksSlice.ts
  category?: string;
}

export interface TaskObj {
  // ListItem.tsx
  item: Task;
}

export interface Description {
  // ModalTextarea.tsx
  isCategories: boolean;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

export interface Active {
  // ModalCreateItem.tsx
  isActive?: boolean;
  setIsActive?: React.Dispatch<React.SetStateAction<boolean>>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Dropdown {
  // ModalDropdown.tsx
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export interface Text {
  // ModalText.tsx
  text: string;
}

export interface EditItem extends Active {
  // ModalEditItem.tsx
  item: Task;
}

export interface Input {
  // ModalInput.tsx
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  size?: string;
}

export interface Row extends Dropdown {
  // ModalRow.tsx
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export interface ModalProps extends Active {
  // Modal.tsx
  item?: Task;
  children: React.ReactNode;
  clearState?(): void;
}

export interface ModalBtnProps {
  //ModalBtn.tsx
  type?: string;
  children: React.ReactNode;
  size?: string;
  onClick: () => void;
}

export interface ModalFooterProps {
  // ModalFooter.tsx
  clearState?(): void;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  submitBtnText: string;
  size?: string;
  onSubmit: () => void;
}

export interface ModalHeaderProps {
  // ModalHeader.tsx
  clearState?(): void;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}
