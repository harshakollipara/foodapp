import React from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { View } from 'react-native';

interface customImageSliderProps { }

interface customImageSliderState {
    images: any[];
}

export default class customImageSlider extends React.Component<customImageSliderProps, customImageSliderState> {

    constructor(props: customImageSliderProps) {
        super(props);
        this.state = {
            images: [
                require('../assets/offers/Offer1.png'),
                require('../assets/offers/Offer2.png'),
                require('../assets/offers/Offer3.png'),
                require('../assets/offers/Offer4.jpg'),
                require('../assets/offers/Offer5.jpg'),
            ]
        }
    }
    render() {
        return (
            <View>
                <SliderBox
                    images={this.state.images}
                    sliderBoxHeight={270}
                    autoplay
                    circleLoop
                />
            </View>
        )
    }
}


