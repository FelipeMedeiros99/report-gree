import renderRecepcionistInput from "./renderRecepcionistInput";
import renderCalendar from "./renderCalendar";
import renderCopyButton from "./renderCopyButton";
import renderCounterInputs from "./renderCounterInput";
import renderLine from "./renderLine";
import renderMoneyBox from "./renderMoneyBox";
import renderTextAreaObservations from "./renderTextAreaObservations";

export default function  main() {
  renderRecepcionistInput();
  renderCalendar();
  renderLine();
  renderCounterInputs();
  renderLine()
  renderMoneyBox();
  renderLine()
  renderTextAreaObservations();
  renderCopyButton();
}

main();