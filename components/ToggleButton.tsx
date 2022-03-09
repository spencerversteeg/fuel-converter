import { ChangeEvent } from "react";

interface IToggleButton {
  defaultChecked: FluidMeasurement;
  name: string;
  onChange: (e: any) => void;
}

const ToggleButton: React.FC<IToggleButton> = ({
  defaultChecked,
  name,
  onChange,
}) => {
  return (
    <div className="toggle">
      <input
        id={`${name}-litre`}
        name={name}
        type="radio"
        value={"LITRE"}
        onChange={(e) => onChange(e)}
        checked={defaultChecked === "LITRE"}
      />
      <label htmlFor={`${name}-litre`} className="toggle__left">
        Litre
      </label>
      <input
        id={`${name}-gallon`}
        name={name}
        type="radio"
        value={"GALLON"}
        onChange={(e) => onChange(e)}
        checked={defaultChecked === "GALLON"}
      />
      <label htmlFor={`${name}-gallon`} className="toggle__right">
        Gallon
      </label>
    </div>
  );
};

export default ToggleButton;
