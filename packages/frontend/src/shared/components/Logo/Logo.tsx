import Image from "next/image";
import Logotipo from "../../../assets/kanban.png";
import Lines from "../../../assets/LogoLinesGroup.png";

export const Logo = () => {
  return (
    <div>
      <Image src={Lines} alt="linhas da logotipo"/>
      <Image src={Logotipo} alt="logotipo kanban"/>
    </div>
  );
};
