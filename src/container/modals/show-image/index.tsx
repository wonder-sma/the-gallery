import React, { useCallback, useRef } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Image from '../../../components/elements/image';
import ModalLayout from '../../../components/layouts/modal-layout';

const ShowImageModal = () => {
  const { showImageModal } = useTypedSelector(state => state.modalsReducer);
  const { closeModalAction } = useActions();
  const imageRef = useRef<HTMLImageElement | null>(null);

  const closeModal = useCallback(() => {
    closeModalAction({ name: 'showImageModal', isOpen: false });
  }, []);

  return (
    <ModalLayout onClick={closeModal} className="full-size">
      <Image ref={imageRef} url={showImageModal.data.url} className="full-size" />
    </ModalLayout>
  );
};

export default React.memo(ShowImageModal);
