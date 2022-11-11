import React from 'react';
import { withRouter } from '../utils';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFakeData} from '../redux_store/ActionCreator'
const mapStateToProps = state => {
    return {
        fakeData:state.fakeData
    };
}
const mapDispatchToProps = dispatch => ({
    fetchData:()=>dispatch(fetchFakeData())
})

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Routes>
                    <Route path='/' element={<>
                    <button onClick={this.props.fetchData}>getData</button>
                    <div>
                        {this.props.fakeData.status === "loading" ? "loading..." : 'idle'}
                    </div>
                    </>} />
                </Routes>
                {JSON.stringify(this.props.fakeData,null,2)}
            </div>
        )
    }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));