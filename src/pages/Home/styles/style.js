import styled from 'styled-components/native';
import { exp } from 'react-native-reanimated';

export const Container = styled.View`
    flex:1;
    align-items: center;
    background-color: #2bbf54;
`;

export const Header = styled.View`
    width:100%;
    /* align-items: flex-start; */
    height: 11%;
    /* background-color: #333; */
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
    /* background-color: #333; */
`;

export const Logo = styled.Image`
    height: 100%;
    width:100%;
`;

export const ContainerTitlePage = styled.View`
    height: 100%;
    width:40%;
    /* background-color: #2bbf54; */
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
    height: 87%;
    background-color: #FFF;
    align-items: center;
    /* justify-content: center; */
    border-radius: 50px;
    padding-left: 24px;
    padding-right: 24px;
`;

//até aqui vai ser padrão de todas as paginas

export const ContainerSolid = styled.View`
    height: 30%;
    width: 100%;
    padding-left: 22px;
    padding-right: 22px;
    /* background-color: #152; */
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    /* margin-left: 100px; */
    /* margin-right: 100px; */
`;

export const Solid = styled.Image`
    height: 100%;
    width: 100%;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
`;

export const Title = styled.Text`
    font-family: Amaranth-Regular;
    font-size: 50px;
    color: #2bbf54;
    text-align: center;
`;

export const Form = styled.View`
    margin: 24px;
    /* background-color: #333; */
    width: 100%;
    height: 40%;
    justify-content: flex-end;
    padding-bottom:24px;
`;

export const ButtonLogin = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: #2bbf54;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
`;

export const ButtonLoginText = styled.Text`
    font-family: Amaranth-Regular;
    font-size: 40px;
    color: #fff;
    text-align: center;
`;

export const ButtonCadastro = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: #FFF;
    border: 1px;
    border-color: #2bbf54;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
`;

export const ButtonCadastroText = styled.Text`
    font-family: Amaranth-Regular;
    font-size: 40px;
    color: #2bbf54;
    text-align: center;
`;

export const Link = styled.Text`
    /* font-family: arial; */
    font-size: 30px;
    color: blue;
    text-align: center;
    text-decoration: underline;
`;

export const ContainerModal = styled.View`
    flex: 1;
    margin: 20px;
    border-radius: 20px;
    background-color: #FFF;
    border: 1px;
    border-color: #a6a6a6;
    align-items: center;
`;

export const BodyModal = styled.View`
    width:100%;
    height: 90%;
    background-color: #fff;
    border-radius: 20px;
    padding: 24px;
`;

export const ButtonVoltar = styled.View`
    width: 90%;
    height: 10%;
    background-color: #FFF;
    align-items: center;
    justify-content: center;
    border-top-width: 1px;
    border-top-color: #a6a6a6;
    border-left-color: #FFF;
    border-right-color: #FFF;
    border-bottom-color: #FFF;
`;

export const ButtonVoltarText = styled.Text`
    font-family: Amaranth-Regular;
    font-size: 30px;
    margin-bottom: 20px;
    margin-top: 0px;
`;

export const ModalItem = styled.TouchableOpacity`
    height: 45%;
    width: 100%;
    background-color: #FFF;
    /* margin-bottom: 10%; */
    border-radius: 20px;
    padding: 10px;
    align-items:center;
    justify-content:center;
    border: 0.3px;
`;

export const ModalItemViewImage = styled.View`
    height: 90%;
    width: 100%;
    /* background-color: #333; */
    align-items:center;
`;

export const ModalItemImage = styled.Image`
    height: 90%;
    width:70%;
`;

export const ModalItemText = styled.Text`
font-family: Amaranth-Regular;
    font-size: 30px;
`;