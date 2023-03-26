import * as React from "react";
import * as S from "./styled";
import { ITabBar } from "../../../@types/indes";

export const TabSelector = ({
  isActive,
  children,
  onClick,
}: ITabBar) => (
  <S.Btn
      disabled={isActive}
      onClick={onClick}
  >
    {children}
  </S.Btn>
);