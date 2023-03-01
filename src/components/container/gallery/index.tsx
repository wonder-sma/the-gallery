import React, { useCallback } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { changeCommentAction } from '../../../store/images/actions';
import { Image as ImageType } from '../../../store/images/types';
import Image from '../../../components/elements/image';
import Button from '../../elements/button';
import List from '../../elements/list';
import CardLayout from '../../layouts/card-layout';
import GalleryLayout from '../../layouts/gallery-layout';
import AddImageModal from '../modals/add-image';
import ShowImageModal from '../modals/show-image';

const Gallery = () => {
  const { images } = useTypedSelector(state => state.imagesReducer);
  const { addImageModal, showImageModal } = useTypedSelector(state => state.modalsReducer);
  const { openModalAction, changeCommentAction, closeAllModalAction } = useActions();

  const openAddImageModal = useCallback(() => {
    openModalAction({ name: 'addImageModal', isOpen: true });
  }, []);

  const openShowImageModal = useCallback((url: string) => {
    openModalAction({ name: 'showImageModal', isOpen: true, data: { url } });
  }, []);

  const closeAllModal = useCallback(() => {
    closeAllModalAction();
  }, []);

  const changeComment = useCallback((id: string, comment: string) => {
    changeCommentAction({ id, comment });
  }, []);

  const renders = {
    item: useCallback((item: ImageType) => (
      <CardLayout key={item.id} id={item.id} comment={item.comment} onChange={changeComment}>
        <Image url={item.url} title={item.comment} onClick={openShowImageModal} />
      </CardLayout>
    ), []),
  };

  return (
    <GalleryLayout
      onEscape={closeAllModal}
      head={
        <>
          <h1>The Gallery</h1>
          <Button value="Add image" onClick={openAddImageModal} className="add-image" />
        </>
      }>
      <List renderItem={renders.item} items={images} />
      {addImageModal.isOpen && <AddImageModal />}
      {showImageModal.isOpen && <ShowImageModal />}
    </GalleryLayout>
  );
};

export default Gallery;
