export interface ModalPropsType {
  width?: string;
  title: string;
  children: React.ReactNode;
  yesButtonText?: string;
  noButtonText?: string;
  onClickYesButton?: () => void;
  onClickNoButton?: () => void;
}
