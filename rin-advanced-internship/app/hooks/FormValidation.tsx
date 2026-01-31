"use client";
import { useState } from "react";

export const formValidation = () => {
  const [formErrorCode, setFormErrorCode] = useState(0);
  const [formSuccessCode, setFormSuccessCode] = useState(0);

  const validateEmail = (email: string): boolean => {
    return !!email && email.includes("@");
  };

  const validatePassword = (password: string): boolean => {
    return !!password && password.length >= 6;
  };

  const vaildateOnlyEmail = (email: string): number => {
    if (!!email && !email.includes("@")) return 1;
    return 0;
  };

  const validateBoth = (email: string, password: string): number => {
    const hasEmail = !!email;
    const hasPassword = !!password;
    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);

    if (!hasEmail && !hasPassword) return 3;
    if (!emailValid) return 1;
    if (!hasPassword) return 2;
    if (password.length < 6) return 6;
    if (!passwordValid) return 4;
    return 0;
  };
  return {
    formErrorCode,
    setFormErrorCode,
    validateBoth,
    formSuccessCode,
    setFormSuccessCode,
    vaildateOnlyEmail,
  };
};
