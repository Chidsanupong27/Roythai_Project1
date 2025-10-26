import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchBasic = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    hdlFetch();
  }, []);
  const hdlFetch = async () => {
    //fs
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Hello Fetch</h1>
      {users.map((item, id) => {
        console.log(item.login);
        return (
          <div>
            <img src={item.avatar_url} />
            <p>{item.login}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FetchBasic;
