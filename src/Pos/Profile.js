import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
function Profile(props) {
  return (
    <Card style={{ marginTop: 20, paddingTop: 20 }}>
      <Card.Img
        variant="top"
        align="center"
        style={{ width: 64, margin: "0 auto", marginTop: 10 }}
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/1200px-Brad_Pitt_2019_by_Glenn_Francis.jpg"
        }
      />
      <Card.Body>
        <Card.Title align="center">Brad Pitt</Card.Title>
        <Card.Text align="center">Cashier Man</Card.Text>
        <div align="center">
          <Button variant="info">Open Profile</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Profile;
