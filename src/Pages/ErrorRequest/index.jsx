import { useState } from "react";
import { useHistory } from "react-router-dom";
import { TextInfo } from "../Favorites/styles";
import { DivInfo, TextCount, TextInfoG, TextInfoM, TextInfoP } from "./style";

const ErrorPage = () => {
  const [time, setTime] = useState(7);
  const history = useHistory();

  setTimeout(() => {
    setTime(time - 1);
  }, 1000);

  if (time === 0) {
    history.push("/");
  }

  return (
    <div>
      <DivInfo>
        <TextInfoG>Poxa!</TextInfoG>
        <TextInfoM>O personagem que você buscou não existe!</TextInfoM>
        <TextInfoP>Você será redirecionado em 7s</TextInfoP>
        <TextCount>{time}</TextCount>
      </DivInfo>
    </div>
  );
};

export default ErrorPage;
