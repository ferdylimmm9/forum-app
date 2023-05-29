import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as React from 'react';
import {
  asyncAddCommentThreadDetail,
  asyncReceiveThreadDetail,
  asyncVoteComment,
  asyncVoteThread,
} from '../states/threadDetail/action';

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states); // @TODO: get talkDetail and authUser state from store
  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  React.useEffect(() => {
    // @TODO: dispatch async action to get talk detail by id
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onAddComment = (content) => {
    dispatch(asyncAddCommentThreadDetail({ content }));
  };

  const onVoteThread = (voteType) => {
    dispatch(asyncVoteThread({ threadId: id, voteType }));
  };

  const onVoteComment = (commentId, voteType) => {
    dispatch(asyncVoteComment({ commentId, voteType, threadId: id }));
  };

  console.log(threadDetail, authUser);

  return <>Detail</>;
}

export default DetailPage;
