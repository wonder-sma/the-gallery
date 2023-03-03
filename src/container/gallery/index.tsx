import React, { useCallback } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Image as ImageType } from '../../store/images/types';
import Button from '../../components/elements/button';
import List from '../../components/elements/list';
import GalleryLayout from '../../components/layouts/gallery-layout';
import Card from '../card';
import AddImageModal from '../modals/add-image';
import ShowImageModal from '../modals/show-image';

const Gallery = () => {
  const { images } = useTypedSelector(state => state.imagesReducer);
  const { addImageModal, showImageModal } = useTypedSelector(state => state.modalsReducer);
  const { openModalAction, closeAllModalAction } = useActions();

  const openAddImageModal = useCallback(() => {
    openModalAction({ name: 'addImageModal', isOpen: true });
  }, []);

  const closeAllModal = useCallback(() => {
    closeAllModalAction();
  }, []);

  const renders = {
    item: useCallback((item: ImageType) => (
      <Card key={item.id} item={item} />
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
