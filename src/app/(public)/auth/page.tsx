import { FaGithub, FaGoogle, FaVk } from "react-icons/fa6";
import AuthSwitch from "./AuthSwitch";

export const socialButtons = [
  { id: "vk", icon: FaVk },
  { id: "github", icon: FaGithub },
  { id: "google", icon: FaGoogle },
];

export default function AuthPage() {
  return (
    <div className="flex items-center justify-center" style={{ height: "calc(100vh - var(--header-height))" }}>
      <AuthSwitch/>
    </div>
  );
};