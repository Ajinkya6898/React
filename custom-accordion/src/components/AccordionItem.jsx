import { useState } from "react";
import "../styles/accordionitem.css";

const AccordionItem = ({ num, title, ans }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <>
      <div onClick={handleToggle} className="container">
        <div className="wrapper">
          <h3 className="num">{num + 1}</h3>
          <div className="ans">
            <h3 className="title">{title}</h3>
            {isOpen && <p className="ans">{ans}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
