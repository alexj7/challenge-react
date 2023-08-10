import { Input } from "../../componets/input";
import { Button } from "../../componets/button";

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
          onChange={() => {}}
        ></Input>
        <Button
          className="w-full"
          text="Login"
          onClick={() => {}}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          }
        ></Button>
      </div>
    </div>
  );
}
