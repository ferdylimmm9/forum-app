import * as React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { ChatCircleText, ThumbsDown, ThumbsUp } from '@phosphor-icons/react';
import { useDispatch } from 'react-redux';
import { asyncVoteThread } from '../states/threads/action';
import { VoteType } from '../utils/constant';
import threadCardStyles from '../styles/thread-card-styles';

function ThreadCard({
  body = '',
  category = '',
  createdAt = '',
  downVotesBy = [],
  id = '',
  ownerId = '',
  title = '',
  totalComments = 0,
  upVotesBy = [],
  userId = '',
  users = [],
}) {
  const totalLikes = upVotesBy.length;
  const totalUnlikes = downVotesBy.length;
  const isUserLikes = upVotesBy.includes(userId);
  const isUserUnlikes = downVotesBy.includes(userId);
  const date = moment(new Date(createdAt)).fromNow();
  const user = users.find((currentUser) => currentUser.id === ownerId);

  const iconState = (isFill) => (isFill ? 'fill' : 'regular');
  const dispatch = useDispatch();

  const onClickLike = React.useCallback(() => {
    if (!!userId) {
      dispatch(
        asyncVoteThread({
          threadId: id,
          voteType: isUserLikes ? VoteType.NeutralVote : VoteType.UpVote,
        })
      );
    } else {
      alert('Must Login for this action');
    }
  }, [dispatch, id, isUserLikes, userId]);

  const onClickDislike = React.useCallback(() => {
    if (!!userId) {
      dispatch(
        asyncVoteThread({
          threadId: id,
          voteType: isUserUnlikes ? VoteType.NeutralVote : VoteType.DownVote,
        })
      );
    } else {
      alert('Must Login for this action');
    }
  }, [dispatch, id, isUserUnlikes, userId]);

  return (
    <div style={threadCardStyles.cardWrapper}>
      <div style={threadCardStyles.categoryWrapper}>#{category}</div>
      <Link style={threadCardStyles.linkWrapper} to={`/threads/${id}`}>
        {title}
      </Link>
      <div style={threadCardStyles.separatorWrapper}>
        Author: {user?.name || ''} ({date})
      </div>
      <div
        style={threadCardStyles.separatorWrapper}
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <div style={threadCardStyles.actionWrapper}>
        <button
          type="button"
          style={threadCardStyles.buttonWrapper}
          onClick={onClickLike}
        >
          <ThumbsUp weight={iconState(isUserLikes)} size={16} />
          {totalLikes}
        </button>
        <button
          type="button"
          style={threadCardStyles.buttonWrapper}
          onClick={onClickDislike}
        >
          <ThumbsDown weight={iconState(isUserUnlikes)} size={16} />
          {totalUnlikes}
        </button>
        <div type="button" style={threadCardStyles.chatWrapper}>
          <ChatCircleText size={16} />
          {totalComments}
        </div>
      </div>
    </div>
  );
}

ThreadCard.propTypes = {
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  userId: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ThreadCard;
