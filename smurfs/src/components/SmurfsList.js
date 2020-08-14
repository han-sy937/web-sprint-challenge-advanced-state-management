import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from './actions/smurfActions'
import { Smurf } from '../components/smurf'

const SmurfsList = (props) => {
    
    // console.log(props)
    return (
        <div>
            {props.smurfs.map(smurf => {
                return <Smurf key={smurf.id} smurf={smurf} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs

    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfsList)