import Container from "../../common/Container/styled";
import Header from "../../common/Header/styled";
import Section from "../../common/Section";
import { Image } from "./styled";
import Photo from "./photo.jpg";

const AuthorPage = () => {
    return (
        <Container>
            <Header>O autorze</Header>

            <Section
                title={
                    <>
                        <Image src={Photo} alt="Piotr Godlewski - photo"/>
                        Piotr Godlewski
                    </>
                }
                body={
                    <>
                        Cześć🖐 mam 32 lata i dołączyłem do kursu (listopad 2022) aby rozwijać się w kierunku programowania, co pozwoli na realizację moich marzeń. A ta praca domowa jest efekt mojej pracy, jest to już 14 moduł 🤯. Mimo pracy na eatcie i mając rodzinę 👨‍👩‍👧‍👦, znajduję czas na naukę, także zachęcam Was do nauki, każdy z nas da radę💪🚀
                    </>
                }
            />

        </Container>
    )
}

export default AuthorPage