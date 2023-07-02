import {
  Flex,
  Box,
  Heading,
  Spacer,
  Button,
  Center,
  Text,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDarkTheme, setDefaultTheme } from "../../store/themeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const darkmode = useSelector((state) => state.theme.darkmode);

  const setDark = () => {
    dispatch(setDarkTheme());
  };

  const setDefault = () => {
    dispatch(setDefaultTheme());
  };

  return (
    <Fragment>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        bg={!darkmode ? "#176B87" : "#001C30"}
        color={!darkmode ? "#F8CBA6" : "#fff"}
        padding="10px"
        marginBottom="100px"
        cursor="pointer"
      >
        <Box p="2">
          <Heading size="md">Geekster</Heading>
        </Box>
        <Spacer />
        <Box gap="2">
          <Flex gap="10">
            <Heading size="md">Home</Heading>
            <Heading size="md">Contact</Heading>
            <Heading size="md">Service</Heading>
          </Flex>
        </Box>
      </Flex>
      <Center margin="50px">
        <Text color={!darkmode ? "#176B87" : "#001C30"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque in
          nobis excepturi id! Quidem atque, molestiae sed reiciendis, nisi amet
          quam rem quos quisquam fugit repellat aperiam illo deserunt. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Fugiat sint aliquam
          beatae tempora qui voluptates esse, eos eveniet impedit voluptatibus
          deleniti, non ex fuga totam eaque et distinctio, cupiditate
          repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Placeat sunt sit ab nulla at commodi nostrum inventore neque soluta
          doloribus. Fuga aliquam natus in dolorem dicta atque soluta quaerat
          aspernatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Nemo, similique asperiores! Odit laudantium veritatis natus minus
          porro accusamus enim est quo quisquam? Deleniti autem laudantium
          voluptatibus at esse ipsa atque!
        </Text>
        <Spacer />
      </Center>
      <Center>
        {!theme.darkmode ? (
          <Button colorScheme="teal" variant="outline" onClick={setDark}>
            Toggle to set the theme
          </Button>
        ) : (
          <Button colorScheme="teal" variant="solid" onClick={setDefault}>
            Toggle to set the theme
          </Button>
        )}
      </Center>
    </Fragment>
  );
};

export default Navbar;
