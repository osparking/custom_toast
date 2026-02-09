import toast, { Toaster } from "react-hot-toast";
import "./Toast.css";

const ToastTester = () => {
  return (
    <>
      <Toaster
        containerClassName="custom-toast-container"
        toastOptions={{
          className: "custom-toast",
        }}
      />
      <div>
        <button
          onClick={() => {
            toast.success("상단 중간 아래로 80px 토스트예요.");
          }}
          style={{
            backgroundColor: "pink",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          토스트 보기
        </button>
      </div>
    </>
  );
};

export default ToastTester;
