import React, { useState } from "react";
import Options from "../../Acordion/Options";
import { LinkOption, Nav, Divli, mediaPint } from "./styled";
import img1 from "../../../assets/img/logo-ct.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faListCheck,
  faQrcode,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";

export const Sidebar = ({ open, setOpen }) => {
  const [active, setActive] = useState(false);
  const handleClick = (index) => setActive(index === active ? false : index);
  console.log(mediaPint)
  return (
    <Nav open={open}>
      <img src={img1} style={{ width: "100px", margin: "15px 0" }} alt='' />
      <div>
        <Divli>
          <LinkOption to="/expenses">
            <FontAwesomeIcon
              icon={faHouseChimney}
              style={{ width: "22px", height: "22px", margin: "6px 4px 0 0" }}
            />
            <span>Principal</span>
          </LinkOption>
        </Divli>
        <Divli>
          <LinkOption to="/expenses">
            <FontAwesomeIcon
              icon={faQrcode}
              style={{ width: "22px", height: "22px", margin: "6px 4px 0 0" }}
            />

            <span>Leer Qr</span>
          </LinkOption>
        </Divli>
        <Divli>
          <LinkOption to="/">
            <FontAwesomeIcon
              icon={faListCheck}
              style={{ width: "22px", height: "22px", margin: "0 4px 0 0" }}
            />
            <span>Gestion Fichas</span>
          </LinkOption>
        </Divli>
        <Divli>
          <LinkOption to="/expenses">
            <FontAwesomeIcon
              icon={faUserPen}
              style={{ width: "22px", height: "22px", margin: "0 4px 0 0" }}
            />
            <span>Registro Usuario</span>
          </LinkOption>
        </Divli>
        <Divli>
          <LinkOption to="/expenses">
            <span>Chat</span>
          </LinkOption>
        </Divli>
        <Divli>
          <Options
            label="Mi panel"
            active={active === 3}
            handleClick={() => handleClick(3)}
          >
            <LinkOption to="/expenses">
              <span>Chat</span>
            </LinkOption>
            <LinkOption to="/expenses">
              <span>Chat</span>
            </LinkOption>
          </Options>
        </Divli>
      </div>
    </Nav>
  );
};
