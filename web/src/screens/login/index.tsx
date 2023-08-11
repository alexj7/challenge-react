import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { DataContext } from "../../context/dataContext";

import { Input } from "../../componets/input";
import { Button } from "../../componets/button";
import { LeftArrowIcon } from "../../componets/icons";
import { Api } from "../../api";


export function Login(): JSX.Element {

  const navigate = useNavigate();
  const { setState, state } = useContext(DataContext)

  const [users, setUsers] = useState<{ user: string, id: number }[]>([])
  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')


  const onLogin = async () => {
    let userData;

    const exist = users.find(u => u.user === user);

    if (!exist) {
      userData = await Api.postUser({ user });
    }

    const updatedState = {
      ...state,
      logged: true,
      user: exist ? exist : userData
    };

    setState(updatedState);
    navigate('/');
  };

  const getUsers = async () => {
    const data = await Api.getUser()
    setUsers(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="bg-gray-100 h-full px-16">
      <div className="fixed inset-0 rounded-lg shadow-md lg:w-[548px] h-[308px] w-9/12 bg-white m-auto p-4">
        <Input
          label={"User"}
          className="mb-5"
          placeholder="Nombre de usuario"
          value={user}
          onChange={(event) => setUser(event.target.value)}
          required={true}
        ></Input>
        <Input
          className="mb-5"
          required={true}
          label={"Password"}
          placeholder="Ingrese su contraseña"
          value={password}
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        ></Input>
        <Button
          className="w-full"
          text="Login"
          onClick={onLogin}
          icon={<LeftArrowIcon />}
        ></Button>
      </div>
    </div>
  );
}
