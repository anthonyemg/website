import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mounted: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 0);
  }

  handleContactMeClick() {
    document.querySelector('.contact-form').scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const { mounted } = this.state;
    const classNamePrefix = 'home';
    const name = 'Anthony Greenheck'.split('');
  
    return (
      <div className={classNamePrefix}>

        <span data-mounted={mounted}>THE PORTFOLIO OF</span>

        <div className="test3">

          <span className="text-container">
            {name.map((letter, index) => (
              <Parallax
                key={`copy-${index}`}
                offsetXMax={50 * (index - 8)}
                className="text"
                slowerScrollRate={false}
              >
                {letter}
              </Parallax>
            ))}
          </span>

        </div>

        <span data-mounted={mounted}>WEB DEVELOPER</span>

        <button onClick={() => this.handleContactMeClick()}>
          Contact me
        </button>

      </div>
    )
  }
}

export default Home;



{/* const copy = 'Parallax'.split('');

const IntroCopy = () => (
    <div className={style.root}>
        <div className={style.barTop} />
        <span className={`${style.copy} h1`}>
            {copy.map((letter, i) => (
                <Parallax
                    key={`copy-${i}`}
                    offsetXMax={100 * (i - 3)}
                    className={style.letter}
                >
                    {letter}
                </Parallax>
            ))}
        </span>
        <div className={style.barBottom} />
    </div>
); */}