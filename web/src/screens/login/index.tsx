import { Input } from "../../componets/input";
import { Button } from "../../componets/button";
import { LeftArrowIcon } from "../../componets/icons";

export function Login(): JSX.Element {
  return (
    <div className="bg-gray-100 h-full">
      <div className="fixed inset-0 rounded-lg shadow-md w-[548px] h-[308px] bg-white m-auto p-4">
        <Input
          label={"User"}
          className="mb-5"
          placeholder="Nombre de usuario"
          value={"alexander"}
          onChange={() => {}}
          required={true}
        ></Input>
        <Input
          className="mb-5"
          required={true}
          label={"Password"}
          placeholder="Ingrese su contraseña"
          value={""}
          type="password"
          onChange={() => {}}
        ></Input>
        <Button
          className="w-full"
          text="Login"
          onClick={() => {}}
          icon={<LeftArrowIcon />}
        ></Button>
      </div>
    </div>
  );
}
