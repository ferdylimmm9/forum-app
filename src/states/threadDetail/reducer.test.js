import { describe, it, expect } from 'vitest';
import { threadDetailReducer } from './reducer';

describe('threadsReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    //action
    const nextState = threadDetailReducer(initialState, action);

    //assert
    expect(nextState).toEqual(initialState);
  });
  it('should return the threadDetail when given by RECEIVE_THREAD_DETAIL action', () => {
    //arrange
    const initialState = null;
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: 'comment-1',
              content: 'Ini adalah komentar pertama',
              createdAt: '2021-06-21T07:00:00.000Z',
              owner: {
                id: 'users-1',
                name: 'John Doe',
                avatar: 'https://generated-image-url.jpg',
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],
        },
      },
    };

    //action
    const nextState = threadDetailReducer(initialState, action);

    //assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });
  it('should return the null when given by CLEAR_THREAD_DETAIL action', () => {
    //arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: 'CLEAR_THREAD_DETAIL',
    };

    //action
    const nextState = threadDetailReducer(initialState, action);

    //assert
    expect(nextState).toEqual(null);
  });
  it('should return the threadDetail with the new comment when given by ADD_COMMENT_THREAD_DETAIL action', () => {
    //arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
    };
    const action = {
      type: 'ADD_COMMENT_THREAD_DETAIL',
      payload: {
        comment: {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };

    //action
    const nextState = threadDetailReducer(initialState, action);

    //assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [action.payload.comment],
    });
  });
  it('should return the threadDetail with the upvote thread when given by UPVOTE_THREAD action', () => {
    //arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
    };

    const action = {
      type: 'UPVOTE_THREAD',
      payload: {
        userId: 'user-1',
      },
    };

    //action
    const nextState = threadDetailReducer(initialState, action);

    //assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [action.payload.userId],
    });
  });
  it('should return the threads with the downvote thread when given by DOWNVOTE_THREAD action', () => {
    //arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
    };

    const action = {
      type: 'DOWNVOTE_THREAD',
      payload: {
        userId: 'user-1',
      },
    };

    //action
    const nextState = threadDetailReducer(initialState, action);

    //assert
    expect(nextState).toEqual({
      ...initialState,
      downVotesBy: [action.payload.userId],
    });
  });
  it('should return the threads with the remove upvote and downvote thread when given by NEUTRALVOTE_THREAD action', () => {
    //arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: ['user-1'],
      downVotesBy: ['user-1'],
      comments: [],
    };

    const action = {
      type: 'NEUTRALVOTE_THREAD',
      payload: {
        userId: 'user-1',
      },
    };

    //action
    const nextState = threadDetailReducer(initialState, action);

    //assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: [],
    });
  });
  it('should return the threadDetail with upvote comment given by UPVOTE_COMMENT_THREAD_DETAIL action', () => {
    //arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: 'UPVOTE_COMMENT_THREAD_DETAIL',
      payload: {
        commentId: 'comment-1',
        userId: 'users-1',
      },
    };

    //action
    const nextState = threadDetailReducer(initialState, action);

    //assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        { ...initialState.comments[0], upVotesBy: [action.payload.userId] },
      ],
    });
  });
  it('should return the threadDetail with downvote comment given by DOWNVOTE_COMMENT_THREAD_DETAIL action', () => {
    //arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: 'DOWNVOTE_COMMENT_THREAD_DETAIL',
      payload: {
        commentId: 'comment-1',
        userId: 'users-1',
      },
    };

    //action
    const nextState = threadDetailReducer(initialState, action);

    //assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        { ...initialState.comments[0], downVotesBy: [action.payload.userId] },
      ],
    });
  });
  it('should return the threadDetail with neutralvote comment given by NEUTRALVOTE_COMMENT_THREAD_DETAIL action', () => {
    //arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: ['users-1'],
          downVotesBy: ['users-1'],
        },
      ],
    };
    const action = {
      type: 'NEUTRALVOTE_COMMENT_THREAD_DETAIL',
      payload: {
        commentId: 'comment-1',
        userId: 'users-1',
      },
    };

    //action
    const nextState = threadDetailReducer(initialState, action);

    //assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        { ...initialState.comments[0], downVotesBy: [], upVotesBy: [] },
      ],
    });
  });
});
