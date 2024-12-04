import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true); // Initialize with current status

  useEffect(() => {
    console.log(5);
    const handleOnline = () => {
      setOnlineStatus(true);
      };
    const handleOffline = () =>  {
      setOnlineStatus(false);
    }
      console.log(onlineStatus);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
   
    // Cleanup function
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
