import { useLocation } from "react-router-dom";

export default function useLastPathName() {
  const location = useLocation();
  const lastPathName = location?.pathname.split("/");
  return lastPathName[lastPathName?.length - 1] || "";
}
