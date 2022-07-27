import * as React from 'react';
import axios from 'axios';
import './style.css';

export default function App() {
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    try {
      const getData = async () => {
        const datas = await axios.get(
          'https://jsonplaceholder.typicode.com/users/'
        );
        setUser(datas.data);
      };
      getData();
    } catch (err) {
      err.message;
    }
  }, []);

  const reqDats = user.map((x) => <div key={x.id}>{x.name}</div>);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {reqDats}
    </div>
  );
}
