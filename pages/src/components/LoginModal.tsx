/* eslint-disable react-hooks/rules-of-hooks */
import {
    Image,
    Card,
    Container,
    Modal,
    Text,
    Input,
    Badge,
    Button,
    Spacer,
    Checkbox,
    Row,
} from "@nextui-org/react";
import { useContext, useState } from "react";
import { LoginContext } from "../../_app";
import useStorage from "../hooks/storage";

export const LoginModal = () => {
    const { loggedIn, setLoggedIn, user, setUser } = useContext(LoginContext)
    let password = "";
    let email = "";
    return (
        <div>
            <Modal
                preventClose
                aria-labelledby="modal-title"
                open={!loggedIn}

                blur
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Welcome to
                        <Text b size={18}>
                            LetsPlay
                        </Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Email"
                        onChange={(e) => email = e.target.value}
                    // contentLeft={<Mail fill="currentColor" />}
                    />
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Password"
                        onChange={(e) => password = e.target.value}
                    // contentLeft={<Password fill="currentColor" />}
                    />
                    {/* <Row justify="space-between">
                        <Checkbox
                            onClick={useStorage().setItem("loggedIn", "session", "true")}
                        >
                            <Text size={14}>Remember me</Text>
                        </Checkbox>
                        <Text size={14}>Forgot password?</Text>
                    </Row> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button auto onClick={() => {
                        fetch("/api/login", {
                            method: "POST",
                            headers: {
                                "Content-type": "application/json; charset=UTF-8"
                            },
                            body: JSON.stringify({
                                email: email,
                                password: password
                            })
                        }).then(res => {
                            if (res.status === 200) {
                                setLoggedIn(true)
                                return res.json().then(data => {
                                    setUser(data);
                                    useStorage().setItem("loggedIn", "true", "session");
                                    useStorage().setItem("user", JSON.stringify(data), "session");
                                })
                            } else {
                                res.json().then((data) => console.log(data));
                            }
                        })
                    }}>
                        Sign in
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};