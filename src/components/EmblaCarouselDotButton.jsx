import { useCallback, useEffect, useState } from "react";

export function useDotButton(emblaApi) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((api) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return undefined;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reinit", onInit).on("reinit", onSelect).on("select", onSelect);

    return () => {
      emblaApi.off("reinit", onInit).off("reinit", onSelect).off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return { selectedIndex, scrollSnaps, onDotButtonClick };
}

export function DotButton({ selected, ...restProps }) {
  return (
    <button
      type="button"
      aria-current={selected}
      className={`embla__dot${selected ? " embla__dot--selected" : ""}`}
      {...restProps}
    />
  );
}
