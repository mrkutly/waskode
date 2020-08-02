import React from "react";
import styled from "styled-components";

interface FlashProps
  extends React.PropsWithoutRef<JSX.IntrinsicElements["div"]> {
  type: "success" | "error" | "warning";
}

export const Flash: React.FC<FlashProps> = ({ type, children, ...rest }) => (
  <FlashStyles className={type} {...rest}>
    {children}
  </FlashStyles>
);

const FlashStyles = styled.div`
  background: ${({ theme }) => theme.neutral[100]};
  color: ${({ theme }) => theme.text.onNeutral[100]};
  padding: 12px 0;
  text-align: center;

  &.success {
    border: 4px solid ${({ theme }) => theme.status.success[100]};
  }
  &.error {
    border: 4px solid ${({ theme }) => theme.status.error[100]};
  }
  &.warning {
    border: 4px solid ${({ theme }) => theme.status.warning[100]};
  }
`;
