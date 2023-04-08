import { Container, Header, Title } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Container>
    <Header>
      <Title>
        {title}
      </Title>
      {extraHeaderContent}
    </Header>
    {body}
  </Container>
)

export default Section