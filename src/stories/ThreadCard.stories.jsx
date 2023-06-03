import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../states';
import ThreadCard from '../components/ThreadCard';
export default {
  component: ThreadCard,
  title: 'Thread Card',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </Provider>
    ),
  ],
};

export const Default = {
  args: {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
    category: 'General',
    createdAt: '2021-06-21',
    ownerId: 'users-1',
    upVotesBy: ['users-1'],
    downVotesBy: ['users-2'],
    totalComments: 0,
    userId: 'users-1',
    users: [
      {
        id: 'users-1',
        name: 'John Doe',
        email: 'john@example.com',
        avatar:
          'https://ui-avatars.com/api/?name=Dimas%20Saputra&background=random',
      },
      {
        id: 'users-2',
        name: 'Jane Doe',
        email: 'jane@example.com',
        avatar:
          'https://ui-avatars.com/api/?name=Dimas%20Saputra&background=random',
      },
      {
        id: 'users-3',
        name: 'Si Fulan',
        email: 'fulan@example.com',
        avatar:
          'https://ui-avatars.com/api/?name=Dimas%20Saputra&background=random',
      },
    ],
  },
};
