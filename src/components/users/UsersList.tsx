import UsersListItem from './UsersListItem';

type UsersListProps = {
  users: string[];
  setSelectedUserId: (userId: string) => void;
};

export default function UsersList({ users, setSelectedUserId }: UsersListProps) {
  return (
    <ul className='space-y-2'>
      {users.map((user) => (
        <UsersListItem user={user} setSelectedUserId={setSelectedUserId} key={user} />
      ))}
    </ul>
  );
}
