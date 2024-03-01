import axios from "axios";
import { io } from "socket.io-client";
import { useEffect } from "react";

function App() {
  const socket = io("https://websocket-urub.onrender.com");

  useEffect(() => {
    socket.on("receipt", () => {
      alert("¡Nuevo recibo generado!");
      console.log("Nuevo recibo generado: ")
    });
  }, []);

  const handleOnClick = async () => {
    try {
      await axios.post("https://api1-ujlz.onrender.com/payments", {
        amount: 40,
        
      });
      console.log([socket.emit("receipt")])
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg text-xl"  onClick={handleOnClick}>
        Realiza un pago
      </button>
    </div>
  );
}

export default App;
