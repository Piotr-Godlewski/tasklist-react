import "./style.css";

const Section = ({title, body, extraHeaderContent}) => (
<section className="container">
        <header className="container__header">
          <h2 className="container__title">{title}</h2>
          {extraHeaderContent}
        </header>
        {body}
      </section>
)

export default Section