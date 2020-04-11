import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    align-items: center;
    background-color: #2bbf54;
`;

export const Header = styled.View`
    width:100%;
    height: 11%;
    padding-left:40px; 
    justify-content: space-between;
    flex-direction: row;
    padding-right: 40px;
`;

export const ContainerLogo = styled.View`
    height: 100%;
    width:40%;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    height: 100%;
    width:100%;
`;

export const ContainerTitlePage = styled.View`
    height: 100%;
    width:40%;
    justify-content:center;
    align-items:center;
`;

export const TitlePage = styled.Text`
    font-family: Amaranth-Regular;
    font-size: 40px;
    color: #fff;
`;

export const Body = styled.View`
    width: 100%;
    height: 89%;
    background-color: #FFF;
    align-items: center;
    border-radius: 50px;
`;

export const CalloutDetails = styled.View`
    /* background-color: #333; */
    width: 100%;
    height: 100%;
`;

export const ContainerIconFamily = styled.View`
    height:44px;
    width:44px;
    border-radius:5px;
    border:0.3px;
    align-items:center;
    justify-content:center;
`;

export const IconFamily = styled.Image`
    height:42px;
    width:42px;
    border-radius:5px;
    /* border:1px; */
`;

export const NameFamily = styled.Text`
    color: #000;
    font-family: Amaranth-Regular;
    margin-bottom:2px;
`;

export const TitleNameFamily = styled.Text`
    color: #bfbfbf;
    font-family: Amaranth-Regular;
`;

export const ContentNameFamili = styled.View`

`;

export const TopFamili = styled.View`
    width: 100%;
    justify-content:space-between;
    flex-direction: row;
`;