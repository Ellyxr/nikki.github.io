import { useState, useRef, type ReactNode } from "react";

type PopoverProps = {
  children: ReactNode;
  content: ReactNode;
};

const Popover = ({ children, content }: PopoverProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const hideTimeout = useRef<number | null>(null); //starts as null then becomes timeoutID

  const handleMouseEnter = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setIsVisible(false);
    }, 150);
  };

  {
    /** HTML */
  }
  return (
    <div className="popover-container">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="popover-trigger "
      >
        {children}
      </div>

      {isVisible && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="popover-content"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
