type UserListItemProps = {
  user: string;
  setSelectedUserId: (userId: string) => void;
};

export default function usersListItem({ user, setSelectedUserId }: UserListItemProps) {
  return (
    <li
      key={user}
      onClick={() => setSelectedUserId(user)}
      className='p-2 cursor-pointer rounded hover:bg-blue-100'
    >
      {user}
    </li>
  );
}
