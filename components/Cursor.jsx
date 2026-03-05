import { useState, useEffect, useRef } from "react";

export default function Cursor() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const ringRef = useRef({ x: -100, y: -100 });
  const cursorRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);

    let raf;
    const animate = () => {
      ringRef.current.x += (cursorRef.current.x - ringRef.current.x) * 0.12;
      ringRef.current.y += (cursorRef.current.y - ringRef.current.y) * 0.12;
      setRingPos({ x: ringRef.current.x, y: ringRef.current.y });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor" style={{ left: cursorPos.x - 5, top: cursorPos.y - 5 }} />
      <div className="cursor-ring" style={{ left: ringPos.x - 16, top: ringPos.y - 16 }} />
    </>
  );
}
