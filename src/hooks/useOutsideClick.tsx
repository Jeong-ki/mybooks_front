import { Dispatch, SetStateAction, useEffect } from "react";

interface IoutsideClick {
  ref: React.RefObject<HTMLUListElement>;
  clicked: boolean;
  setClicked: Dispatch<SetStateAction<boolean>>;
}

const useOutsideClick = ({ ref, clicked, setClicked }: IoutsideClick) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Element)) {
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
