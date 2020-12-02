import React from 'react';
import { View, Text, ImageBackground, Button } from 'react-native';

interface Props {
    showContent: boolean,
    navigation: any,
    onPress: any
}

interface State {
    showContent: boolean,
}

export default class CustomLoginButton extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showContent: true
        }

    }
    ShowHideComponent = () => {
        if (this.state.showContent == true) {
            this.setState({ showContent: false });
        } else {
            this.setState({ showContent: true });
        }
    };

    render() {
        return (
            <View style={{
                width: '100%', alignSelf: 'center', marginBottom: 10,
                marginTop: 10, height: 200
            }}>
                <ImageBackground source={require('../images/mcd_login.jpeg')}
                    style={{
                        flex: 1,
                        justifyContent: "center"
                    }}>
                    <Text style={{
                        color: 'black', fontSize: 24,
                        alignSelf: 'center', padding: 5, fontWeight: 'bold'
                    }}> Login for our new exclusive offers</Text>
                    <View style={{
                        width: 100, height: 50, flex: 1,
                        alignSelf: 'flex-end', alignItems: 'flex-end', justifyContent: 'flex-end',
                        margin: 10
                    }}>
                        <Button
                            onPress={this.props.onPress}
                            title="Login Now"
                            color="orange"
                        />
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

