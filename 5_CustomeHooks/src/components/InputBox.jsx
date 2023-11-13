function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }

          //* We used 'onAmountChange && onAmountChange(Number(e.target.value))' this syntax As input.jsx is an ReUsable components and if user didnot gives an  'onAmountChnage' function there migh be an possibility that our code may crash ! hence to prevent this error we add above syntax in which first 'onAmountChnage' plays an role of checker in simple terms :- if onAmountChange function exists then call onAmountChange(Number(e.target.value));

          // ?        Important note here :

          // ! We used Number(e.target.value) to prevent the javascript notorious behaviour that is sometimes javascript convert the values present in the events to String by default...to prevent this behaviour we need to use Number(e.target.value);
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
          {/* While looping in react always remeber to use key and key should be an unique because if did provide an key then it will direct degrade the impact on react performance */}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
