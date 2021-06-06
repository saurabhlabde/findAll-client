import { Dispatch, FC, SetStateAction } from "react";

// style
import { InputSection, InputSy } from "../styles/components/input";

interface IInput {
  value: string;
  name: string;
  placeHolder: string;
  onValueChange: (e: any) => void;
}

export const Input: FC<IInput> = ({
  name,
  value,
  onValueChange,
  placeHolder,
}) => {
  return (
    <>
      <InputSection>
        <InputSy
          value={value}
          name={name}
          onChange={onValueChange}
          placeholder={placeHolder ? placeHolder : ""}
        />
      </InputSection>
    </>
  );
};
