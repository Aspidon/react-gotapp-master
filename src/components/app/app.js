import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';
import ErrorMessage from '../error';

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

    state = {
        reset: true,
        error: false
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
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
            return <button key='first' type='button' className='btn btn-primary' onClick={this.onReset}>View/Hidden</button>;
        }

        const reset = this.state.reset;

        const randomCharContent = reset ? <RandomChar/> : null;

        if (this.state.error) {
            return <ErrorMessage/>
        }
        
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
                    <CharacterPage/>
                </Container>
            </>

        )
    }
}