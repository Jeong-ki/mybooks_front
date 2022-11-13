import { Dispatch, SetStateAction, useEffect } from "react";

interface IoutsideClick {
  ref: any;
  clicked: boolean;
  setClicked: Dispatch<SetStateAction<boolean>>;
}

const useOutsideClick = ({ ref, clicked, setClicked }: IoutsideClick) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setClicked(false);
      }
    }
    if (clicked) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, clicked, setClicked]);
};

export default useOutsideClick;
