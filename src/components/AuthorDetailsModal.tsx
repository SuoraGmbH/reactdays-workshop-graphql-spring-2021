import React from "react";
import styled from "styled-components/macro";
import {AuthorDetails} from "./AuthorDetails";

interface Props {
  personId: string;
  onRequestClose: () => void;
}

const Modal = styled.div`
  position: fixed;
  background-color: rgba(55, 55, 55, 0.35);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  & > div {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: white;
  }
`;

export const AuthorDetailsModal: React.FunctionComponent<Props> = ({
  personId,
  onRequestClose,
}) => {
  return (
    <Modal onClick={() => onRequestClose()}>
      <div onClick={(e) => e.stopPropagation()}>
        <AuthorDetails personId={personId} />
      </div>
    </Modal>
  );
};
