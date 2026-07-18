import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function usePrevNextButtons(emblaApi) {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((api) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return undefined;

    onSelect(emblaApi);
    emblaApi.on("reinit", onSelect).on("select", onSelect);

    return () => {
      emblaApi.off("reinit", onSelect).off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick };
}

export function PrevButton({ disabled, ...restProps }) {
  return (
    <button
      type="button"
      aria-label="Previous publication"
      disabled={disabled}
      className="embla__button"
      {...restProps}
    >
      <ChevronLeft size={20} />
    </button>
  );
}

export function NextButton({ disabled, ...restProps }) {
  return (
    <button
      type="button"
      aria-label="Next publication"
      disabled={disabled}
      className="embla__button"
      {...restProps}
    >
      <ChevronRight size={20} />
    </button>
  );
}
