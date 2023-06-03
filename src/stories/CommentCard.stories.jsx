import { Provider } from 'react-redux';
import CommentCard from '../components/CommentCard';
import store from '../states';

export default {
  component: CommentCard,
  title: 'Comment Card',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export const Default = {
  args: {
    id: 'comment-1',
    content: 'Ini adalah komentar pertama',
    createdAt: '2021-06-21T07:00:00.000Z',
    owner: {
      id: 'users-1',
      name: 'John Doe',
      avatar:
        'https://ui-avatars.com/api/?name=Dimas%20Saputra&background=random',
    },
    upVotesBy: ['users-1'],
    downVotesBy: ['users-2'],
  },
};
