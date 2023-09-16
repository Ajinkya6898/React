import AccordionItem from "./AccordionItem";
import reactQuestions from "../data/question";

const Accordion = () => {
  return (
    <>
      {reactQuestions.map((que, i) => {
        return (
          <>
            <AccordionItem
              key={i}
              num={i}
              title={que.question}
              ans={que.answer}
            />
          </>
        );
      })}
    </>
  );
};

export default Accordion;
