import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Tailwind,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <>
      <Html>
        <Preview>Welcome aboard!</Preview>
        <Tailwind>
          <Body style={body}>
            <Container>
              <Text style={heading}>Hello {name}</Text>
              <Link
                href="https://codewithmosh.com"
                className="text-blue-400-500 underline"
              >
                www.codewithmosh.com
              </Link>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    </>
  );
};

export default WelcomeTemplate;

const body: CSSProperties = {
  background: "#fff",
};

const heading: CSSProperties = {
  fontSize: "32px",
};
