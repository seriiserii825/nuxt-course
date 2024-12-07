export function useUtils() {
  const sayHello = () => {
    console.log("Hello from useUtils");
  };
  return { sayHello };
}
