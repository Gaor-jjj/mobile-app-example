import { View, Text, TouchableOpacity, Image } from 'react-native'
import { icons } from '../constants'

const Checkbox = ({checked, onCheck}) => {

    return (
        <TouchableOpacity activeOpacity={0.6} className={`border border-gray rounded-lg w-7 h-7 ${checked ? 'bg-gray' : ''}`} onPress={() => onCheck(!checked)}>
            {checked && (
                <View className="justify-center items-center h-full w-full">
                    <Image source={icons.check} className="w-5 h-3" resizeMode='contain'/>
                </View>
            )}
        </TouchableOpacity>
    )
}

export default Checkbox