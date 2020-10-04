import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

// const Btn = () => {
//     return <button className='btn btn-first'>View/Hidden</button>;
// }

// const onReset = () => {

// }

// const App = () => {
//     return (
//         <> 
//             <Container>
//                 <Header />
//             </Container>
//             <Container>
//                 <Row>
//                     <Col lg={{size: 5, offset: 0}}>
//                         <RandomChar/>
//                         <Btn onClick={this.onReset}/>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col md='6'>
//                         <ItemList />
//                     </Col>
//                     <Col md='6'>
//                         <CharDetails />
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     );
// };

// export default App;


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reset: true
        }
        this.onReset = this.onReset.bind(this);
    }
        
    onReset = () => {
        let resetInv = this.state.reset;
        console.log('click');
        this.setState({
            reset: !resetInv
        });
    }

    render() {

        const Btn = () => {
            return <button key='first' type='button' className='btn btn-first' onClick={this.onReset}>View/Hidden</button>;
        }

        const reset = this.state.reset;

        const randomCharContent = reset ? <RandomChar/> : null;

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomCharContent}
                            <Btn/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>

        )
    }
}