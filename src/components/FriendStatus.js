import { useFriendStatus } from "../hooks/useFriendStatus";

export default function FriendStatus({ friend }) {
  const isOnline = useFriendStatus(friend);

  return isOnline ? "Here" : "Away";
}
