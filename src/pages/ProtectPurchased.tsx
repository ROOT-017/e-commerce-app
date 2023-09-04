import React, { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface PropsTypes {
  children: React.ReactNode;
}

const SuccessCheck: FC<PropsTypes> = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state;

  if (!state) {
    console.log(state);
    navigate(location.state?.from || "/");
  }
  if (state) {
    if (!state?.purchage) {
      navigate(origin || "/", { replace: true });
    }
  }

  return <>{props.children}</>;
};

export default SuccessCheck;
