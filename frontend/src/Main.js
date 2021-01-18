import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './shared/components/Header';
import DetailProduct from './views/DetailProduct';
import ResultsProducts from './views/ResultsProducts';

const Home = () => {
    return (<div className='notFound'>
        Escriba para iniciar una búsuqeda
    </div>)
}

const Main = () => {

    return (<Fragment>
                <Router>
                <Header />
                    <div className='container sectionView'>
                        <Switch>
                            <Route path='/items/:id' component={DetailProduct} />
                            <Route path='/items' component={ResultsProducts} />
                            <Route path='/' component={Home} />
                        </Switch>
                    </div>
                </Router>
            </Fragment>);

}

export default Main;