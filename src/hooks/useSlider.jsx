import React, { useEffect, useState } from 'react'

const useSlider = () => {
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    lazyload: true,
    pauseOnHover: true,
  });
  const changeSlidesOnWidth = () => {
    if (window.innerWidth < 990 && window.innerWidth > 660) {
      setSettings((prevState) => ({ ...prevState, slidesToShow: 2 }));
      return;
    }
    if (window.innerWidth < 660) {
      setSettings((prevState) => ({ ...prevState, slidesToShow: 1 }));
      return;
    }
    setSettings((prevState) => ({ ...prevState, slidesToShow: 2.5 }));
    return;
  };

  useEffect(() => {
    changeSlidesOnWidth();

    window.addEventListener('resize', () => {
      changeSlidesOnWidth();
    });
    return () =>
      window.removeEventListener('resize', () => changeSlidesOnWidth());
  }, []);
  return {settings};
}

export default useSlider