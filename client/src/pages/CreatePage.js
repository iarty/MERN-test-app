import React, { useContext, useState } from "react";
import { MDBInput } from "mdbreact";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

const CreatePage = () => {
  const history = useHistory();
  const { token } = useContext(AuthContext);
  const { request } = useHttp();
  const [link, setLink] = useState("");
  const pressHandler = async e => {
    if (e.key === "Enter") {
      try {
        const data = await request(
          "/api/link/generate",
          "POST",
          { from: link },
          {
            Authorization: `Bearer ${token}`
          }
        );
        history.push(`/detail/${data.link._id}`);
      } catch (e) {}
    }
  };
  return (
    <div>
      <MDBInput
        label="Enter link"
        value={link}
        onChange={e => setLink(e.target.value)}
        onKeyPress={pressHandler}
      />
    </div>
  );
};

export default CreatePage;
