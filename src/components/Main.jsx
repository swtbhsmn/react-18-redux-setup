import React, { Suspense } from 'react';
import { withRouter } from '../utils';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFakeData } from '../redux_store/ActionCreator'
const SignIn = React.lazy(() => import('./SignIn'));
const SignUp = React.lazy(() => import('./SignUp'));
const Home = React.lazy(() => import('./Home'))
const mapStateToProps = state => {
    return {
        fakeData: state.fakeData
    };
}
const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(fetchFakeData())
})

class Main extends React.Component {
    render() {
        const RenderReduxDemo = () => (
            <>
                <button onClick={this.props.fetchData}>getData</button>

                <div>
                    {this.props.fakeData.status === "loading" ? "loading..." : 'idle'}
                </div>
                {JSON.stringify(this.props.fakeData, null, 2)}
            </>
        )
        return (
            <div className="main">
                <Suspense fallback={<div className='fallback'>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path='/signin' element={<SignIn props={this.props} />} />
                        <Route path='/signup' element={<SignUp props={this.props} />} />
                        <Route path='/redux-demo' element={<RenderReduxDemo />} />
                    </Routes>
                </Suspense>

            </div>
        )
    }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));