import React, { useId } from "react";

const Select = ({ options, label, className = "", ...props }, ref) => {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id}></label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {
          //  * options is an array and if we do like this options.map() and if there is no value in options array or options array is an empty then there will be an high chances of crashing an whole code ...the better syntax for mapping an options is given below;
          // !   options?.map()  it means that if there is an any value present in the options array then loop the options otherwise skip;
          options?.map((option) => (
            // FIXME: important Note: it is Necessary to give an value in the <option> tag like below

            <option key={option} value={option}>
              {option}
            </option>
          ))
        }
      </select>
    </div>
  );
};

export default React.forwardRef(Select);
