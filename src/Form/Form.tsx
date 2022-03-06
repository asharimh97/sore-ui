/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React from "react";

interface FormProps {
  onSubmit: (params?: any) => void;
  [key: string]: any;
}

const Form: React.FC<FormProps> = ({ children, onSubmit, ...props }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };
  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
