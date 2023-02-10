import * as React from "react";
import { Modal as DefaultModal, Backdrop, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import styles from "./Modal.module.scss";

export type IModalProps = React.PropsWithChildren<{
  visible: boolean;
  className?: string;
  onClose?: () => void;
}>;

const Modal: React.FC<IModalProps> = (props) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);

  return (
    <DefaultModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={styles.Modal}
      open={visible}
      closeAfterTransition
      BackdropComponent={Backdrop}
    >
      <div
        className={`${styles.ModalContent} ${
          props.className ? props.className : ""
        }`}
      >
        {props.onClose ? (
          <IconButton
            style={{ position: "absolute", top: 5, right: 10 }}
            onClick={props.onClose}
          >
            <Close />
          </IconButton>
        ) : null}
        {props.children}
      </div>
    </DefaultModal>
  );
};

export default Modal;
