import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Field = ({
    type,
    value,
    placeholder,
    changeField
}) => {
    return (
        <div>
            <input
                className="field"
                type={type} 
                placeholder={placeholder}
                value={value}
                onChange={(event) => {
                    changeField(event.target.value);
                }}
            />
        </div>  
    );
};

Field.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    changeField: PropTypes.func,
    value: PropTypes.string,
}

export default Field;