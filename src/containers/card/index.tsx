import React, { useCallback, useEffect, useRef } from 'react';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { changeCommentAction, setLoadingAction } from 'store/images/actions';
import Image from 'components/elements/image';
import Comment from 'components/elements/comment';
import UploadIndicator from 'components/elements/upload-indicator';
import CardLayout from 'components/layouts/card-layout';
import { Image as ImageType, Loadings } from 'store/images/types';

const Card = (props: { item: ImageType }) => {
  const { loadings } = useTypedSelector(state => state.imagesReducer);
  const { openModalAction, changeCommentAction, setLoadingAction } = useActions();
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imageRef.current) {
      const img = (imageRef.current as HTMLImageElement);
      const onLoad = () => {
        setLoadingAction({ [props.item.id]: false });
        removeEventListener('load', onLoad);
      };
      if (!img.complete) {
        img.addEventListener('load', onLoad, { once: true });
        setLoadingAction({ [props.item.id]: true });
      }
    }
  }, [imageRef.current]);

  const openShowImageModal = useCallback((url: string) => {
    openModalAction({ name: 'showImageModal', isOpen: true, data: { url } });
  }, []);

  const changeComment = useCallback((id: string, comment: string) => {
    changeCommentAction({ id, comment });
  }, []);


  return (
    <CardLayout image={
      (loadings as Loadings)[props.item.id]
        ? <UploadIndicator color="darkcyan" />
        : <Image
          ref={imageRef}
          url={props.item.url}
          title={props.item.comment}
          onClick={openShowImageModal}
        />
    }>
      {!(loadings as Loadings)[props.item.id] && <Comment
        value={props.item.comment}
        onChange={changeComment}
        id={props.item.id}
        maxLength={38}
        className="card-layout-comment"
      />}
    </CardLayout>
  );
};

export default Card;
