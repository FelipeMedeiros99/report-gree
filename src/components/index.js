import calendar from "./calendar";
import copyButton from "./copyButton";
import counterInputs from "./counterInput";
import line from "./line";
import moneyBox from "./moneyBox";
import obsInput from "./obsInput";
import recepcionistInput from "./recepcionistInput";

export default function  main() {
  recepcionistInput();
  calendar();
  line();
  counterInputs();
  line()
  moneyBox();
  line()
  obsInput();
  copyButton();
}

main();