import Container from "../../common/Container/styled";
import Header from "../../common/Header/styled";
import Section from "../../common/Section";

const AuthorPage = () => {
    return (
        <Container>
            <Header>O autorze</Header>

            <Section
                title="Piotr Godlewski"
                body={
                    <>
                        Mam na imię Piotrek, mam 32 lata i dołączyłem z Wami do kursu aby rozwijać się w kierunku programowania, co pozwoli na realizację moich marzeń.
                    </>
                }
            />

        </Container>
    )
}

export default AuthorPage