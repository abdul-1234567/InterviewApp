import { styled } from '@mui/system';

export const ContentWrapper = styled('div') (() => 
    `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        width: 85%;
        height: 100%;
    `
);
export const ImageWrapper = styled('div') (() => 
    `
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `
);
export const ButtonWrapper = styled('div') (() => 
    `
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 50%;
        margin-bottom: 20px;
    `
);