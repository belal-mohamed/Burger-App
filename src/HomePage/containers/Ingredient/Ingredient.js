import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faUtensils, faGrinWink } from '@fortawesome/free-solid-svg-icons';
import './ing.css';

class Ingredient extends Component {
    
    state = {
        leftingredient: 'leftingredient',
        rightingredient: 'rightingredient',
        middleingredient: 'middleingredient'
    };

    componentDidMount() {

        window.addEventListener('scroll', () => {
            window.pageYOffset > 500 ? this.setState({
                leftingredient: 'leftingredient showleftingredient',
                rightingredient: 'rightingredient showrightingredient',
                middleingredient: 'middleingredient showmiddleingredient'
            }) : this.setState({
                leftingredient: 'leftingredient',
                rightingredient: 'rightingredient',
                middleingredient: 'middleingredient'
            });
        })
    }

    render() {
        return (
            <div className="ingredient">
                <Container>
                    <Row className="text-center">
                        <Col xs={12} className="mt-4 mt-md-0">
                            <div className="h3style" >
                                <h3 className="h3-q" >
                                    We Provide The Quality And Sustainability
                                </h3>
                            </div>
                        </Col>
                        <Col md={4} sm={12} xs={12}>
                            <div className={this.state.leftingredient}>
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <p ref={this.ref}> 100% pure beef patties free of any additives, only a pinch of salt and pepper is added</p>
                                <p> 100% chicken using chicken breasts and thighs </p>
                                <p>100% fresh potatoes fried in 100% pure palm oil</p>
                            </div>
                        </Col>
                        <Col md={4} sm={12} xs={12} className="mt-4 mt-md-0">
                            <div className={this.state.middleingredient}>
                                <FontAwesomeIcon icon={faUtensils} />
                                <p> 100% pure beef patties free of any additives, only a pinch of salt and pepper is added</p>
                                <p> 100% chicken using chicken breasts and thighs </p>
                                <p>100% fresh potatoes fried in 100% pure palm oil</p>
                            </div>
                        </Col >
                        <Col md={4} sm={12} xs={12} className="mt-4 mt-md-0">
                            <div className={this.state.rightingredient}>
                                <FontAwesomeIcon icon={faGrinWink} />
                                <p> 100% pure beef patties free of any additives, only a pinch of salt and pepper is added</p>
                                <p> 100% chicken using chicken breasts and thighs </p>
                                <p>100% fresh potatoes fried in 100% pure palm oil</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Ingredient;