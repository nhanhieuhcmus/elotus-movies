import { useState, useEffect } from "react";

import "./ScrollTopButton.scss";
import Button from "../Button/Button";


const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    visible && (
      <Button className="medium scrollTopBtn" onClick={scrollToTop}>
        Scroll top &#8593;
      </Button>
    )
  );
};

export default ScrollTopButton;
