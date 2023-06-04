import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as React from 'react';
import moment from 'moment';
import { CaretCircleLeft, ThumbsDown, ThumbsUp } from '@phosphor-icons/react';
import {
  asyncAddCommentThreadDetail,
  asyncReceiveThreadDetail,
  asyncVoteThread,
} from '../states/threadDetail/action';
import CommentCard from '../components/CommentCard';
import { VoteType } from '../utils/constant';
import detailPageStyles from '../styles/detail-page-styles';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { threadDetail = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();
  const [content, setContent] = React.useState('');

  const onAddComment = React.useCallback(
    (e) => {
      e.preventDefault();
      dispatch(asyncAddCommentThreadDetail({ content, threadId: id }));
      setContent('');
    },
    [content, dispatch, id]
  );

  const date = React.useMemo(
    () => moment(new Date(threadDetail?.createdAt || new Date())).fromNow(),
    [threadDetail?.createdAt]
  );

  const totalLikes = React.useMemo(
    () => (threadDetail?.upVotesBy || []).length,
    [threadDetail?.upVotesBy]
  );
  const totalUnlikes = React.useMemo(
    () => (threadDetail?.downVotesBy || []).length,
    [threadDetail?.downVotesBy]
  );
  const isUserLikes = React.useMemo(
    () => (threadDetail?.upVotesBy || []).includes(authUser?.id),
    [authUser?.id, threadDetail?.upVotesBy]
  );
  const isUserUnlikes = React.useMemo(
    () => (threadDetail?.downVotesBy || []).includes(authUser?.id),
    [authUser?.id, threadDetail?.downVotesBy]
  );

  const iconState = React.useCallback(
    (isFill) => (isFill ? 'fill' : 'regular'),
    []
  );

  const onClickLike = React.useCallback(() => {
    if (authUser) {
      dispatch(
        asyncVoteThread({
          threadId: id,
          voteType: isUserLikes ? VoteType.NeutralVote : VoteType.UpVote,
        })
      );
    } else {
      alert('Must Login for this action');
    }
  }, [authUser, dispatch, id, isUserLikes]);

  const onClickDislike = React.useCallback(() => {
    if (authUser) {
      dispatch(
        asyncVoteThread({
          threadId: id,
          voteType: isUserUnlikes ? VoteType.NeutralVote : VoteType.DownVote,
        })
      );
    } else {
      alert('Must Login for this action');
    }
  }, [authUser, dispatch, id, isUserUnlikes]);

  const onBack = React.useCallback(() => {
    navigate(-1);
  }, [navigate]);

  React.useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  if (threadDetail === null) {
    return null;
  }

  return (
    <div style={detailPageStyles.detailPageWrapper}>
      <button
        style={detailPageStyles.backButtonWrapper}
        type="button"
        onClick={onBack}
      >
        <CaretCircleLeft size={36} />
      </button>
      <div style={detailPageStyles.contentWrapper}>
        <div style={detailPageStyles.categoryWrapper}>
          #{threadDetail?.category}
        </div>
        <h2>{threadDetail?.title}</h2>
        <div style={detailPageStyles.authorWrapper}>
          Author :
          <img
            alt={threadDetail?.owner?.id}
            src={threadDetail?.owner?.avatar}
            style={detailPageStyles.avatarWrapper}
          />
          {threadDetail?.owner?.name} ({date})
        </div>
        <div dangerouslySetInnerHTML={{ __html: threadDetail?.body }} />
        <div style={detailPageStyles.actionWrapper}>
          <button
            onClick={onClickLike}
            type="button"
            style={detailPageStyles.buttonActionWrapper}
          >
            <ThumbsUp weight={iconState(isUserLikes)} size={16} />
            {totalLikes}
          </button>
          <button
            onClick={onClickDislike}
            type="button"
            style={detailPageStyles.buttonActionWrapper}
          >
            <ThumbsDown weight={iconState(isUserUnlikes)} size={16} />
            {totalUnlikes}
          </button>
        </div>
        <p>Beri Komentar : </p>
        {authUser === null ? (
          <div>
            Anda harus{' '}
            <Link style={detailPageStyles.linkWrapper} to="/login">
              Login
            </Link>{' '}
            untuk memberi komentar
          </div>
        ) : (
          <form onSubmit={onAddComment}>
            <div
              className="content-editable"
              style={detailPageStyles.contentEditableWrapper}
              contentEditable
              placeholder="Masukkan Komentar Anda"
              onInput={(e) => setContent(e.currentTarget.innerHTML)}
              {...(content === ''
                ? { dangerouslySetInnerHTML: { __html: content } }
                : {})}
            />
            <button style={detailPageStyles.submitButtonWrapper} type="submit">
              Kirim
            </button>
          </form>
        )}
        <h3 style={detailPageStyles.mt16}>
          Komentar ({(threadDetail.comments || []).length})
        </h3>
        {(threadDetail.comments || []).map((comment) => (
          <CommentCard key={comment.id} {...comment} threadId={id} />
        ))}
      </div>
    </div>
  );
}

export default DetailPage;
