import React from "react";
function NotFound() {
  return (
    <main
      style={{
        position: "relative",
        height: "100vh",
      }}
    >
      <h1
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Здесь ничего нет! Поищите в другом месте
      </h1>
    </main>
  );
}
export default NotFound;
