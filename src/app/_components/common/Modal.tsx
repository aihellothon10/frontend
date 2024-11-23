import { Portal } from 'dotori-components';
import { useCreateElement, useOutSideClick } from 'dotori-hooks';

const Modal = ({ children, close, isOpen }: ModalProps) => {
  const ref = useOutSideClick<HTMLDivElement>(close);
  useCreateElement({ tagName: 'div', attributes: { id: 'modal' } });

  return (
    isOpen && (
      <Portal target={document.getElementById('modal') as HTMLDivElement}>
        <div className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-dimmed-50">
          <div ref={ref} className="w-80 rounded-12 bg-grayscale-10 p-3 body-sm-15-regular">
            {children}
          </div>
        </div>
      </Portal>
    )
  );
};

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
}

export default Modal;
