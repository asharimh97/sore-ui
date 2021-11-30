import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import {
  Base,
  Box,
  Flex,
  Grid,
  Text,
  Image,
  Tag,
  Divider,
  Button as StyledButton,
  Alert,
} from "../src/Common";

import { Button } from "./Button";
import "./header.css";

interface HeaderProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <header>
    <div className="wrapper">
      <div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        {user ? (
          <Button size="small" onClick={onLogout} label="Log out" />
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button
              primary
              size="small"
              onClick={onCreateAccount}
              label="Sign up"
            />
          </>
        )}
      </div>
    </div>
    <Base.p color="tangerine-a50" py="10">
      Hohoho ini dibikin dari common component
    </Base.p>
    <Flex justify="space-between">
      <p>Hohoho apakah aku bisa di samping kiri?</p>
      <p>Hohoho apakah aku bisa di tengah?</p>
      <p>Hohoho apakah aku bisa di samping kanan?</p>
    </Flex>
    <Grid column="repeat(3, 1fr)">
      <p>Hohoho apakah aku bisa di samping kiri?</p>
      <p>Hohoho apakah aku bisa di tengah?</p>
      <p>Hohoho apakah aku bisa di samping kanan?</p>
    </Grid>
    <Text as="h1" forwardedAs="h2" weight="bold" size="24px" italic lowercase>
      <p>Lorem ipsum dolorsit amet ini text hohoho</p>
    </Text>
    <Image
      src="https://i.pravatar.cc/750"
      borderRadius="6px"
      width="250px"
      height="100px"
      autofit
      mb="20px"
    />
    <Box w="250px" p="8px">
      <Flex>
        <Tag color="indigo">Hulalalla</Tag>
        <Tag>Hulalalla</Tag>
        <Tag color="#333">Hulalalla</Tag>
        <Tag size="small" color="#333">
          Hulalalla
        </Tag>
      </Flex>
      <Divider />
      <Divider>Lorem</Divider>
      <Divider orientation="left">Lorem</Divider>
      <Divider orientation="right">Lorem</Divider>
      <Flex>
        <Tag color="indigo">Hulalalla</Tag>
        <Tag>Hulalalla</Tag>
        <Tag color="#333">Hulalalla</Tag>
      </Flex>
    </Box>
    <Flex>
      <StyledButton boxShadow="md" primary>
        Hohoho ini button
      </StyledButton>
      <StyledButton shadow="lg" primary icon={<IoLogoFacebook />} ghost>
        Hohoho ini button
      </StyledButton>
      <StyledButton secondary>Hohoho ini button</StyledButton>
      <StyledButton boxShadow="lg" danger ghost>
        Hohoho ini button
      </StyledButton>
    </Flex>
    <Alert message="Hohoho" description="Ini namanya alert description" />
  </header>
);
