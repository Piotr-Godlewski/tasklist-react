import "./style.css";

const Section = ({title, body, extraHederContent}) => (
<section className="container">
        <header className="container__header">
          <h2 className="container__header--removeMargin">{title}</h2>
          {extraHederContent}
        </header>
        {body}
      </section>
)

export default Section