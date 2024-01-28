import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import teachers from '../json/teachers.json'
import { openItemModal } from '../store/reducer/itemModalSlice';

const useTeacherModal = () => {
  const { teacherId } = useParams();
  const dispatch = useDispatch();
  const teacher = useSelector((state) => state.itemReducer.item);
  const open = useSelector((state) => state.itemReducer.isOpen);
  useEffect(() => {
    teacherId
      ? dispatch(
          openItemModal(
            teachers.filter((item) => String(item.id) === teacherId)[0]
          )
        )
      : null;
  }, []);
  return {teacherId, dispatch, teacher, open}
}

export default useTeacherModal