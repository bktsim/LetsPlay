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
import { useContext } from "react";
import { LoginContext } from "../../_app";

export const LoginModal = () => {
    const { loggedIn, setLoggedIn } = useContext(LoginContext)
    return (
        <div>
            <Modal
                closeButton
                preventClose
                aria-labelledby="modal-title"
                open={!loggedIn}
            // onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Welcome to
                        <Text b size={18}>
                            NextUI
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
                    // contentLeft={<Mail fill="currentColor" />}
                    />
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Password"
                    // contentLeft={<Password fill="currentColor" />}
                    />
                    <Row justify="space-between">
                        <Checkbox>
                            <Text size={14}>Remember me</Text>
                        </Checkbox>
                        <Text size={14}>Forgot password?</Text>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto onClick={() => {
                        fetch("/api/login", {
                            method: "POST",
                            headers: {
                                "Content-type": "application/json; charset=UTF-8"
                            },
                            body: JSON.stringify({
                                email: "",
                                password: ""
                            })
                        }).then(res => res.status === 200 ? setLoggedIn(true) : res)

                    }}>
                        Sign in
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};