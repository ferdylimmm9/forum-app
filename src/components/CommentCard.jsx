import * as React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { ThumbsDown, ThumbsUp } from '@phosphor-icons/react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncVoteComment } from '../states/threadDetail/action';
import { VoteType } from '../utils/constant';
import commentCardStyles from '../styles/comment-card-styles';

function CommentCard({
  content,
  createdAt,
  downVotesBy,
  id,
  owner,
  upVotesBy,
  threadId,
}) {
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  const date = moment(new Date(createdAt)).fromNow();
  const totalLikes = (upVotesBy || []).length;
  const totalUnlikes = (downVotesBy || []).length;
  const isUserLikes = (upVotesBy || []).includes(authUser?.id);
  const isUserUnlikes = (downVotesBy || []).includes(authUser?.id);
  const iconState = (isFill) => (isFill ? 'fill' : 'regular');

  const onClickLike = React.useCallback(() => {
    if (authUser === null) {
      alert('Must Login for this action');
      return;
    }
    dispatch(
      asyncVoteComment({
        commentId: id,
        threadId,
        voteType: isUserLikes ? VoteType.NeutralVote : VoteType.UpVote,
      })
    );
  }, [authUser, dispatch, id, isUserLikes, threadId]);

  const onClickDislike = React.useCallback(() => {
    if (authUser === null) {
      alert('Must Login for this action');
      return;
    }
    dispatch(
      asyncVoteComment({
        commentId: id,
        threadId,
        voteType: isUserUnlikes ? VoteType.NeutralVote : VoteType.DownVote,
      })
    );
  }, [authUser, dispatch, id, isUserUnlikes, threadId]);

  return (
    <div style={commentCardStyles.commentCardWrapper}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div style={commentCardStyles.userInformationWrapper}>
        Dari:
        <img
          alt={owner.name}
          src={owner.avatar}
          style={commentCardStyles.avatarWrapper}
        />
        {owner.name} ({date})
      </div>
      <div style={commentCardStyles.actionWrapper}>
        <button
          onClick={onClickLike}
          type="button"
          style={commentCardStyles.actionButtonWrapper}
        >
          <ThumbsUp weight={iconState(isUserLikes)} size={16} />
          {totalLikes}
        </button>
        <button
          onClick={onClickDislike}
          type="button"
          style={commentCardStyles.actionButtonWrapper}
        >
          <ThumbsDown weight={iconState(isUserUnlikes)} size={16} />
          {totalUnlikes}
        </button>
      </div>
    </div>
  );
}

CommentCard.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  threadId: PropTypes.string.isRequired,
};

export default CommentCard;
