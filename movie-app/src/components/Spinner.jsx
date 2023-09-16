import PropTypes from 'prop-types';
import { RotatingLines } from 'react-loader-spinner'


const Spinner = ({ loading, text }) => {

    const style = {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: "99999",
        background: "#000000",
        opacity: "0.8",
        width: "100vw",
    }

    const textStyle = {
        color: "#fff"
    }

    return (
        <>
            {loading && <div style={style} >
                <RotatingLines
                    strokeColor="orange"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                />
                <h1 style={textStyle}>{ text ? text : 'Please wait...' }</h1>
            </div>}
        </>

    );
};

Spinner.propTypes = {
    loading: PropTypes.bool,
    text: PropTypes.string
};


export default Spinner;
