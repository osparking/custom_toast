import toast, { Toaster } from "react-hot-toast";
import "./Toast.css";

const ToastControls = () => {
  const showTopToast = () => {
    toast.success("상단 중간 아래로 80px 토스트예요.", {
      className: "custom-toast",
      position: "top-center",
      duration: 4000,
    });
  };

  const showBottomToast = () => {
    toast.error("하단 중간 위로 150px 토스트예요.", {
      className: "custom-toast",
      position: "bottom-center",
      duration: 4000,
    });
  };

  return (
    <>
      {/* Single Toaster with all positions */}
      <Toaster
        toastOptions={{
          className: "custom-toast",
        }}
      />
      
      <div style={{ padding: "20px" }}>
        <button
          onClick={showTopToast}
          style={{
            backgroundColor: "lightblue",
            fontWeight: "bold",
            fontSize: "20px",
            padding: "10px 20px",
            margin: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          상단 토스트
        </button>
        
        <br />
        
        <button
          onClick={showBottomToast}
          style={{
            backgroundColor: "lightcoral",
            fontWeight: "bold",
            fontSize: "20px",
            padding: "10px 20px",
            margin: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          하단 토스트
        </button>
      </div>
    </>
  );
};

export default ToastControls;