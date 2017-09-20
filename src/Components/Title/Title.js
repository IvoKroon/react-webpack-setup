import React from 'react';
import styled from './style';

export const Title = props => {
    return (
        <styled.Header color="blue">
            { props.title }
        </styled.Header>
    );
};

export default Title;