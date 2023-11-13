import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  // useEffect(() => {},[]);
  //* [] --> known as dependency array jeva jeva applyala kahi pn change jhlyavr function mhnjech useEffect() la call krych ast tya value apn dependency array mdhe tkhun deto,,,ani useEffect() kadhi pn refresh kelyavrti kiva click kelyvrti prt mount hoto;

  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);

    // * Note: useEffect cha dependency array madhe  [currency] tkhtoy karn jeva jeva url mdhe currency change hoil teva teva mla he hook call karych ahe with new changed curency value;
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
