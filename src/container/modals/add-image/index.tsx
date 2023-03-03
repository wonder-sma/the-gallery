import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { Errors } from '../../../store/images/types';
import Button from '../../../components/elements/button';
import Error from '../../../components/elements/error';
import Form from '../../../components/elements/form';
import Input from '../../../components/elements/input';
import ModalLayout from '../../../components/layouts/modal-layout';

const AddImageModal = () => {
  const [url, setUrl] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const { errors } = useTypedSelector(state => state.imagesReducer);
  const { closeModalAction, loadImageAction, clearErrorsAction } = useActions();

  const closeModal = useCallback(() => {
    closeModalAction({ name: 'addImageModal', isOpen: false });
    clearErrorsAction({ errors: {} });
  }, []);

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    loadImageAction({ id: '', url, comment });
  }, [url, comment]);

  useEffect(() => {
    if (url && !Object.keys(errors).length) {
      closeModalAction({ name: 'addImageModal', isOpen: false });
    }
  }, [errors]);

  return (
    <ModalLayout onClick={closeModal}>
      <Form onSubmit={onSubmit} className="add-image">
        <Input onChange={setUrl} placeholder="Add image URL" name="url" />
        {('url' in errors) && <Error className="url-error">
          {(errors as Errors).url}
        </Error>}
        <Input onChange={setComment} placeholder="Add comment" name="new-comment" />
        {('comment' in errors) && <Error className="comment-error">
          {(errors as Errors).comment}
        </Error>}
        <Button type="submit" value="OK" className="ok" />
      </Form>
    </ModalLayout>
  );
};

export default React.memo(AddImageModal);
