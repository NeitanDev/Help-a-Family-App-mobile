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
    padding: 24px;
    /* border-radius: 50px; */
`;

export const ContentInfoFamily = styled.View`
    width:100%;
    /* height:60%; */
    background-color: #f2f2f2;
    border-radius: 10px;
    padding:12px;
    margin-bottom: 24px;
`;

export const TopInfoFamily = styled.View`
     width:100%;
     justify-content: space-between;
     flex-direction: row;
     /* margin-bottom:5px; */
`;

export const TitleInfoFamily = styled.Text`
    font-size: 24px;
    text-align:center;
`;

export const ContainerTitleInfoFamily = styled.View`
    width: 100%;
    align-items:center;
    margin-bottom:18px;
`;

export const Title = styled.Text`
    color:#000;
    font-weight: bold;
`;

export const Description = styled.Text`
    color: #41414d;
    margin-bottom:15px;

`;

export const LocalInfoFamily = styled.View`
    width:100%;
    justify-content: space-between;
    flex-direction: row;
`;

export const ContentBunttons = styled.View`
    width: 100%;
    align-items:center;
    justify-content: space-between;
    flex-direction: row;
`;
export const Button = styled.TouchableOpacity`
    width: 45%;
    height: 50px;
    background-color: #2bbf54;
    border-radius: 10px;
    align-items:center;
    justify-content:center;
`;