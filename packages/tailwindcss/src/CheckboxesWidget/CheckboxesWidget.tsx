import React from "react";
 
import { WidgetProps } from "@rjsf/core";

const selectValue = (value: any, selected: any, all: any) => {
  const at = all.indexOf(value);
  const updated = selected.slice(0, at).concat(value, selected.slice(at));

  // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order
  return updated.sort((a: any, b: any) => all.indexOf(a) > all.indexOf(b));
};

const deselectValue = (value: any, selected: any) => {
  return selected.filter((v: any) => v !== value);
};

const CheckboxesWidget = ({
  schema,
  label,
  id,
  disabled,
  options,
  value,
  autofocus,
  readonly,
  required,
  onChange,
  onBlur,
  onFocus,
}: WidgetProps) => {
  const { enumOptions, enumDisabled, inline } = options;

  const _onChange = (option: any) => ({
    target: { checked },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const all = (enumOptions as any).map(({ value }: any) => value);

    if (checked) {
      onChange(selectValue(option.value, value, all));
    } else {
      onChange(deselectValue(option.value, value));
    }
  };

  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <>
      <label htmlFor={id}>{label || schema.title}</label>
      <div className="flex flex-col">
        {(enumOptions as any).map((option: any, index: number) => {
          const checked = value.indexOf(option.value) !== -1;
          const itemDisabled =
            enumDisabled && (enumDisabled as any).indexOf(option.value) != -1;

          return inline ? (
            <form className="flex flex-col w-100" key={index}>
                <div className="flex flex-row">{option.label}</div>
              <input
                required={required}
               
                className="bg-transparent border-0"
         
                checked={checked}
                type={"checkbox"}
                id={`${id}_${index}`}
            
                autoFocus={autofocus && index === 0}
                onChange={_onChange(option)}
                onBlur={_onBlur}
                onFocus={_onFocus}
                disabled={disabled || itemDisabled || readonly}
              />
            </form>
          ) : (
            <>
            <form className="flex flex-col w-100" key={index}>
              <div className="flex flex-row">{option.label}</div>
              <input                
                required={required}
                checked={checked}
                className="bg-transparent border-0"
                type={"checkbox"}
                id={`${id}_${index}`}
                
                autoFocus={autofocus && index === 0}
                onChange={_onChange(option)}
                onBlur={_onBlur}
                onFocus={_onFocus}
                disabled={disabled || itemDisabled || readonly}
              />
            </form>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CheckboxesWidget;
