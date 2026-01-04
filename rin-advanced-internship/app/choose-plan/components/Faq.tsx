
import { FaqData } from "./FaqData";
import Accordion from "./Accordion";

export default function Faq() {
  return (
    <div className="faq__wrapper">
      <Accordion data={FaqData} />
    </div>
  );
}
