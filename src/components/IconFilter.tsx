import React from 'react';
import styled from 'styled-components';
import { sizeMedia } from '../../styles/mediaQuerys';
export interface IconFilter {
    title: string;
    iconName: string;
}

const iconArray: IconFilter[] = [
    { title: 'car', iconName: 'fas fa-search' },
    { title: 'event', iconName: 'fas fa-plus' },
    { title: 'job', iconName: 'fas fa-bars' },
    { title: 'place', iconName: 'fas fa-times' },
    { title: 'Real state', iconName: 'fas fa-search' },
];


const IconContainer = styled.div<{ row?: boolean }>`
    width: 80%;
    display:flex;
    justify-content:center;
    margin: 1rem auto;

    `;
const IconLabel = styled.div<{ theme?: string }>`
    margin : 0 15px;
    color:${({ theme }) => theme === 'dark' ? 'white' : 'black'};
    cursor: pointer;  
    @media ${sizeMedia('sm')} {
        display:flex;
        flex-direction:column;
        align-items:center;
    }
`;
const Icon = styled.i`
    
    margin-right:5px;
    
`;
const Label = styled.label`
    text-transform: capitalize;
`;
interface Props {
    theme?: string;
    style?: React.CSSProperties;
};
export const IconFilterList = ({ style, theme }: Props) => {

    return (
        <IconContainer
            style={style}
        >
            {iconArray.map((icon, i) => (
                <IconLabel
                    key={i}
                    theme={theme}
                >
                    <Icon
                        className={icon.iconName} />
                    <Label>
                        {icon.title}
                    </Label>
                </IconLabel>
            ))}
        </IconContainer>
    )
}
