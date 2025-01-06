import styles from "src/components/UserTag.module.css";

import type { User } from "src/api/users";

export interface UserTag {
  user?: User;
}

export function UserTag({ user }: UserTag) {
  return (
    <div className={styles.userTag}>
      <img
        src={user ? (user.profilePictureURL ? user.profilePictureURL : "/userDefault.svg") : ""}
        alt="User's profile"
      />
      <p>{user ? user.name : ""}</p>
    </div>
  );
}
