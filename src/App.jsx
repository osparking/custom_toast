import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import "./Toast.css";

function App() {

  return (
    <>
      <Toaster
        position="top-center"
        containerClassName="custom-toast-container"
        toastOptions={{
          className: "custom-toast",
        }}
      />
      <button
        variant="success"
        onClick={() => {
          toast.success("상단 중간 아래로 80px 토스트예요.");
        }}
        style={{backgroundColor: "pink", fontWeight: "bold", fontSize: "20px"}}
      >
        토스트 보기
      </button>
    </>
  );
}

export default App;
