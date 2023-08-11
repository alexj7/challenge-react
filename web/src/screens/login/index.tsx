import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { DataContext } from "../../context/dataContext";

import { Input } from "../../componets/input";
import { Button } from "../../componets/button";
import { LeftArrowIcon } from "../../componets/icons";


export function Login(): JSX.Element {

  const navigate = useNavigate();
  const { setState, state } = useContext(DataContext)

  const onLogin = () => {
    navigate('/')
    setState({ ...state, logged: true })
  }

  return (
    <div className="bg-gray-100 h-full px-16">
      <div className="fixed inset-0 rounded-lg shadow-md lg:w-[548px] h-[308px] w-9/12 bg-white m-auto p-4">
        <Input
          label={"User"}
          className="mb-5"
          placeholder="Nombre de usuario"
          value={""}
          onChange={() => { }}
          required={true}
        ></Input>
        <Input
          className="mb-5"
          required={true}
          label={"Password"}
          placeholder="Ingrese su contraseña"
          value={""}
          type="password"
          onChange={() => { }}
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
