import { useState } from "react";
import { UserProfile } from "../types/UserProfile";
import axios from "axios";
import { User } from "../types/api/user";

// 前ユーザー一覧の取得

export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = () => {
    setLoading(true);
    setError(false);

    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        const data = res.data.map(data => ({
          id: data.id,
          name: `${data.name}(${data.username})`,
          email: data.email,
          address: `${data.address.city} ${data.address.suite} ${data.address.street}`
        }));
        setUserProfiles(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  return {getUsers, userProfiles, loading, error}
};
