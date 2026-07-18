import "@testing-library/jest-dom";

class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.IntersectionObserver = IntersectionObserverStub;
