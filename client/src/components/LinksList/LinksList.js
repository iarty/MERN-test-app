import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { Link } from "react-router-dom";

const LinksList = ({ links }) => {
  if (!links.length) {
    return <div className="text-center">No links!!!</div>;
  }

  return (
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th>#</th>
          <th>Original</th>
          <th>Shorted</th>
          <th>Open</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {links.map((link, index) => {
          return (
            <tr key={link._id}>
              <td>{index + 1}</td>
              <td>{link.from}</td>
              <td>{link.to}</td>
              <td>
                <Link to={`/detail/${link._id}`}>Open</Link>
              </td>
            </tr>
          );
        })}
      </MDBTableBody>
    </MDBTable>
  );
};

export default LinksList;
