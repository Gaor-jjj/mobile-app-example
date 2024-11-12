import { View, Text, Linking, Image, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import ListItem from '../../../components/ListItem'
import { useRouter } from 'expo-router'
import EditableBox from '../../../components/EditableBox'
import { icons } from '../../../constants'
import CustomButton from '../../../components/CustomButton'

const Settings = () => {
    const router = useRouter();
    const [editing, setEditing] = useState(false);
    const [values, setValues] = useState({ name: 'User', email: 'user@email.com' });

    const onChange = (key, value) => {
        setValues(v => ({ ...v, [key]: value }));
    }

    const onEditPress = () => {
        setEditing(true);
    }

    const onSave = () => {
        setEditing(false);
    }

    const onItemPress = () => {
        Linking.openURL('https://google.com');
    }

    return (
        <SafeAreaView className="bg-white flex-1" edges={['top']}>
            <ScrollView 
                contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 16 }}
                className="mt-5"
            >
                <Header
                    title='Settings'
                    showBack
                    onBackPress={() => router.back()}
                />
                <View className="mt-5 flex-row items-center justify-between">
                    <Text className="font-nregular text-sm text-gray-500">Personal Information</Text>
                    <Pressable onPress={onEditPress}>
                        <Image source={icons.edit} className="h-6 w-6" />
                    </Pressable>
                </View>
                
                <EditableBox 
                    label="Name" 
                    value={values.name} 
                    onChangeText={(v) => onChange('name', v)} 
                    editable={editing} 
                />
                <EditableBox 
                    label="Email" 
                    value={values.email} 
                    onChangeText={(v) => onChange('email', v)} 
                    editable={editing} 
                />

                {editing && (
                    <CustomButton 
                        title="Save" 
                        handlePress={onSave}
                        containerStyles="mt-4 bg-primary h-14"
                        textStyles="font-mbold"
                    />
                )}
                
                <Text className="font-nregular text-sm text-gray-500 mt-5">Help Center</Text>
                <ListItem title="FAQ" onPress={onItemPress} />
                <ListItem title="Contact Us" onPress={onItemPress} />
                <ListItem title="Privacy & Terms" onPress={onItemPress} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Settings;
