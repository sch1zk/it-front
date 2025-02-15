"use client"

import { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { AnimatePresence, motion } from "framer-motion";


const AuthSwitch: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  // return isLogin ? (
  //   <LoginForm onSwitch={() => setIsLogin(false)} />
  // ) : (
  //   <RegisterForm onSwitch={() => setIsLogin(true)} />
  // );
  
  return (
    <div className="relative flex items-center justify-center w-full" style={{ height: "calc(100vh - var(--header-height))" }}>
      <AnimatePresence>
        {isLogin ? (
          <motion.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1] }}
            exit={{ opacity: [1, 0, 0] }}
            transition={{
              duration: 1.0,
              ease: "easeOut",
              times: [0, 0.4, 1],
            }}
            className="absolute"  
          >
            <LoginForm onSwitch={() => setIsLogin(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="register"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1] }}
            exit={{ opacity: [1, 0, 0] }}
            transition={{
              duration: 1.0,
              ease: "easeOut",
              times: [0, 0.4, 1],
            }}
            className="absolute"
          >
            <RegisterForm onSwitch={() => setIsLogin(true)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
  
export default AuthSwitch;