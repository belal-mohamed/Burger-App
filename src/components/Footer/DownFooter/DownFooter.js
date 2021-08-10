import React from 'react';
import classes from './DownFooter.module.css';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const DownFooter = (props) => {
    return (
        <footer className={classes.Footer}>
            <div className={classes.DownFooter}>
                <Container>
                    <Row className={classes.Row}>
                        <span className={classes.MadeBy}> &copy; 2020 myburger.com </span>
                        <div className={classes.Social}>
                            <FontAwesomeIcon
                                className={classes.Insta}
                                icon={faInstagram} />
                            <FontAwesomeIcon
                                className={classes.Twitter}
                                icon={faTwitter} />
                            <FontAwesomeIcon
                                className={classes.Fb}
                                icon={faFacebookF} />
                            <FontAwesomeIcon
                                className={classes.YouTube}
                                icon={faYoutube} />
                        </div>
                    </Row>
                </Container>
            </div>
        </footer>

    )


}


export default DownFooter;