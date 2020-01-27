import React from "react";
import { MDBCard, MDBCardText, MDBCardTitle, MDBContainer } from "mdbreact";

const LinkCard = ({ link }) => {
  return (
    <MDBContainer>
      <MDBCard
        className="card-body"
        style={{ width: "40rem", marginTop: "1rem" }}
      >
        <MDBCardTitle>Your link</MDBCardTitle>
        <MDBCardText>
          Short link: <a href={link.to} target="_blank" rel="noopener  noreferrer">
            {link.to}
          </a>
        </MDBCardText>
        <MDBCardText>
          Whence: <a href={link.from} target="_blank" rel="noopener  noreferrer">
            {link.from}
          </a>
        </MDBCardText>
        <MDBCardText>
          Link clicks: <strong>{link.clicks}</strong>
        </MDBCardText>
        <MDBCardText>
          Date: <strong>{new Date(link.date).toLocaleDateString()}</strong>
        </MDBCardText>
      </MDBCard>
    </MDBContainer>
  );
};

export default LinkCard;
